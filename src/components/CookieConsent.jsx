import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "matsync_cookie_prefs";

export function getCookiePrefs() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setCookiePrefs(prefs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getCookiePrefs()) setVisible(true);
  }, []);

  const choose = (analytics) => {
    setCookiePrefs({ essential: true, analytics, decidedAt: Date.now() });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-navy text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="text-sm text-white/80 flex-1">
          This site uses essential cookies to run properly, and optional cookies to
          understand usage. See our{" "}
          <Link to="/cookie-preferences" className="underline hover:text-white">
            Cookie Preferences
          </Link>{" "}
          for details.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={() => choose(false)}
            className="text-sm font-medium px-4 py-2 rounded-md border border-white/30 hover:border-white/60 transition-colors"
          >
            Decline optional
          </button>
          <button
            onClick={() => choose(true)}
            className="text-sm font-medium px-4 py-2 rounded-md bg-white text-navy hover:bg-white/90 transition-colors"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}