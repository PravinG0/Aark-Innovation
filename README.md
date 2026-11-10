# AARK Innovations — Enterprise Platform (React + Vite)

A modern React corporate web platform for **AARK Innovations** ([aarkinn.com](https://aarkinn.com)), integrating enterprise modernization content, verified case studies, and services with the **scroll-driven dual-video scrubbing engine** from `C:\Antigravity\port`.

---

## ⚡ Tech Stack & Architecture

- **Core Framework**: React 18.3 + Vite 5
- **Styling**: Tailwind CSS + Custom CSS (`styles.css` / `index.css`)
- **Icons**: Lucide React (`lucide-react`)
- **Typography**: `Outfit` (bold corporate headings), `Playfair Display` (ghost serif styling), and `Plus Jakarta Sans` (body text)
- **Video Scrub Engine**: `src/components/VideoScrub.jsx` (RAF velocity smoothing, forward/reverse video element swapping, dynamic playback rates, and mobile parallax fallback)

---

## 🧩 React Component Breakdown

```
src/
├── components/
│   ├── VideoScrub.jsx       # Dual-video scroll scrubbing engine & mobile parallax
│   ├── Cursor.jsx           # Magnetic difference cursor with interactive scaling
│   ├── Navbar.jsx           # Sticky glassmorphic nav with mobile drawer menu
│   ├── Hero.jsx             # Headline, ghost serif text, metrics ribbon & CTAs
│   ├── WhyAark.jsx          # 3 Pillars: Senior leadership, fixed scope, ROI focus
│   ├── Practices.jsx        # Oracle ERP, Data & AI Platforms, Cloud Automation
│   ├── CaseStudies.jsx      # Interactive tabbed case study explorer with verified metrics
│   ├── RoiEstimator.jsx     # Real-time modernization savings calculator (interactive slider)
│   ├── Ecosystem.jsx        # Technology ecosystem badges (Oracle, Snowflake, AWS, etc.)
│   ├── Contact.jsx          # Consultation booking form routed to hello@aarkinn.com
│   └── Footer.jsx           # Corporate footer with dynamic bottom-viewport blur sync
├── App.jsx                  # Main application composition
├── main.jsx                 # React root renderer
└── index.css                # Global Tailwind directives & custom glassmorphism styles
```

---

## 🚀 How to Run the Project

### 1. Development Mode (Vite HMR)
Run the Vite development server:

```powershell
npm run dev
```

The application will start with instant hot module replacement (HMR) at:
👉 **`http://localhost:5173`** (or port specified in terminal)

### 2. Production Build
Compile optimized production assets:

```powershell
npm run build
```

Build outputs are saved to the `dist/` directory.

### 3. Python Preview Server
To test the built production bundle with byte-range video streaming support:

```powershell
python server.py
```

Then visit:
👉 **`http://localhost:3000`**
