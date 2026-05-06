import Icon from "@/components/ui/icon";
import { Section, SectionLabel, SVETLANA_PHOTO, services, gallery } from "./SectionPrimitives";
import { useState } from "react";

const galleryCategories = ["Все", "Перманентный макияж", "Наращивание ресниц"];

interface HeroServicesProps {
  scrollTo: (id: string) => void;
}

export default function HeroServices({ scrollTo }: HeroServicesProps) {
  const [activeGalleryFilter, setActiveGalleryFilter] = useState("Все");

  const filteredGallery = activeGalleryFilter === "Все"
    ? gallery
    : gallery.filter(g => g.category === activeGalleryFilter);

  return (
    <>
      {/* HERO — split layout: text left, image right */}
      <section id="hero" className="relative overflow-hidden" style={{ background: "var(--cream)", minHeight: "100vh" }}>
        {/* Decorative petal blobs */}
        <div className="hero-petal" style={{ width: 520, height: 520, top: -80, right: -100, opacity: 0.7 }} />
        <div className="hero-petal" style={{ width: 300, height: 300, bottom: 60, left: -60, opacity: 0.5, borderRadius: "40% 60% 30% 70% / 60% 40% 70% 30%" }} />

        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center min-h-screen pt-28 pb-16 gap-12">
          {/* Left: text */}
          <div className="flex-1 z-10">
            <div className="flex items-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="gold-line" style={{ width: "50px" }} />
              <span className="font-body text-[10px] tracking-[0.35em] uppercase" style={{ color: "var(--rose)" }}>
                Премиум бьюти-студия
              </span>
            </div>

            <h1
              className="font-display font-light leading-none mb-6 animate-fade-in"
              style={{ animationDelay: "0.25s", fontSize: "clamp(3rem, 7vw, 6rem)", letterSpacing: "-0.02em", color: "var(--ink)" }}
            >
              Студия<br />
              <em className="italic" style={{ color: "var(--rose)" }}>Штриха</em>
            </h1>

            <p
              className="font-display italic animate-fade-in"
              style={{ animationDelay: "0.35s", fontSize: "1.15rem", color: "var(--rose-light)", marginBottom: "24px" }}
            >
              Климовой Светланы
            </p>

            <p
              className="font-body leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.45s", fontSize: "0.95rem", color: "var(--ink-muted)", maxWidth: "420px", marginBottom: "40px" }}
            >
              Я — Светлана Климова, косметолог с опытом более 20 лет. Помогаю каждой клиентке раскрыть свою природную красоту. Профессиональный уход, точные техники, безупречный результат.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.55s" }}>
              <button className="btn-gold" onClick={() => scrollTo("booking")}>Записаться онлайн</button>
              <button className="btn-outline-gold" onClick={() => scrollTo("portfolio")}>Смотреть работы</button>
            </div>

            <div className="flex flex-wrap gap-3 mt-5 animate-fade-in" style={{ animationDelay: "0.65s" }}>
              <a href="tel:+79661903771"
                className="flex items-center gap-2 font-body text-xs tracking-wider uppercase px-5 py-3 transition-all duration-200"
                style={{ border: "1px solid rgba(155,91,110,0.3)", color: "var(--rose)", textDecoration: "none", borderRadius: "2px" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--rose-pale)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                <Icon name="Phone" size={13} style={{ color: "var(--rose)" }} />
                Позвонить
              </a>
              <a href="https://t.me/+79661903771" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-xs tracking-wider uppercase px-5 py-3 transition-all duration-200"
                style={{ border: "1px solid rgba(155,91,110,0.3)", color: "var(--rose)", textDecoration: "none", borderRadius: "2px" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--rose-pale)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                <Icon name="Send" size={13} style={{ color: "var(--rose)" }} />
                Telegram
              </a>
              <a href="https://vk.com/sveta_pm_vidnoe" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-xs tracking-wider uppercase px-5 py-3 transition-all duration-200"
                style={{ border: "1px solid rgba(155,91,110,0.3)", color: "var(--rose)", textDecoration: "none", borderRadius: "2px" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--rose-pale)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                <Icon name="Users" size={13} style={{ color: "var(--rose)" }} />
                ВКонтакте
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-10 mt-14 animate-fade-in" style={{ animationDelay: "0.7s" }}>
              {[["1000+", "Клиентов"], ["20+", "Лет опыта"], ["5.0", "Рейтинг"]].map(([num, label]) => (
                <div key={label}>
                  <div className="font-display text-3xl font-light" style={{ color: "var(--rose)" }}>{num}</div>
                  <div className="font-body text-[10px] tracking-[0.2em] uppercase mt-1" style={{ color: "var(--ink-muted)" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className="flex-1 z-10 w-full lg:max-w-[520px] animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Main photo */}
              <div style={{ borderRadius: "60% 40% 55% 45% / 50% 55% 45% 50%", overflow: "hidden", aspectRatio: "4/5" }}>
                <img
                  src={SVETLANA_PHOTO}
                  alt="Климова Светлана"
                  className="w-full h-full object-cover"
                  style={{ filter: "saturate(0.95) brightness(1.02)", objectPosition: "top" }}
                />
              </div>
              {/* Floating badge */}
              <div
                className="absolute font-body text-center"
                style={{
                  bottom: "32px",
                  left: "-24px",
                  background: "#fff",
                  border: "1px solid rgba(155,91,110,0.2)",
                  boxShadow: "0 8px 32px rgba(44,36,32,0.1)",
                  borderRadius: "2px",
                  padding: "18px 24px",
                  minWidth: "130px",
                }}
              >
                <div className="font-display text-4xl font-light" style={{ color: "var(--rose)", lineHeight: 1 }}>20+</div>
                <div className="text-[10px] tracking-widest uppercase mt-1" style={{ color: "var(--ink-muted)" }}>лет опыта</div>
              </div>
              {/* Accent dot */}
              <div
                className="absolute"
                style={{
                  top: "24px",
                  right: "-16px",
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "var(--rose-pale)",
                  border: "2px solid rgba(155,91,110,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon name="Star" size={18} style={{ color: "var(--rose)" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator" style={{ opacity: 0.4 }}>
          <Icon name="ChevronDown" size={20} style={{ color: "var(--rose)" }} />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 px-6 max-w-7xl mx-auto">
        <Section>
          <div className="text-center mb-16">
            <SectionLabel>Наши услуги</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl font-light" style={{ letterSpacing: "-0.02em", color: "var(--ink)" }}>
              Каждая процедура —<br />
              <em className="italic" style={{ color: "var(--rose)" }}>произведение искусства</em>
            </h2>
          </div>
        </Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Section key={s.title}>
              <div className="card-dark p-8 h-full flex flex-col" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-6"
                  style={{ background: "var(--rose-pale)", border: "1px solid rgba(155,91,110,0.2)" }}
                >
                  <Icon name={s.icon} size={18} style={{ color: "var(--rose)" }} />
                </div>
                <h3 className="font-display text-2xl font-light mb-3" style={{ color: "var(--ink)" }}>{s.title}</h3>
                <p className="font-body text-sm leading-relaxed flex-1" style={{ color: "var(--ink-muted)" }}>{s.desc}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="price-tag">{s.price}</span>
                  <button
                    className="opacity-60 hover:opacity-100 transition-opacity"
                    style={{ color: "var(--rose)" }}
                    onClick={() => scrollTo("booking")}
                  >
                    <Icon name="ArrowRight" size={16} />
                  </button>
                </div>
              </div>
            </Section>
          ))}
        </div>
      </section>

      <div className="divider-gold mx-6" />

      {/* PORTFOLIO / GALLERY */}
      <section id="portfolio" className="py-28 px-6 max-w-7xl mx-auto">
        <Section>
          <div className="text-center mb-12">
            <SectionLabel>Галерея работ</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl font-light mb-8" style={{ letterSpacing: "-0.02em", color: "var(--ink)" }}>
              До & после<br />
              <em className="italic" style={{ color: "var(--rose)" }}>трансформации</em>
            </h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {galleryCategories.map(cat => (
                <button
                  key={cat}
                  className="font-body text-xs tracking-[0.15em] uppercase px-5 py-2 border transition-all duration-200"
                  style={{
                    borderColor: activeGalleryFilter === cat ? "var(--rose)" : "rgba(44,36,32,0.15)",
                    color: activeGalleryFilter === cat ? "var(--rose)" : "var(--ink-muted)",
                    background: activeGalleryFilter === cat ? "var(--rose-pale)" : "transparent",
                  }}
                  onClick={() => setActiveGalleryFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredGallery.map((item, i) => (
            <Section key={i}>
              <div className="gallery-item relative" style={{ aspectRatio: "4/5" }}>
                <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
                <div className="gallery-overlay">
                  <div className="before-after-label left-4">
                    <span className="font-display italic">{item.label}</span>
                  </div>
                  <div className="before-after-label right-4">
                    <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.8)" }}>{item.category}</span>
                  </div>
                </div>
              </div>
            </Section>
          ))}
        </div>
      </section>

      <div className="divider-gold mx-6" />
    </>
  );
}