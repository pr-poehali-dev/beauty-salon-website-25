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
            <h2 className="font-display text-5xl md:text-6xl font-light" style={{ letterSpacing: "-0.02em" }}>
              Выберите<br /><em className="italic" style={{ color: "var(--gold)" }}>удобное время</em>
            </h2>
          </div>
        </Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Section>
            <div className="p-8" style={{ background: "var(--dark-2)", border: "1px solid rgba(201,168,76,0.12)" }}>
              <h3 className="font-display text-2xl font-light mb-6">Форма записи</h3>
              <div className="flex flex-col gap-4">
                <input className="input-dark" placeholder="Ваше имя" />
                <input className="input-dark" placeholder="Телефон" />
                <input className="input-dark" placeholder="Email" />
                <select className="input-dark" style={{ background: "var(--dark-3)" }}>
                  <option value="" style={{ background: "var(--dark-3)" }}>Выберите услугу</option>
                  {services.map(s => <option key={s.title} value={s.title} style={{ background: "var(--dark-3)" }}>{s.title}</option>)}
                </select>
                <textarea className="input-dark" rows={3} placeholder="Пожелания или вопросы (необязательно)" />
                <button className="btn-gold mt-2">Отправить заявку</button>
              </div>
            </div>
          </Section>
          <Section>
            <div className="p-8" style={{ background: "var(--dark-2)", border: "1px solid rgba(201,168,76,0.12)" }}>
              <h3 className="font-display text-2xl font-light mb-6">Доступные слоты</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {Object.keys(slots).map(day => (
                  <button key={day} onClick={() => setSelectedSlotDay(day)}
                    className="font-body text-xs px-4 py-2 border transition-all"
                    style={{
                      borderColor: selectedSlotDay === day ? "var(--gold)" : "rgba(255,255,255,0.1)",
                      color: selectedSlotDay === day ? "var(--gold)" : "rgba(237,232,223,0.5)",
                      background: selectedSlotDay === day ? "rgba(201,168,76,0.1)" : "transparent"
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
              <p className="font-body text-xs opacity-30 mt-4">Доступные слоты выделены золотом. Нажмите для выбора.</p>
              <div className="divider-gold mt-6 mb-6" />
              <h4 className="font-display text-xl font-light mb-4">Онлайн-консультация</h4>
              <p className="font-body text-sm opacity-50 mb-4 leading-relaxed">Не знаете с чего начать? Задайте вопросы мастеру онлайн — это бесплатно.</p>
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
            <h2 className="font-display text-5xl font-light" style={{ letterSpacing: "-0.02em" }}>
              Частые<br /><em className="italic" style={{ color: "var(--gold)" }}>вопросы</em>
            </h2>
          </div>
        </Section>
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <Section key={i}>
              <div className="accordion-dark py-6 cursor-pointer" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-body font-medium text-base">{faq.q}</h3>
                  <Icon name={openFaq === i ? "Minus" : "Plus"} size={16} className="text-gold flex-shrink-0" />
                </div>
                {openFaq === i && (
                  <p className="font-body text-sm opacity-50 mt-4 leading-relaxed animate-fade-in">{faq.a}</p>
                )}
              </div>
            </Section>
          ))}
        </div>
      </section>

      <div className="divider-gold mx-6" />

      {/* EMAIL SUBSCRIPTION */}
      <section className="py-24 px-6">
        <Section>
          <div className="max-w-2xl mx-auto text-center">
            <SectionLabel>Рассылка</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-4" style={{ letterSpacing: "-0.02em" }}>
              Будьте в курсе <em className="italic" style={{ color: "var(--gold)" }}>акций</em>
            </h2>
            <p className="font-body text-sm opacity-50 mb-8">Новые услуги, эксклюзивные акции и советы по уходу — только для подписчиков.</p>
            {subscribed ? (
              <div className="flex items-center justify-center gap-3" style={{ color: "var(--gold)" }}>
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
            <h2 className="font-display text-5xl font-light" style={{ letterSpacing: "-0.02em" }}>
              Найдите нас<br /><em className="italic" style={{ color: "var(--gold)" }}>легко</em>
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
                  style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
                  <Icon name={c.icon} size={20} className="text-gold" />
                </div>
                <h3 className="font-display text-xl font-light mb-3">{c.title}</h3>
                {c.lines.map((line, j) => (
                  <p key={j} className="font-body text-sm opacity-60">{line}</p>
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
                style={{ border: "1px solid rgba(201,168,76,0.2)", color: "#EDE8DF" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.5)"; (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.2)"; (e.currentTarget as HTMLElement).style.color = "#EDE8DF"; }}>
                <Icon name={icon} size={14} className="text-gold" />
                {label}
              </button>
            ))}
          </div>
        </Section>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6" style={{ background: "var(--dark-2)", borderTop: "1px solid rgba(201,168,76,0.12)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-xl font-light tracking-[0.15em]">
            NOIR <span style={{ color: "var(--gold)" }}>BEAUTY</span>
          </div>
          <div className="font-body text-xs opacity-30 tracking-wider">© 2026 Noir Beauty Studio. Все права защищены.</div>
          <div className="font-body text-xs tracking-wider" style={{ color: "rgba(201,168,76,0.5)" }}>Премиальная бьюти-студия</div>
        </div>
      </footer>
    </>
  );
}
