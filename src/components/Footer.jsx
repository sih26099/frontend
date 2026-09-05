import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row justify-between gap-6 text-sm">
        <div>
          <p className="text-white font-display font-semibold">MatSync</p>
          <p className="mt-1 max-w-xs">
            AI-driven standardization and harmonization of material codes across CPSEs —
            built for Smart India Hackathon 2026, Problem Statement SIH26099.
          </p>
        </div>
        <div>
          <p className="text-white font-medium mb-2">Problem Statement</p>
          <p>SIH26099 · Ministry of Petroleum &amp; Natural Gas</p>
          <p>Software Track · Smart Automation</p>
        </div>
        <div>
          <p className="text-white font-medium mb-2">Legal</p>
          <ul className="space-y-1">
            <li>
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="tricolor-bar" />
    </footer>
  );
}