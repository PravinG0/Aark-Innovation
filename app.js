/**
 * AARK INNOVATIONS - Core Application & Interactive Experiences
 * Smooth scrolling, magnetic cursor, case studies switcher, ROI estimator, contact drawer
 */

document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initCaseStudies();
  initRoiEstimator();
  initContactDrawer();
  initBottomBlur();
  initMobileMenu();
});

// ==========================================
// 1. MAGNETIC / DIFFERENCE CURSOR
// ==========================================
function initCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const cursor = document.getElementById('custom-cursor');
  if (!cursor) return;

  let mx = -100, my = -100;
  let cx = -100, cy = -100;
  let isHovered = false;

  window.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
  }, { passive: true });

  const addHoverListeners = () => {
    document.querySelectorAll('a, button, input, textarea, select, .interactive-card, [data-cursor-hover]').forEach((el) => {
      if (el.dataset.cursorBound) return;
      el.dataset.cursorBound = "true";

      el.addEventListener('mouseenter', () => {
        isHovered = true;
        cursor.classList.add('hovered');
      });
      el.addEventListener('mouseleave', () => {
        isHovered = false;
        cursor.classList.remove('hovered');
      });
    });
  };

  addHoverListeners();
  const observer = new MutationObserver(addHoverListeners);
  observer.observe(document.body, { childList: true, subtree: true });

  const renderCursor = () => {
    cx += (mx - cx) * 0.16;
    cy += (my - cy) * 0.16;
    cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(renderCursor);
  };
  requestAnimationFrame(renderCursor);
}

// ==========================================
// 2. CASE STUDIES & RESULTS SWITCHER
// ==========================================
const caseStudiesData = [
  {
    id: 'healthcare-rfp',
    tag: "Healthcare Services Organization",
    title: "AI-Powered Proposal & RFP Drafting Automation",
    subtitle: "Turned multi-day RFP searches into a citation-grounded enterprise assistant",
    challenge: "A rapidly growing healthcare services organization was losing high-value contract bids due to slow proposal turnaround. Prior winning answers, case studies, and compliance methodologies were buried across disconnected shared drives and legacy documents.",
    solution: "AARK Innovations indexed the organization's entire proposal archive, clinical methodology decks, and credential databases into a secure enterprise vector lakehouse. We delivered an internal assistant that automatically generates first-draft answers, flags sections requiring human SME review, and provides source citations with one click.",
    metrics: [
      { label: "Drafting Time", value: "-60%", sub: "time spent on first drafts" },
      { label: "Quarterly Throughput", value: "2x", sub: "more RFPs answered" },
      { label: "Time to Launch", value: "4 Weeks", sub: "to production version 1" }
    ],
    tech: ["GenAI Document Extraction", "Vector Lakehouse", "AWS Bedrock", "FastAPI", "React"]
  },
  {
    id: 'distributor-quoting',
    tag: "90-Person Equipment Distributor",
    title: "Streamlined Sales Quoting & CRM Automation",
    subtitle: "From 3-day spreadsheet bottlenecks down to 20-minute closed quotes",
    challenge: "Complex custom quoting was executed through fragile, unversioned Excel spreadsheets with tiered margin formulas trapped in key employees' heads, causing multi-day sales delays and pricing inconsistencies.",
    solution: "We eliminated the spreadsheets entirely by encoding complex product catalog rules directly into their CRM. We automated proposal PDF compilation, margin verification, and established automated management approval routing for out-of-band discounts.",
    metrics: [
      { label: "Quoting Speed", value: "20 Mins", sub: "down from 3 days" },
      { label: "Margin Errors", value: "0%", sub: "rogue discount prevention" },
      { label: "Sales Cycle", value: "-45%", sub: "faster deal closing" }
    ],
    tech: ["CRM Workflow Engine", "Pricing Rule APIs", "ERP Integration", "Automated PDF Generation"]
  },
  {
    id: 'unified-data-warehouse',
    tag: "Multi-Entity Enterprise",
    title: "Unified Snowflake Data Warehouse & Executive Analytics",
    subtitle: "Eliminated disparate reporting silos and 11 hours of weekly spreadsheet crunching",
    challenge: "Executive leadership across finance, sales, and supply chain were presenting conflicting revenue numbers. Each division extracted raw data from different legacy systems at inconsistent intervals, burning 11 hours of senior analyst time every week.",
    solution: "AARK Innovations designed and deployed a unified modern data platform on Snowflake. We built automated dbt transformation pipelines that ingest operational data overnight, compute consistent enterprise KPIs, and deliver clean executive dashboards.",
    metrics: [
      { label: "Manual Reporting", value: "-11 hrs", sub: "saved weekly per team" },
      { label: "Source of Truth", value: "1 Single", sub: "unified governed platform" },
      { label: "Cloud Cost", value: "-22%", sub: "optimized warehouse spend" }
    ],
    tech: ["Snowflake", "dbt Core", "Fivetran", "Power BI / Tableau", "Azure Cloud"]
  }
];

function initCaseStudies() {
  const tabsContainer = document.getElementById('case-study-tabs');
  const contentContainer = document.getElementById('case-study-content');
  if (!tabsContainer || !contentContainer) return;

  function renderTabs(activeIdx = 0) {
    tabsContainer.innerHTML = '';
    caseStudiesData.forEach((cs, i) => {
      const btn = document.createElement('button');
      btn.className = `text-left px-5 py-4 rounded-xl transition-all duration-300 border flex flex-col gap-1 w-full ${
        i === activeIdx
          ? 'bg-white/10 border-orange-500/60 shadow-lg text-white'
          : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/8 hover:text-slate-200'
      }`;
      btn.innerHTML = `
        <span class="text-[10px] font-bold uppercase tracking-wider ${i === activeIdx ? 'text-[#ff6b1a]' : 'text-slate-500'}">${cs.tag}</span>
        <span class="font-bold text-sm text-slate-100">${cs.title}</span>
      `;
      btn.addEventListener('click', () => {
        renderTabs(i);
        renderContent(caseStudiesData[i]);
      });
      tabsContainer.appendChild(btn);
    });
  }

  function renderContent(cs) {
    contentContainer.innerHTML = `
      <div class="glass-card p-8 rounded-2xl relative overflow-hidden animate-in fade-in duration-300">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-6">
          <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff6b1a] bg-[#ff6b1a]/10 px-3 py-1 rounded-full border border-[#ff6b1a]/30">
            <span class="w-1.5 h-1.5 rounded-full bg-[#ff6b1a] animate-pulse"></span>
            ${cs.tag}
          </span>
          <span class="text-xs text-slate-400">Verified Client Outcome</span>
        </div>

        <h3 class="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-2">${cs.title}</h3>
        <p class="text-sm font-medium text-slate-300 mb-8 leading-relaxed">${cs.subtitle}</p>

        <!-- Metrics Grid -->
        <div class="grid grid-cols-3 gap-4 mb-8 bg-black/40 p-5 rounded-xl border border-white/10">
          ${cs.metrics.map(m => `
            <div class="text-center">
              <div class="font-heading font-black text-2xl sm:text-4xl text-[#ff6b1a]">${m.value}</div>
              <div class="text-xs font-bold text-slate-200 mt-1">${m.label}</div>
              <div class="text-[11px] text-slate-400 hidden sm:block">${m.sub}</div>
            </div>
          `).join('')}
        </div>

        <!-- Problem & Solution -->
        <div class="grid md:grid-cols-2 gap-6 text-xs sm:text-sm mb-8 leading-relaxed">
          <div class="bg-white/5 p-5 rounded-xl border border-white/5">
            <h4 class="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-2 text-rose-400 flex items-center gap-1.5">
              <i class="fa-solid fa-triangle-exclamation"></i> The Challenge
            </h4>
            <p class="text-slate-400">${cs.challenge}</p>
          </div>
          <div class="bg-white/5 p-5 rounded-xl border border-white/5">
            <h4 class="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-2 text-emerald-400 flex items-center gap-1.5">
              <i class="fa-solid fa-circle-check"></i> The AARK Solution
            </h4>
            <p class="text-slate-400">${cs.solution}</p>
          </div>
        </div>

        <!-- Tech Badges -->
        <div class="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div class="flex flex-wrap gap-2">
            ${cs.tech.map(t => `<span class="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10">${t}</span>`).join('')}
          </div>
          <a href="#contact-section" class="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff6b1a] hover:underline">
            Discuss Similar Project →
          </a>
        </div>
      </div>
    `;
  }

  renderTabs(0);
  renderContent(caseStudiesData[0]);
}

// ==========================================
// 3. INTERACTIVE ROI & MODERNIZATION ESTIMATOR
// ==========================================
function initRoiEstimator() {
  const teamSizeSlider = document.getElementById('roi-team-size');
  const teamSizeVal = document.getElementById('roi-team-val');
  const hoursSavedEl = document.getElementById('roi-hours-saved');
  const annualSavingsEl = document.getElementById('roi-annual-savings');
  const speedupEl = document.getElementById('roi-speedup');

  if (!teamSizeSlider) return;

  function recalculate() {
    const size = parseInt(teamSizeSlider.value, 10);
    teamSizeVal.textContent = size;

    // Average 3.5 manual administrative/reporting hours saved per operational employee per week
    const weeklyHours = Math.round(size * 3.5);
    hoursSavedEl.textContent = `${weeklyHours} hrs`;

    // Average loaded professional hourly cost $65/hr * 50 working weeks
    const annualSavings = Math.round(weeklyHours * 65 * 50);
    annualSavingsEl.textContent = `$${annualSavings.toLocaleString('en-US')}`;

    // Speedup factor
    const speedup = size > 80 ? "4.5x" : size > 30 ? "3.2x" : "2.5x";
    speedupEl.textContent = speedup;
  }

  teamSizeSlider.addEventListener('input', recalculate);
  recalculate();
}

// ==========================================
// 4. CONTACT & CONSULTATION DRAWER
// ==========================================
function initContactDrawer() {
  const contactForm = document.getElementById('aark-contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('cf-name').value;
    const email = document.getElementById('cf-email').value;
    const project = document.getElementById('cf-project').value;
    const message = document.getElementById('cf-message').value;

    // Construct mailto link fallback for instant action
    const mailtoSubject = encodeURIComponent(`Consultation Request: ${project} - ${name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject Type: ${project}\n\nProject Scope & Goals:\n${message}\n\nSent from AARK Innovations Web Platform`
    );

    // Show polished toast
    showToast(`Thank you, ${name}! Your consultation inquiry has been submitted. Opening mail client to hello@aarkinn.com.`);
    
    setTimeout(() => {
      window.location.href = `mailto:hello@aarkinn.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    }, 1200);

    contactForm.reset();
  });
}

function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'fixed bottom-6 right-6 z-50 bg-[#121217] text-white px-5 py-4 rounded-xl shadow-2xl flex items-center gap-3 text-sm font-medium border border-[#ff6b1a]/40 transition-all duration-300 opacity-0 translate-y-4';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check text-[#ff6b1a] text-lg"></i><span>${msg}</span>`;
  toast.classList.remove('opacity-0', 'translate-y-4');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'translate-y-4');
  }, 4500);
}

// ==========================================
// 5. BOTTOM VIEWPORT BLUR FADE
// ==========================================
function initBottomBlur() {
  const blur = document.getElementById('bottom-viewport-blur');
  const footer = document.getElementById('aark-footer');
  if (!blur || !footer) return;

  window.addEventListener('scroll', () => {
    const footerTop = footer.getBoundingClientRect().top;
    const vh = window.innerHeight;
    const opacity = footerTop >= vh ? 1 : Math.max(0, footerTop / vh);
    blur.style.opacity = opacity;
  }, { passive: true });
}

// ==========================================
// 6. MOBILE NAVIGATION MENU
// ==========================================
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu-drawer');
  const links = document.querySelectorAll('.mobile-link');

  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  links.forEach(l => {
    l.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

