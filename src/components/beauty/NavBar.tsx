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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navScrolled ? "py-4" : "py-7"}`}
      style={{
        background: navScrolled ? "rgba(13,13,13,0.96)" : "transparent",
        backdropFilter: navScrolled ? "blur(20px)" : "none",
        borderBottom: navScrolled ? "1px solid rgba(201,168,76,0.12)" : "none"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="font-display text-xl font-light tracking-[0.15em] cursor-pointer" onClick={() => handleScrollTo("hero")}>
          NOIR <span className="text-gold">BEAUTY</span>
        </div>
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(([id, label]) => (
            <button key={id} onClick={() => handleScrollTo(id)} className="nav-link text-[#EDE8DF] opacity-70 hover:opacity-100 hover-gold transition-all duration-200 font-body">{label}</button>
          ))}
        </div>
        <button className="hidden lg:block btn-gold text-xs" onClick={() => handleScrollTo("booking")}>Записаться</button>
        <button className="lg:hidden" style={{ color: "var(--gold)" }} onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden px-6 pt-4 pb-6 border-t border-yellow-700/20 mt-4" style={{ background: "rgba(13,13,13,0.98)" }}>
          <div className="flex flex-col gap-5">
            {NAV_LINKS.map(([id, label]) => (
              <button key={id} onClick={() => handleScrollTo(id)} className="text-left nav-link text-[#EDE8DF] hover-gold font-body">{label}</button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
