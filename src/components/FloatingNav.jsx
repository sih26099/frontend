import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowUp, Home } from "lucide-react";

export default function FloatingNav() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goHome = () => {
    navigate("/");
  };

  if (!visible) return null;

  return (
<div className="fixed bottom-20 right-6 z-40 flex flex-col gap-3">      {location.pathname !== "/" && (
        <button
          onClick={goHome}
          aria-label="Go to home page"
          title="Home"
          className="w-11 h-11 rounded-full bg-navy hover:bg-navy-light text-white shadow-lg flex items-center justify-center transition-colors"
        >
          <Home size={18} />
        </button>
      )}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Back to top"
        className="w-11 h-11 rounded-full bg-steel hover:bg-steel-light text-white shadow-lg flex items-center justify-center transition-colors"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}