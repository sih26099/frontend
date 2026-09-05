import { useState, useMemo } from "react";
import { Download, Filter, Copy, Check } from "lucide-react";
import { mockClusters, summaryStats } from "../data/mockClusters";
import StepIndicator from "../components/StepIndicator";

export default function Results() {
  const [cpseFilter, setCpseFilter] = useState("All");

  const filtered = useMemo(() => {
    if (cpseFilter === "All") return mockClusters;
    return mockClusters.filter((c) =>
      c.members.some((m) => m.source === cpseFilter)
    );
  }, [cpseFilter]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <StepIndicator current={3} />

      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <p className="text-xs tracking-widest uppercase text-steel font-medium mb-2">
            Step 3
          </p>
          <h1 className="font-display text-3xl font-semibold text-navy">
            Standardized Results
          </h1>
        </div>
        <button className="inline-flex items-center gap-2 border border-navy/20 hover:border-navy/40 text-navy font-medium px-5 py-2.5 rounded-md text-sm transition-colors self-start">
          <Download size={16} /> Export CSV
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        <StatCard label="Raw entries" value={summaryStats.rawEntries} />
        <StatCard label="Standardized items" value={summaryStats.standardizedItems} color="text-steel" />
        <StatCard label="Duplicates eliminated" value={summaryStats.duplicatesEliminated} color="text-success" />
      </div>

      {/* Filter */}
      <div className="flex items-center gap-3 mb-6">
        <Filter size={16} className="text-navy/50" />
        <div className="flex flex-wrap gap-2">
          {["All", ...summaryStats.cpses].map((c) => (
            <button
              key={c}
              onClick={() => setCpseFilter(c)}
              className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
                cpseFilter === c
                  ? "bg-navy text-white border-navy"
                  : "border-navy/20 text-navy/70 hover:border-navy/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Cluster cards */}
      <div className="space-y-4">
        {filtered.map((cluster) => (
          <ClusterCard key={cluster.id} cluster={cluster} />
        ))}
      </div>
    </div>
  );
}

function StatCard({ label, value, color = "text-navy" }) {
  return (
    <div className="bg-white rounded-lg border border-navy/10 p-4 sm:p-6 text-center sm:text-left">
      <p className={`font-display text-2xl sm:text-3xl font-semibold ${color}`}>{value}</p>
      <p className="text-xs sm:text-sm text-navy/60 mt-1">{label}</p>
    </div>
  );
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard not available, fail silently
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="text-navy/30 hover:text-navy/70 transition-colors flex-shrink-0"
      aria-label={`Copy ${text}`}
      title="Copy code"
    >
      {copied ? <Check size={14} className="text-success" /> : <Copy size={14} />}
    </button>
  );
}

function ClusterCard({ cluster }) {
  const isVerified = cluster.method === "llm_verified";
  return (
    <div className="bg-white rounded-xl border border-navy/10 p-5 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
        <div>
          <h3 className="font-display font-semibold text-navy text-lg">
            {cluster.canonicalName}
          </h3>
          <div className="flex items-center gap-1.5 mt-0.5">
            <p className="font-mono text-xs text-navy/50">{cluster.canonicalCode}</p>
            <CopyButton text={cluster.canonicalCode} />
          </div>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full ${
              cluster.confidence >= 90
                ? "bg-success/10 text-success"
                : cluster.confidence >= 80
                ? "bg-steel/10 text-steel"
                : "bg-saffron/10 text-saffron"
            }`}
          >
            {cluster.confidence}% match
          </span>
          {isVerified && (
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-navy/5 text-navy/60">
              AI-verified
            </span>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-2">
        {cluster.members.map((m, i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-surface rounded-md px-3 py-2 text-sm"
          >
            <span className="font-mono text-navy/70">{m.raw}</span>
            <span className="text-xs text-navy/40 ml-2 flex-shrink-0">{m.source}</span>
          </div>
        ))}
      </div>
    </div>
  );
}