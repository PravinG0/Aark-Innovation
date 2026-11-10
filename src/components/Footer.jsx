import React from "react";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-slate-900 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center font-heading font-black text-white">
                <span className="text-sky-400">A</span>
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">AARK Innovations</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Enterprise modernization firm based in Fort Mill, South Carolina. We help mid-market and corporate organizations streamline operations through Oracle ERP, Data & AI platforms, and cloud consulting.
            </p>
            <div className="text-xs text-slate-400">
              <strong>Headquarters:</strong> Fort Mill, SC 29707 • Charlotte Metro Area<br />
              <strong>Direct Inquiries:</strong>{" "}
              <a href="mailto:hello@aarkinn.com" className="text-slate-200 hover:text-sky-400">
                hello@aarkinn.com
              </a>
            </div>
          </div>

          {/* Practices */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Practices</h4>
            <ul className="text-xs space-y-2">
              <li><a href="#practice-section" className="hover:text-white transition-colors">Oracle Fusion Cloud ERP</a></li>
              <li><a href="#practice-section" className="hover:text-white transition-colors">Oracle E-Business Suite (EBS)</a></li>
              <li><a href="#practice-section" className="hover:text-white transition-colors">Snowflake & Databricks Lakehouses</a></li>
              <li><a href="#practice-section" className="hover:text-white transition-colors">Grounded Enterprise AI & RFPs</a></li>
              <li><a href="#practice-section" className="hover:text-white transition-colors">Workflow Automation & CPQ</a></li>
            </ul>
          </div>

          {/* Engagement */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Engagement</h4>
            <ul className="text-xs space-y-2">
              <li><a href="#models-section" className="hover:text-white transition-colors">Project Delivery</a></li>
              <li><a href="#models-section" className="hover:text-white transition-colors">Advisory Blueprint</a></li>
              <li><a href="#models-section" className="hover:text-white transition-colors">Staff Augmentation</a></li>
              <li><a href="#case-studies-section" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#contact-section" className="hover:text-white transition-colors">Contact Form</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Connect</h4>
            <p className="text-xs text-slate-400">Reach our team directly for active project scoping.</p>
            <a href="mailto:hello@aarkinn.com" className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 hover:underline">
              <Mail className="w-3.5 h-3.5" /> hello@aarkinn.com
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2024–2026 AARK Innovations. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Fort Mill, SC</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
