const STEPS = ["Upload", "Processing", "Results"];

export default function StepIndicator({ current }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8" aria-label="Progress">
      {STEPS.map((label, i) => {
        const stepNum = i + 1;
        const isDone = stepNum < current;
        const isActive = stepNum === current;
        return (
          <div key={label} className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
                  isDone
                    ? "bg-success text-white"
                    : isActive
                    ? "bg-steel text-white"
                    : "bg-navy/10 text-navy/40"
                }`}
              >
                {stepNum}
              </div>
              <span
                className={`text-xs font-medium hidden sm:inline ${
                  isActive ? "text-navy" : "text-navy/40"
                }`}
              >
                {label}
              </span>
            </div>
            {stepNum < STEPS.length && (
              <div
                className={`w-6 sm:w-10 h-0.5 ${
                  isDone ? "bg-success" : "bg-navy/10"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}