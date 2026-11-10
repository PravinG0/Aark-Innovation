import React from "react";
import { Database, Snowflake, Flame, Cloud, Cpu, Network } from "lucide-react";

export default function Ecosystem({ theme = "dark" }) {
  const isLight = theme === "light";

  const platforms = [
    { name: "Oracle Fusion", sub: "Cloud ERP & EBS", icon: Database, color: isLight ? "text-[#0284c7]" : "text-sky-400" },
    { name: "Snowflake", sub: "Data Cloud", icon: Snowflake, color: isLight ? "text-sky-600" : "text-sky-400" },
    { name: "Databricks", sub: "Lakehouse & Spark", icon: Flame, color: isLight ? "text-rose-600" : "text-rose-400" },
    { name: "AWS Cloud", sub: "Bedrock & Redshift", icon: Cloud, color: isLight ? "text-amber-600" : "text-amber-400" },
    { name: "Azure", sub: "OpenAI & Fabric", icon: Cpu, color: isLight ? "text-blue-600" : "text-blue-400" },
    { name: "dbt Core", sub: "Data Modeling", icon: Network, color: isLight ? "text-emerald-600" : "text-emerald-400" },
  ];

  return (
    <section id="tech-section" className="py-24 px-6 sm:px-12 lg:px-20 relative">
      <div className="max-w-6xl mx-auto text-center">
        
        <span className={`text-xs font-bold uppercase tracking-widest ${isLight ? "text-[#0284c7]" : "text-sky-400"}`}>Proven Platforms</span>
        <h2 className={`font-heading font-black text-2xl sm:text-4xl mt-2 mb-12 ${isLight ? "text-slate-900" : "text-white"}`}>
          The Enterprise Technology Ecosystem We Deploy
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {platforms.map((p) => {
            const Icon = p.icon;
            return (
              <div 
                key={p.name}
                className={`p-5 rounded-2xl border flex flex-col items-center justify-center gap-3 transition-all group ${
                  isLight
                    ? "bg-white/90 border-slate-200/90 shadow-md hover:border-[#0284c7] hover:shadow-lg"
                    : "glass-card-dark border-white/10 hover:border-sky-400/50"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${p.color} ${
                  isLight ? "bg-slate-50 border border-slate-200" : "bg-white/[0.04] border border-white/10"
                } group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className={`font-bold text-sm ${isLight ? "text-slate-900" : "text-white"}`}>{p.name}</div>
                  <div className={`text-[10px] mt-0.5 ${isLight ? "text-slate-500" : "text-slate-400"}`}>{p.sub}</div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
