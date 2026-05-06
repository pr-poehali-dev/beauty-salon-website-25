import { useState, useEffect, useRef } from "react";

export const HERO_IMG = "https://cdn.poehali.dev/projects/5666d866-7f12-4a6c-ac08-31f894405d7d/files/fca09fa8-aca1-4b48-9c3e-a247660a14d3.jpg";
export const GALLERY_IMG_1 = "https://cdn.poehali.dev/projects/5666d866-7f12-4a6c-ac08-31f894405d7d/files/f14409aa-e247-4b61-a291-d8e3013b4ca9.jpg";
export const GALLERY_IMG_2 = "https://cdn.poehali.dev/projects/5666d866-7f12-4a6c-ac08-31f894405d7d/files/b61b05ee-8747-4912-83f2-702fef10d39f.jpg";

export const services = [
  { icon: "Sparkles", title: "Макияж", desc: "Дневной, вечерний, свадебный. Создаём образ, который подчёркивает вашу индивидуальность.", price: "от 3 500 ₽" },
  { icon: "Zap", title: "Перманентный макияж", desc: "Татуаж бровей, стрелок и губ. Естественный результат, который держится годами.", price: "от 8 000 ₽" },
  { icon: "Leaf", title: "Уход за кожей", desc: "Глубокое очищение, увлажнение и восстановление. Протоколы для вашего типа кожи.", price: "от 4 500 ₽" },
  { icon: "Star", title: "Наращивание ресниц", desc: "Классика, 2D, 3D объём. Натуральный взгляд или максимальная выразительность.", price: "от 2 500 ₽" },
  { icon: "Droplets", title: "Брови", desc: "Коррекция, окрашивание, ламинирование. Архитектура бровей по вашим чертам лица.", price: "от 1 800 ₽" },
  { icon: "Heart", title: "Уход за губами", desc: "Плампинг-маски, SPF-уход, профессиональное увлажнение и восстановление.", price: "от 2 200 ₽" },
];

export const gallery = [
  { img: GALLERY_IMG_1, label: "Трансформация", category: "Макияж" },
  { img: GALLERY_IMG_2, label: "Работа мастера", category: "Уход" },
  { img: HERO_IMG, label: "Студия", category: "Интерьер" },
  { img: GALLERY_IMG_1, label: "Вечерний образ", category: "Макияж" },
  { img: GALLERY_IMG_2, label: "Перманент", category: "Перманентный макияж" },
  { img: HERO_IMG, label: "Детали", category: "Уход" },
];

export const reviews = [
  { name: "Анна М.", text: "Была впервые — влюбилась сразу. Атмосфера, профессионализм, результат. Теперь хожу только сюда.", stars: 5, service: "Макияж" },
  { name: "Екатерина В.", text: "Перманентный татуаж бровей сделала год назад — до сих пор идеально. Мастер настоящий художник.", stars: 5, service: "Перманентный макияж" },
  { name: "Мария С.", text: "Лучший свадебный макияж! Держался весь день, фотографии получились потрясающими.", stars: 5, service: "Свадебный макияж" },
  { name: "Ольга Т.", text: "Наконец нашла мастера, который слышит что я хочу. Брови просто идеальные!", stars: 5, service: "Брови" },
];

export const faqs = [
  { q: "Как долго держится перманентный макияж?", a: "В среднем 1,5–3 года в зависимости от типа кожи, зоны и индивидуальных особенностей. Рекомендуем коррекцию через 4–6 недель после первой процедуры." },
  { q: "Нужна ли подготовка к процедурам?", a: "Для большинства процедур специальная подготовка не требуется. Перед перманентным макияжем рекомендуем не употреблять алкоголь за 2 дня и не принимать кроворазжижающие препараты." },
  { q: "Как записаться онлайн?", a: "Воспользуйтесь формой записи на сайте — выберите услугу, мастера и удобное время. Также можно написать нам в Telegram или позвонить." },
  { q: "Есть ли уход после процедур?", a: "Да, для каждой процедуры мы разрабатываем индивидуальные рекомендации. Вы получите подробную инструкцию по уходу и сможете задать вопросы в чате." },
  { q: "Можно ли записаться на консультацию?", a: "Конечно! Онлайн-консультация бесплатна. Расскажите о своём запросе, и мастер подберёт оптимальную процедуру и ответит на все вопросы." },
];

export const promos = [
  { tag: "Только май", title: "Комплекс «Весна»", desc: "Макияж + уход за кожей + коррекция бровей", old: "12 500 ₽", price: "8 900 ₽", save: "Экономия 3 600 ₽" },
  { tag: "Для новых клиентов", title: "Первое знакомство", desc: "Скидка 20% на любую первую процедуру", old: null, price: "−20%", save: "На всё меню услуг" },
  { tag: "Суббота — воскресенье", title: "Выходной день", desc: "Перманентный макияж бровей + коррекция", old: "10 000 ₽", price: "7 500 ₽", save: "Экономия 2 500 ₽" },
];

export const slots: Record<string, string[]> = {
  "Пн, 6 мая": ["10:00", "11:30", "", "14:00", "", "16:30", "18:00", ""],
  "Вт, 7 мая": ["", "11:00", "12:30", "", "15:00", "", "17:30", "19:00"],
  "Ср, 8 мая": ["10:30", "", "12:00", "13:30", "", "16:00", "", "18:30"],
  "Чт, 9 мая": ["", "11:30", "", "14:00", "15:30", "", "17:00", ""],
};

export const specialists = [
  { name: "Алина Соколова", role: "Визажист, перманентный макияж", exp: "8 лет опыта", certs: ["LUXVISAGE Academy", "International PMU Certificate", "Dermalogica Pro"] },
  { name: "Марина Белова", role: "Мастер по уходу за кожей", exp: "6 лет опыта", certs: ["Germaine de Capuccini", "Gigi Skincare Pro", "AHA/BHA Peel Specialist"] },
];

export function useIntersection(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useIntersection();
  return (
    <div ref={ref} className={`section-fade ${visible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-4">
      <span className="gold-line" />
      <span className="text-[11px] tracking-[0.3em] uppercase text-gold font-body font-medium">{children}</span>
      <span className="gold-line" />
    </div>
  );
}
