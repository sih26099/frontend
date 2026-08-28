import { Link } from "react-router-dom";
import { CompassIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-lg mx-auto px-4 sm:px-6 py-24 text-center">
      <CompassIcon size={40} className="text-steel mx-auto mb-6" />
      <p className="font-mono text-sm text-navy/40 mb-2">404</p>
      <h1 className="font-display text-2xl sm:text-3xl font-semibold text-navy mb-3">
        This page doesn't exist
      </h1>
      <p className="text-navy/60 mb-8">
        The page you're looking for may have been moved or the link is incorrect.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-steel hover:bg-steel-light text-white font-medium px-6 py-3 rounded-md transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}