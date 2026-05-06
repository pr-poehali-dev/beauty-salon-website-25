import Icon from "@/components/ui/icon";
import { Section, SectionLabel, HERO_IMG, GALLERY_IMG_1, GALLERY_IMG_2, services, gallery } from "./SectionPrimitives";
import { useState } from "react";

const galleryCategories = ["Все", "Макияж", "Уход", "Перманентный макияж", "Интерьер"];

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
      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Studio" className="w-full h-full object-cover" style={{ filter: "brightness(0.22) saturate(0.7)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.2) 0%, rgba(13,13,13,0.5) 60%, var(--dark) 100%)" }} />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="gold-line" style={{ width: "80px" }} />
            <span className="text-[11px] tracking-[0.4em] uppercase text-gold font-body">Премиум бьюти-студия</span>
            <span className="gold-line" style={{ width: "80px" }} />
          </div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-[96px] font-light leading-none mb-6 animate-fade-in" style={{ animationDelay: "0.4s", letterSpacing: "-0.02em" }}>
            Искусство<br /><em className="italic" style={{ color: "var(--gold)" }}>красоты</em>
          </h1>
          <p className="font-body text-base md:text-lg opacity-60 max-w-lg mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: "0.6s" }}>
            Создаём образы, которые отражают вашу уникальность. Профессиональный уход, точные техники, безупречный результат.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <button className="btn-gold" onClick={() => scrollTo("booking")}>Записаться онлайн</button>
            <button className="btn-outline-gold" onClick={() => scrollTo("portfolio")}>Смотреть работы</button>
          </div>
          <div className="flex items-center justify-center gap-10 mt-16 animate-fade-in" style={{ animationDelay: "1s" }}>
            {[["200+", "Клиентов"], ["8", "Лет опыта"], ["5.0", "Рейтинг"]].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="font-display text-3xl font-light" style={{ color: "var(--gold)" }}>{num}</div>
                <div className="text-[11px] tracking-[0.2em] uppercase opacity-50 font-body mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator opacity-40">
          <Icon name="ChevronDown" size={20} className="text-gold" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 px-6 max-w-7xl mx-auto">
        <Section>
          <div className="text-center mb-16">
            <SectionLabel>Наши услуги</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl font-light" style={{ letterSpacing: "-0.02em" }}>
              Каждая процедура —<br /><em className="italic" style={{ color: "var(--gold)" }}>произведение искусства</em>
            </h2>
          </div>
        </Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Section key={s.title}>
              <div className="card-dark p-8 h-full flex flex-col" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-6"
                  style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
                  <Icon name={s.icon} size={18} className="text-gold" />
                </div>
                <h3 className="font-display text-2xl font-light mb-3">{s.title}</h3>
                <p className="font-body text-sm opacity-50 leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="price-tag">{s.price}</span>
                  <button className="opacity-60 hover:opacity-100 transition-opacity" style={{ color: "var(--gold)" }} onClick={() => scrollTo("booking")}>
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
            <h2 className="font-display text-5xl md:text-6xl font-light mb-8" style={{ letterSpacing: "-0.02em" }}>
              До & после<br /><em className="italic" style={{ color: "var(--gold)" }}>трансформации</em>
            </h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {galleryCategories.map(cat => (
                <button key={cat}
                  className="font-body text-xs tracking-[0.15em] uppercase px-5 py-2 border transition-all duration-200"
                  style={{
                    borderColor: activeGalleryFilter === cat ? "var(--gold)" : "rgba(255,255,255,0.1)",
                    color: activeGalleryFilter === cat ? "var(--gold)" : "rgba(237,232,223,0.5)",
                    background: activeGalleryFilter === cat ? "rgba(201,168,76,0.1)" : "transparent"
                  }}
                  onClick={() => setActiveGalleryFilter(cat)}>{cat}</button>
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
                    <span className="text-xs tracking-widest uppercase" style={{ color: "var(--gold-light)" }}>{item.category}</span>
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
