import { AlertTriangle, RefreshCw } from "lucide-react";

export default function ErrorState({
  title = "Something went wrong",
  message = "Please try again in a moment.",
  onRetry,
}) {
  return (
    <div className="rounded-xl border border-alert/20 bg-alert/5 p-6 text-center">
      <AlertTriangle size={28} className="text-alert mx-auto mb-3" />
      <h3 className="font-display font-semibold text-navy mb-1">{title}</h3>
      <p className="text-sm text-navy/60 mb-4">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 text-sm font-medium text-alert hover:underline"
        >
          <RefreshCw size={14} /> Try again
        </button>
      )}
    </div>
  );
}