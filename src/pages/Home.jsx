import { Link } from "react-router-dom";
import { FileSearch, Wand2, Layers3, ArrowRight, ShieldCheck } from "lucide-react";
import { summaryStats } from "../data/mockClusters";

const steps = [
  {
    icon: FileSearch,
    title: "Ingest",
    desc: "Upload messy material lists from any CPSE — no fixed format required.",
  },
  {
    icon: Wand2,
    title: "Match",
    desc: "TF-IDF similarity matching finds items that mean the same thing, worded differently.",
  },
  {
    icon: Layers3,
    title: "Harmonize",
    desc: "Duplicate entries are grouped into one standardized code and name.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20">
        <div className="max-w-3xl">
          <p className="font-body text-xs tracking-widest uppercase text-steel font-medium mb-4">
            SIH26099 · Ministry of Petroleum &amp; Natural Gas
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight text-navy">
            One name, one code, per material —{" "}
            <span className="text-steel">across every CPSE.</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-navy/70 max-w-xl">
            Different government companies name the same material differently, causing
            duplicate purchases and wasted spend. MatSync reads inconsistent material lists
            the way a human expert would, and turns them into one clean, standardized catalog.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/upload"
              className="inline-flex items-center gap-2 bg-steel hover:bg-steel-light text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              Try the Demo <ArrowRight size={18} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-navy/20 hover:border-navy/40 text-navy font-medium px-6 py-3 rounded-md transition-colors"
            >
              How it works
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-y border-navy/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <Stat label="Raw entries processed" value={summaryStats.rawEntries} />
          <Stat label="Standardized items" value={summaryStats.standardizedItems} />
          <Stat label="Duplicates eliminated" value={summaryStats.duplicatesEliminated} />
          <Stat label="CPSEs covered" value={summaryStats.cpses.length} />
        </div>
      </section>

      {/* 3-step process */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-navy mb-10">
          How it works
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="bg-white rounded-xl border border-navy/10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-steel/10 flex items-center justify-center text-steel">
                  <s.icon size={20} />
                </div>
                <span className="text-xs font-mono text-navy/40">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-display font-semibold text-navy mb-2">{s.title}</h3>
              <p className="text-sm text-navy/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust strip */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        <div className="bg-navy rounded-xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-white">
          <ShieldCheck size={32} className="text-saffron flex-shrink-0" />
          <p className="text-sm sm:text-base text-white/80">
            Every match is explainable — each standardized item shows exactly which entries
            were merged and why, so procurement officers can verify, not just trust, the result.
          </p>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <p className="font-display text-2xl sm:text-3xl font-semibold text-navy">{value}+</p>
      <p className="text-xs sm:text-sm text-navy/60 mt-1">{label}</p>
    </div>
  );
}
