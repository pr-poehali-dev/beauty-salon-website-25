import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Section, SectionLabel, GALLERY_IMG_2, reviews, promos, specialists } from "./SectionPrimitives";

interface AboutReviewsPromosProps {
  scrollTo: (id: string) => void;
}

export default function AboutReviewsPromos({ scrollTo }: AboutReviewsPromosProps) {
  const [reviewIdx, setReviewIdx] = useState(0);

  return (
    <>
      {/* ABOUT */}
      <section id="about" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Section>
            <div className="relative">
              <img src={GALLERY_IMG_2} alt="Мастер" className="w-full object-cover" style={{ aspectRatio: "3/4", filter: "saturate(0.88)" }} />
              <div className="absolute -bottom-6 -right-6 p-8 w-52"
                style={{ background: "#fff", border: "1px solid rgba(155,91,110,0.18)", boxShadow: "0 8px 32px rgba(44,36,32,0.08)" }}>
                <div className="font-display text-5xl font-light" style={{ color: "var(--rose)" }}>8</div>
                <div className="font-body text-xs tracking-widest uppercase mt-1" style={{ color: "var(--ink-muted)" }}>лет опыта</div>
              </div>
            </div>
          </Section>
          <Section>
            <SectionLabel>Обо мне</SectionLabel>
            <h2 className="font-display text-5xl font-light mb-6" style={{ letterSpacing: "-0.02em", color: "var(--ink)" }}>
              Алина Соколова —<br /><em className="italic" style={{ color: "var(--rose)" }}>мастер своего дела</em>
            </h2>
            <p className="font-body text-sm leading-relaxed mb-6" style={{ color: "var(--ink-muted)" }}>
              Я верю, что каждая женщина прекрасна. Моя задача — не изменить вас, а раскрыть вашу индивидуальность. За 8 лет работы я помогла более чем 200 клиентам обрести уверенность в себе.
            </p>
            <p className="font-body text-sm leading-relaxed mb-10" style={{ color: "var(--ink-muted)" }}>
              Использую только сертифицированные материалы класса премиум. Постоянно повышаю квалификацию на международных мастер-классах.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[["Международные сертификаты", "5+"], ["Обученных мастеров", "12"], ["Повторных клиентов", "94%"], ["Работ в портфолио", "500+"]].map(([label, val]) => (
                <div key={label} className="cert-card">
                  <div className="font-display text-3xl font-light" style={{ color: "var(--rose)" }}>{val}</div>
                  <div className="font-body text-xs leading-snug mt-1" style={{ color: "var(--ink-muted)" }}>{label}</div>
                </div>
              ))}
            </div>
            <button className="btn-gold" onClick={() => scrollTo("booking")}>Записаться к Алине</button>
          </Section>
        </div>

        {/* SPECIALISTS */}
        <Section>
          <div className="mt-24">
            <div className="text-center mb-12">
              <SectionLabel>Команда</SectionLabel>
              <h2 className="font-display text-4xl font-light" style={{ letterSpacing: "-0.02em", color: "var(--ink)" }}>
                Наши <em className="italic" style={{ color: "var(--rose)" }}>специалисты</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specialists.map((sp, i) => (
                <div key={i} className="cert-card">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--rose-pale)", border: "1px solid rgba(155,91,110,0.2)" }}>
                      <Icon name="User" size={22} style={{ color: "var(--rose)" }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-light" style={{ color: "var(--ink)" }}>{sp.name}</h3>
                      <p className="font-body text-xs tracking-wider uppercase mt-1 mb-1" style={{ color: "var(--rose)" }}>{sp.role}</p>
                      <p className="font-body text-xs" style={{ color: "var(--ink-muted)" }}>{sp.exp}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {sp.certs.map(c => (
                          <span key={c} className="font-body text-[10px] tracking-wider uppercase px-3 py-1"
                            style={{ border: "1px solid rgba(155,91,110,0.2)", color: "var(--rose)" }}>
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </section>

      <div className="divider-gold mx-6" />

      {/* REVIEWS */}
      <section id="reviews" className="py-28 px-6 max-w-7xl mx-auto">
        <Section>
          <div className="text-center mb-16">
            <SectionLabel>Отзывы</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl font-light" style={{ letterSpacing: "-0.02em", color: "var(--ink)" }}>
              Что говорят<br /><em className="italic" style={{ color: "var(--rose)" }}>наши клиенты</em>
            </h2>
          </div>
        </Section>
        <div className="max-w-3xl mx-auto">
          <Section>
            <div className="relative p-12" style={{ background: "#fff", border: "1px solid rgba(155,91,110,0.15)", boxShadow: "0 4px 32px rgba(44,36,32,0.06)" }}>
              <div className="font-display absolute top-4 left-10 leading-none select-none"
                style={{ fontSize: "100px", color: "var(--rose-pale)", lineHeight: 1 }}>"</div>
              <div className="flex gap-1 mb-6">
                {Array.from({ length: reviews[reviewIdx].stars }).map((_, i) => (
                  <Icon key={i} name="Star" size={14} style={{ color: "var(--gold)" }} />
                ))}
              </div>
              <p className="font-display text-2xl font-light leading-relaxed mb-8 relative z-10 italic" style={{ color: "var(--ink)" }}>{reviews[reviewIdx].text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-body font-medium text-sm" style={{ color: "var(--ink)" }}>{reviews[reviewIdx].name}</div>
                  <div className="font-body text-xs tracking-wider uppercase mt-1" style={{ color: "var(--rose-light)" }}>{reviews[reviewIdx].service}</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setReviewIdx((reviewIdx - 1 + reviews.length) % reviews.length)}
                    className="w-10 h-10 flex items-center justify-center transition-colors"
                    style={{ border: "1px solid rgba(155,91,110,0.2)" }}>
                    <Icon name="ChevronLeft" size={16} style={{ color: "var(--rose)" }} />
                  </button>
                  <button onClick={() => setReviewIdx((reviewIdx + 1) % reviews.length)}
                    className="w-10 h-10 flex items-center justify-center transition-colors"
                    style={{ border: "1px solid rgba(155,91,110,0.2)" }}>
                    <Icon name="ChevronRight" size={16} style={{ color: "var(--rose)" }} />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-5">
              {reviews.map((_, i) => (
                <button key={i} onClick={() => setReviewIdx(i)}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{ width: i === reviewIdx ? "24px" : "6px", background: i === reviewIdx ? "var(--rose)" : "rgba(155,91,110,0.2)" }} />
              ))}
            </div>
          </Section>
        </div>
      </section>

      <div className="divider-gold mx-6" />

      {/* PROMOS */}
      <section id="promos" className="py-28 px-6 max-w-7xl mx-auto">
        <Section>
          <div className="text-center mb-16">
            <SectionLabel>Специальные предложения</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl font-light" style={{ letterSpacing: "-0.02em", color: "var(--ink)" }}>
              Акции &<br /><em className="italic" style={{ color: "var(--rose)" }}>скидки</em>
            </h2>
          </div>
        </Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promos.map((p, i) => (
            <Section key={i}>
              <div className="promo-card p-8 h-full flex flex-col" style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="font-body text-[10px] tracking-[0.25em] uppercase self-start mb-6 px-3 py-1"
                  style={{ color: "var(--rose)", border: "1px solid rgba(155,91,110,0.3)" }}>{p.tag}</span>
                <h3 className="font-display text-2xl font-light mb-2" style={{ color: "var(--ink)" }}>{p.title}</h3>
                <p className="font-body text-sm mb-6 flex-1" style={{ color: "var(--ink-muted)" }}>{p.desc}</p>
                <div className="mt-auto">
                  {p.old && <div className="font-body text-xs line-through mb-1" style={{ color: "var(--ink-muted)", opacity: 0.5 }}>{p.old}</div>}
                  <div className="font-display text-4xl font-light mb-2" style={{ color: "var(--rose)" }}>{p.price}</div>
                  <div className="font-body text-xs mb-6" style={{ color: "var(--rose-light)" }}>{p.save}</div>
                  <button className="btn-outline-gold w-full text-center" onClick={() => scrollTo("booking")}>Воспользоваться</button>
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
