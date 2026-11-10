import React, { useState } from "react";
import { MapPin, Mail, CalendarCheck, Send, CheckCircle2 } from "lucide-react";

export default function Contact({ theme = "dark" }) {
  const isLight = theme === "light";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "Oracle ERP Implementation / Migration",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const mailtoSubject = encodeURIComponent(`Consultation Request: ${formData.project} - ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nProject: ${formData.project}\n\nProject Scope & Goals:\n${formData.message}\n\nSent via AARK Innovations React App`
    );

    setTimeout(() => {
      window.location.href = `mailto:hello@aarkinn.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    }, 1000);
  };

  return (
    <section id="contact-section" className="py-28 px-6 sm:px-12 lg:px-20 relative">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Info */}
          <div className="lg:col-span-5 space-y-6">
            <span className={`text-xs font-bold uppercase tracking-widest ${isLight ? "text-[#0284c7]" : "text-sky-400"}`}>Start The Conversation</span>
            
            <h2 className={`font-heading font-black text-3xl sm:text-5xl leading-tight ${isLight ? "text-slate-900" : "text-white"}`}>
              Ready to <span className={`mr-1 ${isLight ? "ghost-serif text-[#0284c7]" : "ghost text-sky-400"}`}>Modernize</span> Your Operations?
            </h2>

            <p className={`text-sm leading-relaxed ${isLight ? "text-slate-700" : "text-slate-300"}`}>
              Whether you need to upgrade an Oracle ERP environment, unify fragmented data silos, or build a custom AI drafting pipeline, we'll give you clear answers, accurate scope, and realistic timelines.
            </p>

            <div className={`space-y-4 pt-4 border-t text-xs ${isLight ? "border-slate-200 text-slate-700" : "border-white/10 text-slate-300"}`}>
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                  isLight ? "bg-sky-50 text-[#0284c7] border border-sky-200" : "bg-sky-500/10 text-sky-400 border border-sky-500/20"
                }`}>
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className={`font-bold ${isLight ? "text-slate-900" : "text-white"}`}>Fort Mill, SC</span>
                  <span className={isLight ? "text-slate-500" : "text-slate-400"}> (Greater Charlotte Metro) • Onsite & Remote Delivery</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                  isLight ? "bg-sky-50 text-[#0284c7] border border-sky-200" : "bg-sky-500/10 text-sky-400 border border-sky-500/20"
                }`}>
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className={`font-bold ${isLight ? "text-slate-900" : "text-white"}`}>hello@aarkinn.com</span>
                  <span className={isLight ? "text-slate-500" : "text-slate-400"}> • Direct to Senior Leadership</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0">
                  <CalendarCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className={`font-bold ${isLight ? "text-slate-900" : "text-white"}`}>30-Minute Architecture Discovery</span>
                  <span className={isLight ? "text-slate-500" : "text-slate-400"}> • Zero Sales Pressure</span>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-xl border text-xs ${
              isLight ? "bg-white/80 border-slate-200 text-slate-600 shadow-sm" : "bg-white/[0.04] border-white/10 text-slate-400"
            }`}>
              <strong className={`block mb-1 ${isLight ? "text-slate-900" : "text-white"}`}>Our Senior Delivery Guarantee:</strong>
              You will never be handed off to junior bench associates. The architects on your scoping call are the exact engineers building your system.
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className={`p-8 sm:p-10 rounded-3xl border shadow-2xl ${
              isLight ? "bg-white/95 border-slate-200/90 shadow-slate-200/50" : "glass-card-dark bg-[#121212]/90 border-white/15"
            }`}>
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className={`font-heading font-bold text-2xl ${isLight ? "text-slate-900" : "text-white"}`}>Inquiry Received</h3>
                  <p className={`text-xs max-w-md mx-auto leading-relaxed ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                    Opening your default email client to finalize transmission. If it did not launch automatically, reach our architects directly at <a href="mailto:hello@aarkinn.com" className={`underline font-bold ${isLight ? "text-[#0284c7]" : "text-sky-400"}`}>hello@aarkinn.com</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-[11px] font-bold uppercase tracking-wider mb-1.5 ${isLight ? "text-slate-700" : "text-slate-300"}`}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none focus:border-[#0284c7] ${
                          isLight ? "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400" : "bg-black/50 border-white/15 text-white placeholder-slate-500"
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`block text-[11px] font-bold uppercase tracking-wider mb-1.5 ${isLight ? "text-slate-700" : "text-slate-300"}`}>
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none focus:border-[#0284c7] ${
                          isLight ? "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400" : "bg-black/50 border-white/15 text-white placeholder-slate-500"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-[11px] font-bold uppercase tracking-wider mb-1.5 ${isLight ? "text-slate-700" : "text-slate-300"}`}>
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Enterprise"
                        className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none focus:border-[#0284c7] ${
                          isLight ? "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400" : "bg-black/50 border-white/15 text-white placeholder-slate-500"
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`block text-[11px] font-bold uppercase tracking-wider mb-1.5 ${isLight ? "text-slate-700" : "text-slate-300"}`}>
                        Modernization Area
                      </label>
                      <select
                        value={formData.project}
                        onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none focus:border-[#0284c7] ${
                          isLight ? "bg-slate-50 border-slate-200 text-slate-900" : "bg-black/50 border-white/15 text-white"
                        }`}
                      >
                        <option value="Oracle ERP Implementation / Migration">Oracle Fusion Cloud / EBS Migration</option>
                        <option value="Snowflake / Databricks Data Lakehouse">Snowflake / Databricks Lakehouse</option>
                        <option value="GenAI Proposal & Document Automation">GenAI RFP / Contract Automation</option>
                        <option value="CRM Sales Quoting Automation">Sales Quoting (CPQ) & CRM Flow</option>
                        <option value="Dedicated Principal Architecture Pod">Dedicated Architecture Pod</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={`block text-[11px] font-bold uppercase tracking-wider mb-1.5 ${isLight ? "text-slate-700" : "text-slate-300"}`}>
                      Current Bottleneck or Project Goals
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your current tech stack, timing requirements, or key friction points..."
                      className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none focus:border-[#0284c7] ${
                        isLight ? "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400" : "bg-black/50 border-white/15 text-white placeholder-slate-500"
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-4 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg ${
                      isLight
                        ? "bg-[#0284c7] hover:bg-[#0369a1] text-white shadow-sky-600/25"
                        : "bg-[#0284c7] hover:bg-white hover:text-black text-white shadow-sky-500/25"
                    }`}
                  >
                    <span>Request Technical Discovery</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <p className={`text-[10px] text-center mt-2 ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                    NDAs honored prior to deep-dive architecture discussions. Direct senior response within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
