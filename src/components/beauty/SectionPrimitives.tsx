import { useState, useEffect, useRef } from "react";

export const HERO_IMG = "https://cdn.poehali.dev/projects/5666d866-7f12-4a6c-ac08-31f894405d7d/files/fca09fa8-aca1-4b48-9c3e-a247660a14d3.jpg";
export const GALLERY_IMG_1 = "https://cdn.poehali.dev/projects/5666d866-7f12-4a6c-ac08-31f894405d7d/files/f14409aa-e247-4b61-a291-d8e3013b4ca9.jpg";
export const GALLERY_IMG_2 = "https://cdn.poehali.dev/projects/5666d866-7f12-4a6c-ac08-31f894405d7d/files/b61b05ee-8747-4912-83f2-702fef10d39f.jpg";

export const services = [
  { icon: "Zap", title: "Перманентный макияж", desc: "Татуаж бровей, стрелок и губ. Естественный результат, который держится годами.", price: "от 8 000 ₽" },
  { icon: "Leaf", title: "Косметология", desc: "Чистки, пилинги, мезотерапия, биоревитализация, RF-лифтинг. Подбираю протоколы индивидуально.", price: "от 3 500 ₽" },
  { icon: "Droplets", title: "Брови", desc: "Коррекция, окрашивание, ламинирование. Выстраиваю архитектуру бровей по вашим чертам лица.", price: "от 1 800 ₽" },
];

export const gallery = [
  { img: "https://cdn.poehali.dev/projects/5666d866-7f12-4a6c-ac08-31f894405d7d/bucket/744c2038-6ad8-458c-aaa4-60d2c291c914.jpg", label: "Перманентный макияж стрелок", category: "Перманентный макияж" },
  { img: "https://cdn.poehali.dev/projects/5666d866-7f12-4a6c-ac08-31f894405d7d/bucket/40ba8639-223d-4cbd-a0bb-1ba82710f67b.jpg", label: "До и после — ресницы", category: "Наращивание ресниц" },
  { img: "https://cdn.poehali.dev/projects/5666d866-7f12-4a6c-ac08-31f894405d7d/bucket/76506788-ecb5-444a-bcea-aa1ec0c417c5.jpg", label: "Перманентный макияж губ", category: "Перманентный макияж" },
  { img: "https://cdn.poehali.dev/projects/5666d866-7f12-4a6c-ac08-31f894405d7d/bucket/63fe3c1f-9f63-453e-8722-dc5b21c27344.jpg", label: "Перманентный макияж губ", category: "Перманентный макияж" },
  { img: "https://cdn.poehali.dev/projects/5666d866-7f12-4a6c-ac08-31f894405d7d/bucket/74ac9098-1cdb-4905-859e-2c174bf780ec.jpg", label: "Наращивание ресниц", category: "Наращивание ресниц" },
];

export const reviews = [
  { name: "Анна М.", text: "Была впервые — влюбилась сразу. Атмосфера, профессионализм, результат. Теперь хожу только сюда.", stars: 5, service: "Макияж" },
  { name: "Екатерина В.", text: "Перманентный татуаж бровей сделала год назад — до сих пор идеально. Мастер настоящий художник.", stars: 5, service: "Перманентный макияж" },
  { name: "Мария С.", text: "Лучший свадебный макияж! Держался весь день, фотографии получились потрясающими.", stars: 5, service: "Свадебный макияж" },
  { name: "Ольга Т.", text: "Наконец нашла мастера, который слышит что я хочу. Брови просто идеальные!", stars: 5, service: "Брови" },
];

export const faqs = [
  { q: "Как долго держится перманентный макияж?", a: "В среднем 1,5–3 года в зависимости от типа кожи, зоны и индивидуальных особенностей. Рекомендую коррекцию через 4–6 недель после первой процедуры." },
  { q: "Нужна ли подготовка к процедурам?", a: "Для большинства процедур специальная подготовка не требуется. Перед перманентным макияжем рекомендую не употреблять алкоголь за 2 дня и не принимать кроворазжижающие препараты." },
  { q: "Как записаться онлайн?", a: "Воспользуйтесь формой записи на сайте — выберите услугу и удобное время. Также можно написать мне в Telegram или позвонить." },
  { q: "Есть ли уход после процедур?", a: "Да, для каждой процедуры я даю индивидуальные рекомендации. Вы получите подробную инструкцию по уходу и сможете задать мне вопросы в любое время." },
  { q: "Можно ли записаться на консультацию?", a: "Конечно! Онлайн-консультация бесплатна. Расскажите о своём запросе — я подберу оптимальную процедуру и отвечу на все вопросы." },
];

export const promos = [
  { tag: "Для новых клиентов", title: "Первое знакомство", desc: "Скидка 20% на любую первую процедуру у меня в студии", old: null, price: "−20%", save: "На всё меню услуг" },
  { tag: "Комплекс", title: "Брови + перманент", desc: "Коррекция и окрашивание бровей + перманентный макияж бровей", old: "11 000 ₽", price: "8 500 ₽", save: "Экономия 2 500 ₽" },
  { tag: "Косметология", title: "Уход за кожей", desc: "Глубокая чистка + пилинг + увлажняющая маска за одно посещение", old: "7 000 ₽", price: "5 500 ₽", save: "Экономия 1 500 ₽" },
];

export const slots: Record<string, string[]> = {
  "Пн, 6 мая": ["10:00", "11:30", "", "14:00", "", "16:30", "18:00", ""],
  "Вт, 7 мая": ["", "11:00", "12:30", "", "15:00", "", "17:30", "19:00"],
  "Ср, 8 мая": ["10:30", "", "12:00", "13:30", "", "16:00", "", "18:30"],
  "Чт, 9 мая": ["", "11:30", "", "14:00", "15:30", "", "17:00", ""],
};

export const SVETLANA_PHOTO = "https://cdn.poehali.dev/projects/5666d866-7f12-4a6c-ac08-31f894405d7d/bucket/661fd261-60b2-4f58-b065-d9abda20c584.jpg";

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