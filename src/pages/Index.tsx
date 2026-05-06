import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/5666d866-7f12-4a6c-ac08-31f894405d7d/files/fca09fa8-aca1-4b48-9c3e-a247660a14d3.jpg";
const GALLERY_IMG_1 = "https://cdn.poehali.dev/projects/5666d866-7f12-4a6c-ac08-31f894405d7d/files/f14409aa-e247-4b61-a291-d8e3013b4ca9.jpg";
const GALLERY_IMG_2 = "https://cdn.poehali.dev/projects/5666d866-7f12-4a6c-ac08-31f894405d7d/files/b61b05ee-8747-4912-83f2-702fef10d39f.jpg";

const services = [
  { icon: "Sparkles", title: "Макияж", desc: "Дневной, вечерний, свадебный. Создаём образ, который подчёркивает вашу индивидуальность.", price: "от 3 500 ₽" },
  { icon: "Zap", title: "Перманентный макияж", desc: "Татуаж бровей, стрелок и губ. Естественный результат, который держится годами.", price: "от 8 000 ₽" },
  { icon: "Leaf", title: "Уход за кожей", desc: "Глубокое очищение, увлажнение и восстановление. Протоколы для вашего типа кожи.", price: "от 4 500 ₽" },
  { icon: "Star", title: "Наращивание ресниц", desc: "Классика, 2D, 3D объём. Натуральный взгляд или максимальная выразительность.", price: "от 2 500 ₽" },
  { icon: "Droplets", title: "Брови", desc: "Коррекция, окрашивание, ламинирование. Архитектура бровей по вашим чертам лица.", price: "от 1 800 ₽" },
  { icon: "Heart", title: "Уход за губами", desc: "Плампинг-маски, SPF-уход, профессиональное увлажнение и восстановление.", price: "от 2 200 ₽" },
];

const gallery = [
  { img: GALLERY_IMG_1, label: "Трансформация", category: "Макияж" },
  { img: GALLERY_IMG_2, label: "Работа мастера", category: "Уход" },
  { img: HERO_IMG, label: "Студия", category: "Интерьер" },
  { img: GALLERY_IMG_1, label: "Вечерний образ", category: "Макияж" },
  { img: GALLERY_IMG_2, label: "Перманент", category: "Перманентный макияж" },
  { img: HERO_IMG, label: "Детали", category: "Уход" },
];

const reviews = [
  { name: "Анна М.", text: "Была впервые — влюбилась сразу. Атмосфера, профессионализм, результат. Теперь хожу только сюда.", stars: 5, service: "Макияж" },
  { name: "Екатерина В.", text: "Перманентный татуаж бровей сделала год назад — до сих пор идеально. Мастер настоящий художник.", stars: 5, service: "Перманентный макияж" },
  { name: "Мария С.", text: "Лучший свадебный макияж! Держался весь день, фотографии получились потрясающими.", stars: 5, service: "Свадебный макияж" },
  { name: "Ольга Т.", text: "Наконец нашла мастера, который слышит что я хочу. Брови просто идеальные!", stars: 5, service: "Брови" },
];

const faqs = [
  { q: "Как долго держится перманентный макияж?", a: "В среднем 1,5–3 года в зависимости от типа кожи, зоны и индивидуальных особенностей. Рекомендуем коррекцию через 4–6 недель после первой процедуры." },
  { q: "Нужна ли подготовка к процедурам?", a: "Для большинства процедур специальная подготовка не требуется. Перед перманентным макияжем рекомендуем не употреблять алкоголь за 2 дня и не принимать кроворазжижающие препараты." },
  { q: "Как записаться онлайн?", a: "Воспользуйтесь формой записи на сайте — выберите услугу, мастера и удобное время. Также можно написать нам в Telegram или позвонить." },
  { q: "Есть ли уход после процедур?", a: "Да, для каждой процедуры мы разрабатываем индивидуальные рекомендации. Вы получите подробную инструкцию по уходу и сможете задать вопросы в чате." },
  { q: "Можно ли записаться на консультацию?", a: "Конечно! Онлайн-консультация бесплатна. Расскажите о своём запросе, и мастер подберёт оптимальную процедуру и ответит на все вопросы." },
];

const promos = [
  { tag: "Только май", title: "Комплекс «Весна»", desc: "Макияж + уход за кожей + коррекция бровей", old: "12 500 ₽", price: "8 900 ₽", save: "Экономия 3 600 ₽" },
  { tag: "Для новых клиентов", title: "Первое знакомство", desc: "Скидка 20% на любую первую процедуру", old: null, price: "−20%", save: "На всё меню услуг" },
  { tag: "Суббота — воскресенье", title: "Выходной день", desc: "Перманентный макияж бровей + коррекция", old: "10 000 ₽", price: "7 500 ₽", save: "Экономия 2 500 ₽" },
];

const slots: Record<string, string[]> = {
  "Пн, 6 мая": ["10:00", "11:30", "", "14:00", "", "16:30", "18:00", ""],
  "Вт, 7 мая": ["", "11:00", "12:30", "", "15:00", "", "17:30", "19:00"],
  "Ср, 8 мая": ["10:30", "", "12:00", "13:30", "", "16:00", "", "18:30"],
  "Чт, 9 мая": ["", "11:30", "", "14:00", "15:30", "", "17:00", ""],
};

const specialists = [
  { name: "Алина Соколова", role: "Визажист, перманентный макияж", exp: "8 лет опыта", certs: ["LUXVISAGE Academy", "International PMU Certificate", "Dermalogica Pro"] },
  { name: "Марина Белова", role: "Мастер по уходу за кожей", exp: "6 лет опыта", certs: ["Germaine de Capuccini", "Gigi Skincare Pro", "AHA/BHA Peel Specialist"] },
];

function useIntersection(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useIntersection();
  return (
    <div ref={ref} className={`section-fade ${visible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-4">
      <span className="gold-line" />
      <span className="text-[11px] tracking-[0.3em] uppercase text-gold font-body font-medium">{children}</span>
      <span className="gold-line" />
    </div>
  );
}

export default function Index() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeGalleryFilter, setActiveGalleryFilter] = useState("Все");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [reviewIdx, setReviewIdx] = useState(0);
  const [selectedSlotDay, setSelectedSlotDay] = useState("Пн, 6 мая");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const handler = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const galleryCategories = ["Все", "Макияж", "Уход", "Перманентный макияж", "Интерьер"];
  const filteredGallery = activeGalleryFilter === "Все"
    ? gallery
    : gallery.filter(g => g.category === activeGalleryFilter);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="grain-overlay min-h-screen" style={{ background: "var(--dark)", color: "#EDE8DF" }}>

      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navScrolled ? "py-4" : "py-7"}`}
        style={{
          background: navScrolled ? "rgba(13,13,13,0.96)" : "transparent",
          backdropFilter: navScrolled ? "blur(20px)" : "none",
          borderBottom: navScrolled ? "1px solid rgba(201,168,76,0.12)" : "none"
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="font-display text-xl font-light tracking-[0.15em] cursor-pointer" onClick={() => scrollTo("hero")}>
            NOIR <span className="text-gold">BEAUTY</span>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            {[["hero", "Главная"], ["services", "Услуги"], ["portfolio", "Портфолио"], ["about", "О нас"], ["reviews", "Отзывы"], ["promos", "Акции"], ["booking", "Запись"], ["contacts", "Контакты"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="nav-link text-[#EDE8DF] opacity-70 hover:opacity-100 hover-gold transition-all duration-200 font-body">{label}</button>
            ))}
          </div>
          <button className="hidden lg:block btn-gold text-xs" onClick={() => scrollTo("booking")}>Записаться</button>
          <button className="lg:hidden" style={{ color: "var(--gold)" }} onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden px-6 pt-4 pb-6 border-t border-yellow-700/20 mt-4" style={{ background: "rgba(13,13,13,0.98)" }}>
            <div className="flex flex-col gap-5">
              {[["hero", "Главная"], ["services", "Услуги"], ["portfolio", "Портфолио"], ["about", "О нас"], ["reviews", "Отзывы"], ["promos", "Акции"], ["booking", "Запись"], ["contacts", "Контакты"]].map(([id, label]) => (
                <button key={id} onClick={() => scrollTo(id)} className="text-left nav-link text-[#EDE8DF] hover-gold font-body">{label}</button>
              ))}
            </div>
          </div>
        )}
      </nav>

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

      {/* ABOUT */}
      <section id="about" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Section>
            <div className="relative">
              <img src={GALLERY_IMG_2} alt="Мастер" className="w-full object-cover" style={{ aspectRatio: "3/4", filter: "saturate(0.85)" }} />
              <div className="absolute -bottom-6 -right-6 p-8 w-52"
                style={{ background: "var(--dark-2)", border: "1px solid rgba(201,168,76,0.2)" }}>
                <div className="font-display text-5xl font-light" style={{ color: "var(--gold)" }}>8</div>
                <div className="font-body text-xs tracking-widest uppercase opacity-50 mt-1">лет опыта</div>
              </div>
            </div>
          </Section>
          <Section>
            <SectionLabel>Обо мне</SectionLabel>
            <h2 className="font-display text-5xl font-light mb-6" style={{ letterSpacing: "-0.02em" }}>
              Алина Соколова —<br /><em className="italic" style={{ color: "var(--gold)" }}>мастер своего дела</em>
            </h2>
            <p className="font-body text-sm opacity-60 leading-relaxed mb-6">
              Я верю, что каждая женщина прекрасна. Моя задача — не изменить вас, а раскрыть вашу индивидуальность. За 8 лет работы я помогла более чем 200 клиентам обрести уверенность в себе.
            </p>
            <p className="font-body text-sm opacity-60 leading-relaxed mb-10">
              Использую только сертифицированные материалы класса премиум. Постоянно повышаю квалификацию на международных мастер-классах.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[["Международные сертификаты", "5+"], ["Обученных мастеров", "12"], ["Повторных клиентов", "94%"], ["Работ в портфолио", "500+"]].map(([label, val]) => (
                <div key={label} className="cert-card">
                  <div className="font-display text-3xl font-light" style={{ color: "var(--gold)" }}>{val}</div>
                  <div className="font-body text-xs opacity-50 mt-1 leading-snug">{label}</div>
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
              <h2 className="font-display text-4xl font-light" style={{ letterSpacing: "-0.02em" }}>
                Наши <em className="italic" style={{ color: "var(--gold)" }}>специалисты</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specialists.map((sp, i) => (
                <div key={i} className="cert-card">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
                      <Icon name="User" size={22} className="text-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-light">{sp.name}</h3>
                      <p className="font-body text-xs tracking-wider uppercase mt-1 mb-1" style={{ color: "var(--gold)" }}>{sp.role}</p>
                      <p className="font-body text-xs opacity-40">{sp.exp}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {sp.certs.map(c => (
                          <span key={c} className="font-body text-[10px] tracking-wider uppercase px-3 py-1"
                            style={{ border: "1px solid rgba(201,168,76,0.2)", color: "rgba(201,168,76,0.7)" }}>
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
            <h2 className="font-display text-5xl md:text-6xl font-light" style={{ letterSpacing: "-0.02em" }}>
              Что говорят<br /><em className="italic" style={{ color: "var(--gold)" }}>наши клиенты</em>
            </h2>
          </div>
        </Section>
        <div className="max-w-3xl mx-auto">
          <Section>
            <div className="relative p-12" style={{ background: "var(--dark-2)", border: "1px solid rgba(201,168,76,0.15)" }}>
              <div className="font-display absolute top-4 left-10 leading-none select-none opacity-10"
                style={{ fontSize: "100px", color: "var(--gold)" }}>"</div>
              <div className="flex gap-1 mb-6">
                {Array.from({ length: reviews[reviewIdx].stars }).map((_, i) => (
                  <Icon key={i} name="Star" size={14} className="text-gold" />
                ))}
              </div>
              <p className="font-display text-2xl font-light leading-relaxed mb-8 relative z-10 italic">{reviews[reviewIdx].text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-body font-medium text-sm">{reviews[reviewIdx].name}</div>
                  <div className="font-body text-xs tracking-wider uppercase mt-1" style={{ color: "rgba(201,168,76,0.7)" }}>{reviews[reviewIdx].service}</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setReviewIdx((reviewIdx - 1 + reviews.length) % reviews.length)}
                    className="w-10 h-10 flex items-center justify-center transition-colors"
                    style={{ border: "1px solid rgba(201,168,76,0.2)" }}>
                    <Icon name="ChevronLeft" size={16} className="text-gold" />
                  </button>
                  <button onClick={() => setReviewIdx((reviewIdx + 1) % reviews.length)}
                    className="w-10 h-10 flex items-center justify-center transition-colors"
                    style={{ border: "1px solid rgba(201,168,76,0.2)" }}>
                    <Icon name="ChevronRight" size={16} className="text-gold" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-5">
              {reviews.map((_, i) => (
                <button key={i} onClick={() => setReviewIdx(i)}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{ width: i === reviewIdx ? "24px" : "6px", background: i === reviewIdx ? "var(--gold)" : "rgba(201,168,76,0.25)" }} />
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
            <h2 className="font-display text-5xl md:text-6xl font-light" style={{ letterSpacing: "-0.02em" }}>
              Акции &<br /><em className="italic" style={{ color: "var(--gold)" }}>скидки</em>
            </h2>
          </div>
        </Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promos.map((p, i) => (
            <Section key={i}>
              <div className="promo-card p-8 h-full flex flex-col" style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="font-body text-[10px] tracking-[0.25em] uppercase self-start mb-6 px-3 py-1"
                  style={{ color: "var(--gold)", border: "1px solid rgba(201,168,76,0.3)" }}>{p.tag}</span>
                <h3 className="font-display text-2xl font-light mb-2">{p.title}</h3>
                <p className="font-body text-sm opacity-50 mb-6 flex-1">{p.desc}</p>
                <div className="mt-auto">
                  {p.old && <div className="font-body text-xs opacity-30 line-through mb-1">{p.old}</div>}
                  <div className="font-display text-4xl font-light mb-2" style={{ color: "var(--gold)" }}>{p.price}</div>
                  <div className="font-body text-xs mb-6" style={{ color: "rgba(201,168,76,0.6)" }}>{p.save}</div>
                  <button className="btn-outline-gold w-full text-center" onClick={() => scrollTo("booking")}>Воспользоваться</button>
                </div>
              </div>
            </Section>
          ))}
        </div>
      </section>

      <div className="divider-gold mx-6" />

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

    </div>
  );
}