import { useEffect, useState } from "react";
import { getCookiePrefs, setCookiePrefs } from "../components/CookieConsent";
import { CheckCircle2 } from "lucide-react";

export default function CookiePreferences() {
  const [analytics, setAnalytics] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const prefs = getCookiePrefs();
    if (prefs) setAnalytics(!!prefs.analytics);
  }, []);

  const save = () => {
    setCookiePrefs({ essential: true, analytics, decidedAt: Date.now() });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-display text-3xl font-semibold text-navy mb-2">
        Cookie Preferences
      </h1>
      <p className="text-navy/60 mb-10 text-sm">
        Manage which optional cookies MatSync can use on this device.
      </p>
      <div className="space-y-4">
        <div className="bg-white border border-navy/10 rounded-lg p-5 flex items-start justify-between gap-4">
          <div>
            <p className="font-medium text-navy">Essential</p>
            <p className="text-sm text-navy/60 mt-1">
              Required for the site to function — remembers your cookie choice. Cannot be
              turned off.
            </p>
          </div>
          <span className="text-xs font-medium text-navy/40 px-3 py-1.5 rounded-full bg-navy/5 flex-shrink-0">
            Always on
          </span>
        </div>
        <div className="bg-white border border-navy/10 rounded-lg p-5 flex items-start justify-between gap-4">
          <div>
            <p className="font-medium text-navy">Analytics</p>
            <p className="text-sm text-navy/60 mt-1">
              Helps understand how the demo is used, so it can be improved. Off by default.
            </p>
          </div>
          <button
            onClick={() => setAnalytics((a) => !a)}
            className={`w-12 h-7 rounded-full flex-shrink-0 transition-colors relative ${
              analytics ? "bg-steel" : "bg-navy/15"
            }`}
            aria-pressed={analytics}
            aria-label="Toggle analytics cookies"
          >
            <span
              className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${
                analytics ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>
      <button
        onClick={save}
        className="mt-8 inline-flex items-center gap-2 bg-steel hover:bg-steel-light text-white font-medium px-6 py-3 rounded-md transition-colors"
      >
        Save preferences
      </button>
      {saved && (
        <p className="mt-4 text-sm text-success flex items-center gap-2">
          <CheckCircle2 size={16} /> Preferences saved
        </p>
      )}
    </div>
  );
}