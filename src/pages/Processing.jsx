import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, Loader2 } from "lucide-react";
import StepIndicator from "../components/StepIndicator";

const steps = [
  "Normalizing text & expanding abbreviations",
  "Running TF-IDF similarity matching",
  "Clustering matched entries",
  "Verifying ambiguous cases",
];

export default function Processing() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (current >= steps.length) {
      const t = setTimeout(() => navigate("/results"), 600);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setCurrent((c) => c + 1), 900);
    return () => clearTimeout(t);
  }, [current, navigate]);

  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 py-24 text-center">
      <StepIndicator current={2} />

      <h1 className="font-display text-2xl font-semibold text-navy mb-2">
        Standardizing your material list
      </h1>
      <p className="text-navy/60 mb-10">This usually takes a few seconds.</p>

      <div className="tricolor-bar-animated mb-10" />

      <ul className="text-left space-y-4 max-w-sm mx-auto">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-3">
            {i < current ? (
              <CheckCircle2 size={20} className="text-success flex-shrink-0" />
            ) : i === current ? (
              <Loader2 size={20} className="text-steel flex-shrink-0 animate-spin" />
            ) : (
              <div className="w-5 h-5 rounded-full border-2 border-navy/15 flex-shrink-0" />
            )}
            <span
              className={`text-sm ${
                i <= current ? "text-navy" : "text-navy/40"
              }`}
            >
              {s}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}