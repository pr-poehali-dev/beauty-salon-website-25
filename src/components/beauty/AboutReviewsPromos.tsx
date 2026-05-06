import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Section, SectionLabel, reviews, promos } from "./SectionPrimitives";

interface AboutReviewsPromosProps {
  scrollTo: (id: string) => void;
}

export default function AboutReviewsPromos({ scrollTo }: AboutReviewsPromosProps) {
  const [reviewIdx, setReviewIdx] = useState(0);

  return (
    <>
      {/* REVIEWS */}
      <section id="reviews" className="py-28 px-6 max-w-7xl mx-auto">
        <Section>
          <div className="text-center mb-16">
            <SectionLabel>Отзывы</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl font-light" style={{ letterSpacing: "-0.02em", color: "var(--ink)" }}>
              Что говорят<br /><em className="italic" style={{ color: "var(--rose)" }}>мои клиенты</em>
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