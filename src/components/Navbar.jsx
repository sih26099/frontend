import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Layers, Home, Upload as UploadIcon, BarChart3, Info } from "lucide-react";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/upload", label: "Upload", icon: UploadIcon },
  { to: "/results", label: "Results", icon: BarChart3 },
  { to: "/about", label: "About", icon: Info },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-navy transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-navy/20" : ""
      }`}
    >
      <div className="tricolor-bar" />
      <nav
        className={`max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-14" : "h-16"
        }`}
      >
        <NavLink
          to="/"
          className="flex items-center gap-2 text-white font-display font-semibold text-lg transition-transform duration-200 hover:scale-[1.03]"
        >
          <Layers size={22} className="text-saffron" />
          MatSync
        </NavLink>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative px-3 py-2 rounded-full font-body text-sm tracking-wide transition-all duration-200 ${
                  isActive
                    ? "text-white font-semibold bg-white/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  <span
                    className={`absolute left-3 right-3 -bottom-0.5 h-0.5 bg-saffron rounded-full transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        <button
          className="md:hidden text-white z-50 relative"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Backdrop */}
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-40 animate-[fadeIn_0.2s_ease-out]"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile menu panel */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-navy-light z-40 shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-24 px-4 flex flex-col gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 py-3 px-3 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-white/10 text-white font-semibold"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              <l.icon size={18} />
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}