import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

/**
 * VideoScrub - Exact video scrubbing engine & styling from C:\Antigravity\port
 * 
 * Supports both:
 * - "dark": Cinematic obsidian theme with engine_forward.mp4
 * - "light": Minimalist executive white studio theme with engine_light_forward.mp4
 * - "audio": High-fidelity stereo audio track synchronized to scrollytelling
 */
export default function VideoScrub({ theme = "dark", soundEnabled = false, onToggleSound }) {
  const isLight = theme === "light";
  const fwdRef = useRef(null);
  const revRef = useRef(null);
  const audioRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hudInfo, setHudInfo] = useState({ progress: 0, time: 0 });

  const fwdSrc = isLight ? "/videos/engine_light_forward.mp4" : "/videos/engine_forward.mp4";
  const revSrc = isLight ? "/videos/engine_light_reverse.mp4" : "/videos/engine_reverse.mp4";
  const posterSrc = isLight ? "/photo/engine_light_poster.webp" : "/photo/engine_poster.webp";
  const audioSrc = "/audio/orchestration.mp3";

  useEffect(() => {
    const isPhone = window.innerWidth <= 768;
    setIsMobile(isPhone);
    setMounted(true);

    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Manage audio play / pause on soundEnabled toggle
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (soundEnabled) {
      audio.volume = 0.5;
      audio.play().catch((err) => {
        console.warn("Audio autoplay blocked by browser policy until interaction:", err);
      });
    } else {
      audio.pause();
    }
  }, [soundEnabled]);

  useEffect(() => {
    if (!mounted || isMobile) return;

    const fwd = fwdRef.current;
    const rev = revRef.current;
    const audio = audioRef.current;
    if (!fwd || !rev) return;

    let duration = fwd.duration || 10.0;
    let raf = null;
    let prevY = window.scrollY;
    let prevT = performance.now();
    let vel = 0;
    let frozenSnap = null;
    let activeEl = fwd;

    const FREEZE_VEL = 5;
    const PLAY_VEL = 80;
    const EDGE = 0.08;

    let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    let videoEndScroll = maxScroll;

    const calcVideoEnd = () => {
      const contact = document.getElementById("contact-section");
      if (contact) {
        // Complete video when contact section midpoint reaches the viewport center
        videoEndScroll = Math.max(1, contact.offsetTop + contact.offsetHeight * 0.5 - window.innerHeight * 0.5);
      } else {
        videoEndScroll = document.documentElement.scrollHeight - window.innerHeight;
      }
      maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    };

    calcVideoEnd();
    window.addEventListener("load", calcVideoEnd, { once: true });
    const onResize = () => calcVideoEnd();
    window.addEventListener("resize", onResize, { passive: true });

    const show = (el) => {
      if (activeEl === el) return;
      activeEl = el;
      fwd.style.opacity = el === fwd ? "1" : "0";
      rev.style.opacity = el === rev ? "1" : "0";
    };

    let fwdSeeking = false, fwdPend = null;
    const seekFwd = (t, fast = false) => {
      fwdPend = { t: Math.max(0, Math.min(duration, t)), fast };
      if (!fwdSeeking) flushFwd();
    };
    const flushFwd = () => {
      if (!fwdPend) { fwdSeeking = false; return; }
      const { t, fast } = fwdPend; fwdPend = null;
      if (Math.abs(fwd.currentTime - t) < 0.033) { fwdSeeking = false; return; }
      fwdSeeking = true;
      fast && fwd.fastSeek ? fwd.fastSeek(t) : (fwd.currentTime = t);
    };
    fwd.addEventListener("seeked", flushFwd);

    let revSeeking = false, revPend = null;
    const seekRev = (t, fast = false) => {
      revPend = { t: Math.max(0, Math.min(duration, t)), fast };
      if (!revSeeking) flushRev();
    };
    const flushRev = () => {
      if (!revPend) { revSeeking = false; return; }
      const { t, fast } = revPend; revPend = null;
      if (Math.abs(rev.currentTime - t) < 0.033) { revSeeking = false; return; }
      revSeeking = true;
      fast && rev.fastSeek ? rev.fastSeek(t) : (rev.currentTime = t);
    };
    rev.addEventListener("seeked", flushRev);

    let fwdSyncAt = 0, revSyncAt = 0;
    const bgSyncFwd = (t, now) => {
      if (now - fwdSyncAt < 300 || Math.abs(fwd.currentTime - t) < 0.3) return;
      fwd.fastSeek ? fwd.fastSeek(t) : (fwd.currentTime = t);
      fwdSyncAt = now;
    };
    const bgSyncRev = (t, now) => {
      if (now - revSyncAt < 300 || Math.abs(rev.currentTime - t) < 0.3) return;
      rev.fastSeek ? rev.fastSeek(t) : (rev.currentTime = t);
      revSyncAt = now;
    };

    let lastHudUpdate = 0;

    const frame = (now) => {
      raf = requestAnimationFrame(frame);
      if (!duration) return;

      const dt = Math.max((now - prevT) / 1000, 0.001);
      prevT = now;
      const scrollY = window.scrollY;
      vel = vel * 0.82 + ((scrollY - prevY) / dt) * 0.18;
      prevY = scrollY;

      const progress = videoEndScroll > 0 ? Math.min(1, Math.max(0, scrollY / videoEndScroll)) : 0;
      const tgt = progress * duration;
      const revTgt = Math.max(0, duration - tgt);
      const absVel = Math.abs(vel);
      const atStart = tgt <= EDGE;
      const atEnd = progress >= 0.995;

      // Throttle HUD state updates to 10fps for performance
      if (now - lastHudUpdate > 90) {
        setHudInfo({
          progress: Math.round(progress * 100),
          time: tgt,
        });
        lastHudUpdate = now;
      }

      // Sync Audio volume and timeline smoothly when sound is enabled
      if (soundEnabled && audio) {
        if (audio.paused) {
          audio.play().catch(() => {});
        }
        // Modulate volume: 0.35 ambient hum when idle; up to 0.9 when actively scrolling
        const targetVol = absVel > 15 ? Math.min(0.9, 0.35 + (absVel / 250) * 0.55) : 0.32;
        audio.volume = targetVol;

        // Keep audio in close sync with video timeline without stuttering micro-seeks
        const timeDiff = tgt - audio.currentTime;
        if (Math.abs(timeDiff) > 1.2) {
          audio.currentTime = Math.max(0, Math.min(duration, tgt));
        } else if (absVel > 25) {
          const rate = Math.min(1.75, Math.max(0.65, 0.8 + (absVel * (duration / videoEndScroll))));
          audio.playbackRate = rate;
        } else {
          audio.playbackRate = 1.0;
        }
      }

      // Past video completion point: hold frame
      if (atEnd) {
        if (!fwd.paused) fwd.pause();
        if (!rev.paused) rev.pause();
        show(fwd);
        frozenSnap = null;
        return;
      }

      // Low velocity or at start: freeze and hold frame
      if (absVel < FREEZE_VEL || atStart) {
        if (!fwd.paused) fwd.pause();
        if (!rev.paused) rev.pause();
        show(fwd);
        if (frozenSnap === null) {
          frozenSnap = atStart ? 0 : tgt;
          seekFwd(frozenSnap);
        }
        return;
      }
      frozenSnap = null;

      // Slow scrub: seek directly
      if (absVel < PLAY_VEL) {
        if (!fwd.paused) fwd.pause();
        if (!rev.paused) rev.pause();
        if (vel > 0) {
          if (tgt > fwd.currentTime + 0.033) seekFwd(tgt);
          show(fwd);
          bgSyncRev(revTgt, now);
        } else {
          if (revTgt > rev.currentTime + 0.033) seekRev(revTgt, true);
          show(rev);
          bgSyncFwd(tgt, now);
        }
        return;
      }

      // Fast Play: dynamic rate scaling
      const invM = duration / videoEndScroll;
      if (vel > 0) {
        const rate = Math.min(8, Math.max(0.25, vel * invM));
        if (Math.abs(fwd.playbackRate - rate) > 0.05) fwd.playbackRate = rate;
        if (Math.abs(fwd.currentTime - tgt) > 1.5) fwd.currentTime = tgt;
        if (fwd.paused) fwd.play().catch(() => {});
        if (!rev.paused) rev.pause();
        show(fwd);
        bgSyncRev(revTgt, now);
      } else {
        const rate = Math.min(8, Math.max(0.25, absVel * invM));
        if (Math.abs(rev.playbackRate - rate) > 0.05) rev.playbackRate = rate;
        if (Math.abs(rev.currentTime - revTgt) > 1.5) rev.currentTime = revTgt;
        if (rev.paused) rev.play().catch(() => {});
        if (!fwd.paused) fwd.pause();
        show(rev);
        bgSyncFwd(tgt, now);
      }
    };

    const onFwdEnded = () => { fwd.pause(); fwd.currentTime = duration; };
    const onRevEnded = () => { rev.pause(); rev.currentTime = duration; };
    fwd.addEventListener("ended", onFwdEnded);
    rev.addEventListener("ended", onRevEnded);

    const setup = () => {
      duration = fwd.duration || 10.0;
      fwd.currentTime = 0;
      rev.currentTime = duration;
      raf = requestAnimationFrame(frame);

      // Preload reverse video after initial frame is ready
      setTimeout(() => {
        rev.play().then(() => {
          rev.pause();
          rev.currentTime = duration;
        }).catch(() => {});
      }, 1500);
    };

    if (fwd.readyState >= 1) setup();
    else fwd.addEventListener("loadedmetadata", setup, { once: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      fwd.removeEventListener("seeked", flushFwd);
      rev.removeEventListener("seeked", flushRev);
      fwd.removeEventListener("ended", onFwdEnded);
      rev.removeEventListener("ended", onRevEnded);
    };
  }, [mounted, isMobile, theme, soundEnabled]);

  // Mobile layout: Fixed background video with ambient overlay
  if (isMobile) {
    return (
      <div className={`fixed inset-0 z-0 ${isLight ? "bg-[#f8fafc]" : "bg-[#080808]"} overflow-hidden`}>
        {/* Audio element */}
        <audio
          ref={audioRef}
          src={audioSrc}
          loop
          preload="auto"
          playsInline
        />
        <video
          key={fwdSrc}
          src={fwdSrc}
          poster={posterSrc}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className={`absolute inset-0 ${isLight ? "bg-white/70" : "bg-black/60"}`} />
        <div className={`absolute inset-0 bg-gradient-to-t ${isLight ? "from-[#fcfdfe] via-transparent to-white/40" : "from-[#080808] via-transparent to-black/50"}`} />
      </div>
    );
  }

  // Desktop: Exact full-screen background video scrub as in project port
  return (
    <>
      {/* Background Audio Track */}
      <audio
        ref={audioRef}
        src={audioSrc}
        loop
        preload="auto"
        playsInline
      />

      <div className={`fixed inset-0 z-0 ${isLight ? "bg-[#f8fafc]" : "bg-[#080808]"} overflow-hidden transition-colors duration-500`}>
        {/* Forward Video Element (Plays when scrolling down) */}
        <video
          key={`fwd-${fwdSrc}`}
          ref={fwdRef}
          src={fwdSrc}
          poster={posterSrc}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-150"
          style={{ willChange: "transform", transform: "translateZ(0)", opacity: 1 }}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />

        {/* Reverse Video Element (Plays when scrolling up) */}
        <video
          key={`rev-${revSrc}`}
          ref={revRef}
          src={revSrc}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-150"
          style={{ willChange: "transform", transform: "translateZ(0)", opacity: 0 }}
          muted
          playsInline
          preload="none"
          aria-hidden="true"
        />

        {/* Directional Vignettes / Overlays (Port Style) */}
        {isLight ? (
          <>
            <div className="absolute inset-0 bg-slate-900/[0.02]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#fcfdfe]/95 via-[#fcfdfe]/65 to-transparent/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#fcfdfe]/90 via-transparent to-[#fcfdfe]/35" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-[#080808]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-black/35" />
          </>
        )}
      </div>

      {/* Floating Modernization Core HUD Badge (Port Style) */}
      <div className={`hidden lg:flex fixed bottom-5 right-6 z-40 items-center gap-3 px-4 py-2.5 rounded-full backdrop-blur-md shadow-2xl text-[11px] font-medium transition-all ${
        isLight
          ? "bg-white/95 border border-slate-200/90 text-slate-700 shadow-slate-200/50"
          : "bg-[#121212]/95 border border-white/10 text-slate-300"
      }`}>
        <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
        <span className={`font-bold tracking-wide uppercase text-[10px] ${isLight ? "text-slate-900" : "text-white"}`}>
          Modernization Core ({isLight ? "Light" : "Dark"})
        </span>
        <span className={isLight ? "text-slate-300" : "text-white/20"}>|</span>
        <span className={isLight ? "text-slate-600" : "text-slate-400"}>
          Scrub: <strong className={`font-bold ${isLight ? "text-slate-900" : "text-white"}`}>{hudInfo.progress}%</strong>
        </span>
        <span className={isLight ? "text-slate-300" : "text-white/20"}>|</span>
        <span className={`font-mono font-black ${isLight ? "text-[#0284c7]" : "text-sky-400"}`}>{hudInfo.time.toFixed(1)}s</span>

        {/* Audio Toggle in HUD */}
        {onToggleSound && (
          <>
            <span className={isLight ? "text-slate-300" : "text-white/20"}>|</span>
            <button
              type="button"
              onClick={onToggleSound}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                soundEnabled
                  ? "bg-[#0284c7] text-white shadow-md shadow-sky-600/30 animate-pulse"
                  : isLight
                    ? "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300/80"
                    : "bg-white/10 hover:bg-white/20 text-slate-300 border border-white/10"
              }`}
              title={soundEnabled ? "Mute video audio" : "Enable video audio track"}
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-white" />
                  <span>Audio ON</span>
                  <span className="flex items-end gap-0.5 h-2.5 ml-1">
                    <span className="w-0.5 bg-white h-full animate-[pulse_0.6s_infinite]" />
                    <span className="w-0.5 bg-white h-2/3 animate-[pulse_0.8s_infinite]" />
                    <span className="w-0.5 bg-white h-4/5 animate-[pulse_0.5s_infinite]" />
                  </span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                  <span>Audio OFF</span>
                </>
              )}
            </button>
          </>
        )}
      </div>
    </>
  );
}
