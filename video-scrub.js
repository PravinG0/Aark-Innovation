/**
 * AARK INNOVATIONS - High-Performance Scroll-Scrubbed Video Engine
 * Ported & enhanced from C:\Antigravity\port\src\components\VideoScrub.jsx
 * Dual-video RAF forward/reverse playback with velocity tracking and mobile fallback.
 */

class VideoScrubEngine {
  constructor(options = {}) {
    this.container = document.getElementById(options.containerId || 'video-scrub-container');
    this.fwdVideo = document.getElementById(options.fwdId || 'video-fwd');
    this.revVideo = document.getElementById(options.revId || 'video-rev');
    this.endSectionId = options.endSectionId || 'contact-section';
    this.progressBadge = document.getElementById(options.badgeId || 'video-scrub-hud');
    
    this.isMobile = false;
    this.mounted = false;
    this.duration = 0;
    this.raf = null;
    this.prevY = window.scrollY;
    this.prevT = performance.now();
    this.vel = 0;
    this.frozenSnap = null;
    this.activeEl = null;

    // Config thresholds matching C:\Antigravity\port
    this.FREEZE_VEL = 5;
    this.PLAY_VEL = 85;
    this.EDGE = 0.12;

    this.maxScroll = 1;
    this.videoEndScroll = 1;

    // Mobile parallax layers
    this.mobileLayers = [];
    this.sectionImages = [
      { id: null, src: 'photo/hero.webp' },
      { id: 'practice-section', src: 'photo/about.webp' },
      { id: 'case-studies-section', src: 'photo/project.webp' },
      { id: 'contact-section', src: 'photo/contact.webp' }
    ];

    this.init();
  }

  init() {
    this.checkDevice();
    window.addEventListener('resize', () => {
      this.checkDevice();
      this.calcVideoEnd();
    }, { passive: true });

    if (this.isMobile) {
      this.initMobileParallax();
    } else {
      this.initDesktopScrub();
    }

    this.calcVideoEnd();
    window.addEventListener('load', () => this.calcVideoEnd(), { once: true });
  }

  checkDevice() {
    const isSmall = window.innerWidth <= 768 || window.matchMedia('(pointer: coarse)').matches;
    this.isMobile = isSmall;
  }

  calcVideoEnd() {
    const target = document.getElementById(this.endSectionId);
    if (target) {
      this.videoEndScroll = Math.max(1, target.offsetTop + target.offsetHeight * 0.5 - window.innerHeight * 0.5);
    } else {
      this.videoEndScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    }
    this.maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  }

  // ==========================================
  // DESKTOP DUAL-VIDEO SCRUBBING ENGINE
  // ==========================================
  initDesktopScrub() {
    if (!this.fwdVideo || !this.revVideo) return;

    const fwd = this.fwdVideo;
    const rev = this.revVideo;
    this.activeEl = fwd;

    const show = (el) => {
      if (this.activeEl === el) return;
      this.activeEl = el;
      fwd.style.opacity = el === fwd ? "1" : "0";
      rev.style.opacity = el === rev ? "1" : "0";
    };

    // Forward seeking queue
    let fwdSeeking = false, fwdPend = null;
    const seekFwd = (t, fast = false) => {
      fwdPend = { t: Math.max(0, Math.min(this.duration, t)), fast };
      if (!fwdSeeking) flushFwd();
    };
    const flushFwd = () => {
      if (!fwdPend) { fwdSeeking = false; return; }
      const { t, fast } = fwdPend;
      fwdPend = null;
      if (Math.abs(fwd.currentTime - t) < 0.033) { fwdSeeking = false; return; }
      fwdSeeking = true;
      fast && fwd.fastSeek ? fwd.fastSeek(t) : (fwd.currentTime = t);
    };
    fwd.addEventListener("seeked", flushFwd);

    // Reverse seeking queue
    let revSeeking = false, revPend = null;
    const seekRev = (t, fast = false) => {
      revPend = { t: Math.max(0, Math.min(this.duration, t)), fast };
      if (!revSeeking) flushRev();
    };
    const flushRev = () => {
      if (!revPend) { revSeeking = false; return; }
      const { t, fast } = revPend;
      revPend = null;
      if (Math.abs(rev.currentTime - t) < 0.033) { revSeeking = false; return; }
      revSeeking = true;
      fast && rev.fastSeek ? rev.fastSeek(t) : (rev.currentTime = t);
    };
    rev.addEventListener("seeked", flushRev);

    // Background sync helpers
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

    // Main Animation Loop
    const frame = (now) => {
      this.raf = requestAnimationFrame(frame);
      if (!this.duration) return;

      const dt = Math.max((now - this.prevT) / 1000, 0.001);
      this.prevT = now;
      const scrollY = window.scrollY;
      this.vel = this.vel * 0.82 + ((scrollY - this.prevY) / dt) * 0.18;
      this.prevY = scrollY;

      const progress = this.videoEndScroll > 0 ? Math.min(1, Math.max(0, scrollY / this.videoEndScroll)) : 0;
      const tgt = progress * this.duration;
      const revTgt = this.duration - tgt;
      const absVel = Math.abs(this.vel);
      const atStart = tgt <= this.EDGE;
      const atEnd = progress >= 1;

      // Update HUD if present
      if (this.progressBadge) {
        const pct = Math.round(progress * 100);
        this.progressBadge.innerHTML = `
          <span class="inline-block w-1.5 h-1.5 rounded-full ${absVel > 20 ? 'bg-amber-400 animate-ping' : 'bg-emerald-400'}"></span>
          <span>Scrubbing Reel: ${pct}%</span>
          <span class="text-white/40">|</span>
          <span class="text-white/60 font-mono">${tgt.toFixed(1)}s</span>
        `;
      }

      // Past Contact: hold silently at current frame
      if (atEnd) {
        if (!fwd.paused) fwd.pause();
        if (!rev.paused) rev.pause();
        show(fwd);
        this.frozenSnap = null;
        return;
      }

      // Frozen (near start or low velocity)
      if (absVel < this.FREEZE_VEL || atStart) {
        if (!fwd.paused) fwd.pause();
        if (!rev.paused) rev.pause();
        show(fwd);
        if (this.frozenSnap === null) {
          this.frozenSnap = atStart ? 0 : tgt;
          seekFwd(this.frozenSnap);
        }
        return;
      }
      this.frozenSnap = null;

      // Slow Scrub
      if (absVel < this.PLAY_VEL) {
        if (!fwd.paused) fwd.pause();
        if (!rev.paused) rev.pause();
        if (this.vel > 0) {
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

      // Fast Play (Smooth Dynamic Playback)
      const invM = this.duration / this.videoEndScroll;
      if (this.vel > 0) {
        const rate = Math.min(8, Math.max(0.25, this.vel * invM));
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

    const setup = () => {
      this.duration = fwd.duration;
      fwd.currentTime = 0;
      rev.currentTime = this.duration;
      this.raf = requestAnimationFrame(frame);

      // Preload reverse video quietly in background
      setTimeout(() => {
        rev.play().then(() => {
          rev.pause();
          rev.currentTime = this.duration;
        }).catch(() => {});
      }, 2000);
    };

    if (fwd.readyState >= 1) {
      setup();
    } else {
      fwd.addEventListener("loadedmetadata", setup, { once: true });
    }
  }

  // ==========================================
  // MOBILE PARALLAX LAYER SWIPE FALLBACK
  // ==========================================
  initMobileParallax() {
    const mobileContainer = document.getElementById('mobile-layers-container');
    if (!mobileContainer) return;

    mobileContainer.innerHTML = '';
    this.mobileLayers = [];

    this.sectionImages.forEach((sec, i) => {
      const layer = document.createElement('div');
      layer.className = 'absolute inset-0 w-full h-full';
      layer.style.backgroundSize = 'cover';
      layer.style.backgroundPosition = 'center top';
      layer.style.transform = i === 0 ? 'translateY(0%)' : 'translateY(100%)';
      layer.style.opacity = i === 0 ? '1' : '0';
      layer.style.willChange = 'transform, opacity';
      layer.dataset.bg = sec.src;

      if (i === 0) {
        layer.style.backgroundImage = `url(${sec.src})`;
      }

      mobileContainer.appendChild(layer);
      this.mobileLayers.push(layer);
    });

    const TRANSITION_ZONE = 0.35;

    const getIndex = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      for (let i = this.sectionImages.length - 1; i >= 1; i--) {
        const el = document.getElementById(this.sectionImages[i].id);
        if (el && scrollY + vh * 0.5 >= el.offsetTop) return i;
      }
      return 0;
    };

    const getProgress = (idx) => {
      const nextIdx = idx + 1;
      if (nextIdx >= this.sectionImages.length) return 0;
      const nextEl = document.getElementById(this.sectionImages[nextIdx].id);
      if (!nextEl) return 0;
      const zone = nextEl.offsetHeight * TRANSITION_ZONE;
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const rel = (scrollY + vh * 0.5) - (nextEl.offsetTop - zone);
      return Math.max(0, Math.min(1, rel / zone));
    };

    let lastIdx = 0, lastProg = 0;

    const mobileFrame = () => {
      this.raf = requestAnimationFrame(mobileFrame);
      const idx = getIndex();
      const prog = getProgress(idx);

      if (idx === lastIdx && Math.abs(prog - lastProg) < 0.001) return;
      lastIdx = idx;
      lastProg = prog;

      const layers = this.mobileLayers;
      if (!layers.length) return;

      const curLayer = layers[idx];
      const nxtLayer = layers[idx + 1];

      const lazyLoad = (l) => {
        if (l && !l.style.backgroundImage && l.dataset.bg) {
          l.style.backgroundImage = `url(${l.dataset.bg})`;
        }
      };
      if (curLayer) lazyLoad(curLayer);
      if (nxtLayer) lazyLoad(nxtLayer);

      layers.forEach((l, i) => {
        if (!l) return;
        if (i === idx) {
          l.style.transform = `translateY(${-(prog * 8)}%)`;
          l.style.opacity = `${1 - prog * 0.6}`;
          l.style.zIndex = '1';
        } else if (i === idx + 1 && nxtLayer) {
          l.style.transform = `translateY(${(1 - prog) * 100}%)`;
          l.style.opacity = `${0.4 + prog * 0.6}`;
          l.style.zIndex = '2';
        } else if (i < idx) {
          l.style.transform = 'translateY(-8%)';
          l.style.opacity = '0';
          l.style.zIndex = '0';
        } else {
          l.style.transform = 'translateY(100%)';
          l.style.opacity = '0';
          l.style.zIndex = '0';
        }
      });
    };

    this.raf = requestAnimationFrame(mobileFrame);
  }
}

// Global initialization
window.addEventListener('DOMContentLoaded', () => {
  window.aarkScrubber = new VideoScrubEngine({
    containerId: 'video-scrub-container',
    fwdId: 'video-fwd',
    revId: 'video-rev',
    endSectionId: 'contact-section',
    badgeId: 'video-scrub-hud'
  });
});

