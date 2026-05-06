import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS: [string, string][] = [
  ["hero", "Главная"],
  ["services", "Услуги"],
  ["portfolio", "Портфолио"],
  ["about", "О нас"],
  ["reviews", "Отзывы"],
  ["promos", "Акции"],
  ["booking", "Запись"],
  ["contacts", "Контакты"],
];

interface NavBarProps {
  scrollTo: (id: string) => void;
}

export default function NavBar({ scrollTo }: NavBarProps) {
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleScrollTo = (id: string) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navScrolled ? "py-3" : "py-5"}`}
      style={{
        background: navScrolled ? "rgba(250,246,241,0.97)" : "transparent",
        backdropFilter: navScrolled ? "blur(20px)" : "none",
        borderBottom: navScrolled ? "1px solid rgba(155,91,110,0.12)" : "none",
        boxShadow: navScrolled ? "0 2px 24px rgba(44,36,32,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          className="cursor-pointer"
          onClick={() => handleScrollTo("hero")}
        >
          <img
            src="https://cdn.poehali.dev/projects/5666d866-7f12-4a6c-ac08-31f894405d7d/bucket/5361531c-26fb-44e3-a483-122c3ba4b5ad.jpg"
            alt="Klimova Svetlana"
            style={{ height: navScrolled ? "52px" : "64px", width: "auto", transition: "height 0.3s ease", objectFit: "contain" }}
          />
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map(([id, label]) => (
            <button
              key={id}
              onClick={() => handleScrollTo(id)}
              className="nav-link hover-gold transition-all duration-200 font-body"
              style={{ color: "var(--ink-2)", opacity: 0.75 }}
            >
              {label}
            </button>
          ))}
        </div>

        <button
          className="hidden lg:block btn-gold text-xs"
          onClick={() => handleScrollTo("booking")}
        >
          Записаться
        </button>

        {/* Burger */}
        <button
          className="lg:hidden"
          style={{ color: "var(--rose)" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden px-6 pt-4 pb-6 mt-3"
          style={{
            background: "rgba(250,246,241,0.99)",
            borderTop: "1px solid rgba(155,91,110,0.1)",
          }}
        >
          <div className="flex flex-col gap-5">
            {NAV_LINKS.map(([id, label]) => (
              <button
                key={id}
                onClick={() => handleScrollTo(id)}
                className="text-left nav-link hover-gold font-body"
                style={{ color: "var(--ink-2)" }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}