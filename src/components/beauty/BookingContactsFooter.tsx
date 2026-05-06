import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Section, SectionLabel, services, faqs, slots } from "./SectionPrimitives";

interface BookingContactsFooterProps {
  scrollTo: (id: string) => void;
}

export default function BookingContactsFooter({ scrollTo }: BookingContactsFooterProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedSlotDay, setSelectedSlotDay] = useState("Пн, 6 мая");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <>
      {/* BOOKING */}
      <section id="booking" className="py-28 px-6 max-w-7xl mx-auto">
        <Section>
          <div className="text-center mb-16">
            <SectionLabel>Онлайн-запись</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl font-light" style={{ letterSpacing: "-0.02em", color: "var(--ink)" }}>
              Выберите<br /><em className="italic" style={{ color: "var(--rose)" }}>удобное время</em>
            </h2>
          </div>
        </Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Section>
            <div className="p-8" style={{ background: "#fff", border: "1px solid rgba(155,91,110,0.12)", boxShadow: "0 2px 20px rgba(44,36,32,0.04)" }}>
              <h3 className="font-display text-2xl font-light mb-6" style={{ color: "var(--ink)" }}>Форма записи</h3>
              <div className="flex flex-col gap-4">
                <input className="input-dark" placeholder="Ваше имя" />
                <input className="input-dark" placeholder="Телефон" />
                <input className="input-dark" placeholder="Email" />
                <select className="input-dark" style={{ background: "#fff" }}>
                  <option value="">Выберите услугу</option>
                  {services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                </select>
                <textarea className="input-dark" rows={3} placeholder="Пожелания или вопросы (необязательно)" />
                <button className="btn-gold mt-2">Отправить заявку</button>
              </div>
            </div>
          </Section>
          <Section>
            <div className="p-8" style={{ background: "#fff", border: "1px solid rgba(155,91,110,0.12)", boxShadow: "0 2px 20px rgba(44,36,32,0.04)" }}>
              <h3 className="font-display text-2xl font-light mb-6" style={{ color: "var(--ink)" }}>Доступные слоты</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {Object.keys(slots).map(day => (
                  <button key={day} onClick={() => setSelectedSlotDay(day)}
                    className="font-body text-xs px-4 py-2 border transition-all"
                    style={{
                      borderColor: selectedSlotDay === day ? "var(--rose)" : "rgba(44,36,32,0.15)",
                      color: selectedSlotDay === day ? "var(--rose)" : "var(--ink-muted)",
                      background: selectedSlotDay === day ? "var(--rose-pale)" : "transparent",
                    }}>
                    {day}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-2">
                {slots[selectedSlotDay].map((slot, i) => (
                  slot
                    ? <button key={i} className="slot-available">{slot}</button>
                    : <div key={i} className="slot-taken text-center">—</div>
                ))}
              </div>
              <p className="font-body text-xs mt-4" style={{ color: "var(--ink-muted)", opacity: 0.5 }}>Доступные слоты выделены. Нажмите для выбора.</p>
              <div className="divider-gold mt-6 mb-6" />
              <h4 className="font-display text-xl font-light mb-4" style={{ color: "var(--ink)" }}>Онлайн-консультация</h4>
              <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "var(--ink-muted)" }}>Не знаете с чего начать? Задайте вопросы мастеру онлайн — это бесплатно.</p>
              <button className="btn-outline-gold w-full">Написать мастеру</button>
            </div>
          </Section>
        </div>
      </section>

      <div className="divider-gold mx-6" />

      {/* FAQ */}
      <section className="py-28 px-6 max-w-4xl mx-auto">
        <Section>
          <div className="text-center mb-16">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="font-display text-5xl font-light" style={{ letterSpacing: "-0.02em", color: "var(--ink)" }}>
              Частые<br /><em className="italic" style={{ color: "var(--rose)" }}>вопросы</em>
            </h2>
          </div>
        </Section>
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <Section key={i}>
              <div className="accordion-dark py-6 cursor-pointer" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-body font-medium text-base" style={{ color: "var(--ink)" }}>{faq.q}</h3>
                  <Icon name={openFaq === i ? "Minus" : "Plus"} size={16} style={{ color: "var(--rose)" }} className="flex-shrink-0" />
                </div>
                {openFaq === i && (
                  <p className="font-body text-sm mt-4 leading-relaxed animate-fade-in" style={{ color: "var(--ink-muted)" }}>{faq.a}</p>
                )}
              </div>
            </Section>
          ))}
        </div>
      </section>

      <div className="divider-gold mx-6" />

      {/* EMAIL SUBSCRIPTION */}
      <section className="py-24 px-6" style={{ background: "var(--rose-pale)" }}>
        <Section>
          <div className="max-w-2xl mx-auto text-center">
            <SectionLabel>Рассылка</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-4" style={{ letterSpacing: "-0.02em", color: "var(--ink)" }}>
              Будьте в курсе <em className="italic" style={{ color: "var(--rose)" }}>акций</em>
            </h2>
            <p className="font-body text-sm mb-8" style={{ color: "var(--ink-muted)" }}>Новые услуги, эксклюзивные акции и советы по уходу — только для подписчиков.</p>
            {subscribed ? (
              <div className="flex items-center justify-center gap-3" style={{ color: "var(--rose)" }}>
                <Icon name="CheckCircle" size={20} />
                <span className="font-body text-sm tracking-wider">Вы подписаны! Спасибо.</span>
              </div>
            ) : (
              <div className="flex gap-0 max-w-md mx-auto">
                <input value={email} onChange={e => setEmail(e.target.value)} className="input-dark flex-1" placeholder="Ваш email" />
                <button className="btn-gold flex-shrink-0" onClick={() => email && setSubscribed(true)}>
                  Подписаться
                </button>
              </div>
            )}
          </div>
        </Section>
      </section>

      <div className="divider-gold mx-6" />

      {/* CONTACTS */}
      <section id="contacts" className="py-28 px-6 max-w-7xl mx-auto">
        <Section>
          <div className="text-center mb-16">
            <SectionLabel>Контакты</SectionLabel>
            <h2 className="font-display text-5xl font-light" style={{ letterSpacing: "-0.02em", color: "var(--ink)" }}>
              Найдите нас<br /><em className="italic" style={{ color: "var(--rose)" }}>легко</em>
            </h2>
          </div>
        </Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "MapPin", title: "Адрес", lines: ["Москва, ул. Большая Никитская, 12", "м. Арбатская, 3 мин пешком"] },
            { icon: "Clock", title: "Часы работы", lines: ["Пн–Пт: 10:00 – 21:00", "Сб–Вс: 11:00 – 19:00"] },
            { icon: "Phone", title: "Связь", lines: ["+7 (999) 123-45-67", "info@noirbeauty.ru"] },
          ].map((c, i) => (
            <Section key={i}>
              <div className="cert-card text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "var(--rose-pale)", border: "1px solid rgba(155,91,110,0.2)" }}>
                  <Icon name={c.icon} size={20} style={{ color: "var(--rose)" }} />
                </div>
                <h3 className="font-display text-xl font-light mb-3" style={{ color: "var(--ink)" }}>{c.title}</h3>
                {c.lines.map((line, j) => (
                  <p key={j} className="font-body text-sm" style={{ color: "var(--ink-muted)" }}>{line}</p>
                ))}
              </div>
            </Section>
          ))}
        </div>
        <Section>
          <div className="flex justify-center gap-4 mt-16">
            {[{ icon: "Instagram", label: "Instagram" }, { icon: "MessageCircle", label: "Telegram" }, { icon: "Youtube", label: "YouTube" }].map(({ icon, label }) => (
              <button key={label}
                className="flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase px-6 py-3 transition-all duration-200"
                style={{ border: "1px solid rgba(155,91,110,0.2)", color: "var(--ink-2)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--rose)"; (e.currentTarget as HTMLElement).style.color = "var(--rose)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(155,91,110,0.2)"; (e.currentTarget as HTMLElement).style.color = "var(--ink-2)"; }}>
                <Icon name={icon} size={14} style={{ color: "var(--rose)" }} />
                {label}
              </button>
            ))}
          </div>
        </Section>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6" style={{ background: "var(--cream-2)", borderTop: "1px solid rgba(155,91,110,0.12)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col leading-tight">
            <span className="font-display font-light" style={{ fontSize: "1.1rem", color: "var(--ink)", letterSpacing: "0.04em" }}>
              Студия Штриха
            </span>
            <span className="font-body font-medium" style={{ fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--rose)" }}>
              Климовой Светланы
            </span>
          </div>
          <div className="font-body text-xs tracking-wider" style={{ color: "var(--ink-muted)", opacity: 0.5 }}>© 2026 Студия Штриха. Все права защищены.</div>
          <div className="font-body text-xs tracking-wider" style={{ color: "var(--rose-light)" }}>Премиальная бьюти-студия</div>
        </div>
      </footer>
    </>
  );
}
