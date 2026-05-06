import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

export default function FloatingContact() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-2 animate-fade-in">
          {[
            { href: "tel:+79661903771", icon: "Phone", label: "Позвонить" },
            { href: "https://t.me/+79661903771", icon: "Send", label: "Telegram" },
            { href: "https://vk.com/sveta_pm_vidnoe", icon: "Users", label: "ВКонтакте" },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-body text-xs font-medium px-4 py-2.5 transition-all duration-200"
              style={{
                background: "#fff",
                border: "1px solid rgba(155,91,110,0.2)",
                boxShadow: "0 4px 20px rgba(44,36,32,0.1)",
                color: "var(--rose)",
                textDecoration: "none",
                borderRadius: "2px",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--rose-pale)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#fff"; }}
            >
              <Icon name={icon} size={14} style={{ color: "var(--rose)" }} />
              {label}
            </a>
          ))}
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center transition-all duration-300"
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          background: open
            ? "var(--rose-dim)"
            : "linear-gradient(135deg, var(--rose-dim), var(--rose), var(--rose-light))",
          boxShadow: "0 4px 24px rgba(155,91,110,0.4)",
          border: "none",
          cursor: "pointer",
        }}
      >
        <Icon name={open ? "X" : "MessageCircle"} size={22} style={{ color: "#fff" }} />
      </button>
    </div>
  );
}
