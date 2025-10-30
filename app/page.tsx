"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);// --- Меню Almaty Restaurant ---
// Папка изображений: /public/images/menu/
const menuItems = [
 
  { name: "Бешбармак", image: "/images/menu/besh.jpg", price: "189,000₫" },
  { name: "Лагман", image: "/images/menu/lagman_home.jpg", price: "149,000₫" },
  { name: "Плов", image: "/images/menu/plov.jpg", price: "159,000₫" },
  { name: "Манты с мясом", image: "/images/menu/mantym.jpg", price: "149,000₫" },
  { name: "Шашлык из баранины", image: "/images/menu/shashliklam.jpg", price: "189,000₫" },
  { name: "Солянка", image: "/images/menu/solyanka.jpg", price: "129,000₫" },
  { name: "Борщ", image: "/images/menu/borsh.jpg", price: "119,000₫" },
  { name: "Котлеты по-домашнему", image: "/images/menu/kotlety_po_domashnemu.jpg", price: "109,000₫" },
  { name: "Окрошка", image: "/images/menu/okroshka.jpg", price: "99,000₫" },
  { name: "Пельмени", image: "/images/menu/pelmeni.jpg", price: "109,000₫" },
  { name: "Грибной суп", image: "/images/menu/gribnoy_sup.jpg", price: "89,000₫" },
  { name: "Пицца с сыром", image: "/images/menu/pizza_syr.jpg", price: "179,000₫" },

  
  { name: "Phở bò", image: "/images/menu/pho_bo.jpg", price: "89,000₫" },
  { name: "Gỏi cuốn (роллы с креветкой)", image: "/images/menu/salad_s_krevetkami_i_mango.jpg", price: "79,000₫" },
  { name: "Ramen", image: "/images/menu/ramen.jpg", price: "109,000₫" },
  { name: "Шорпа", image: "/images/menu/shorpa.jpg", price: "99,000₫" },
  { name: "Гуйру лагман", image: "/images/menu/guiyru_lagman.jpg", price: "139,000₫" },
  { name: "Салат с папайей и морепродуктами", image: "/images/menu/salad_s_moreproduktami_i_papayey.jpg", price: "99,000₫" },
  { name: "Салат с лососем", image: "/images/menu/salad_s_lososom.jpg", price: "119,000₫" },
  { name: "Креветки в кляре", image: "/images/menu/krevetki_v_klyare.jpg", price: "159,000₫" },
  { name: "Кальмары с фри", image: "/images/menu/kalmar_s_fri.jpg", price: "139,000₫" },
  { name: "Куриный суп", image: "/images/menu/kurinyy_sup.jpg", price: "99,000₫" },

  
  { name: "Пицца Маргарита", image: "/images/menu/pizza_morerro.jpg", price: "189,000₫" },
  { name: "Пицца Пепперони", image: "/images/menu/pizza_peperoni.jpg", price: "199,000₫" },
  { name: "Пицца с ананасом", image: "/images/menu/pizza_ananas.jpg", price: "189,000₫" },
  { name: "Пицца с тунцом и ананасом", image: "/images/menu/pizza_tunets_i_ananas.jpg", price: "199,000₫" },
  { name: "Фри картошка", image: "/images/menu/fri_french_fries.jpg", price: "59,000₫" },
  { name: "Фаршированные баклажаны", image: "/images/menu/farshirovannyye_baklazhany.jpg", price: "99,000₫" },
  { name: "Стейк говяжий", image: "/images/menu/steik_govyazhiy.jpg", price: "239,000₫" },
  { name: "Утиная грудка в зелёном соусе", image: "/images/menu/utinaya_grudka_v_zelyonom_souse.jpg", price: "219,000₫" },
  { name: "Чебуреки ", image: "/images/menu/chebureki_2_pcs.jpg", price: "79,000₫" },
  { name: "Хлеб ", image: "/images/menu/hleb_3pcs.jpg", price: "29,000₫" },


  { name: "Наполеон торт", image: "/images/menu/napoleon_tort.jpg", price: "89,000₫" },
  { name: "Баурсаки", image: "/images/menu/baursaks.jpg", price: "59,000₫" },

  { name: "Шорпа", image: "/images/menu/shorpa.jpg", price: "39,000₫" },
  { name: "Салат из папайи с говядиной", image: "/images/menu/salat_s_pomelom.jpg", price: "69,000₫" },
];


  // ✅ 1. Клик — интро исчезает через 0.5 секунды
  const handleIntroClick = () => {
  if (introDone) return;
  setFadeOut(true);

  // 👉 Включаем фон сразу
  document.body.classList.add("bg-visible");

  setTimeout(() => {
    setIntroDone(true);
    document.body.classList.add("intro-done");
    window.scrollTo(0, 0);
  }, 500);
};
  useEffect(() => {
  const timer = setTimeout(() => {
    document.body.classList.add("bg-visible");
  }, 3000);
  return () => clearTimeout(timer);
}, []);


  // ✅ 2. Автоматическое исчезновение интро через 6 секунд
  useEffect(() => {
    const autoExit = setTimeout(() => {
      if (!introDone) {
        setFadeOut(true);
        setTimeout(() => {
          setIntroDone(true);
          document.body.classList.add("intro-done");
          window.scrollTo(0, 0);
        }, 1000); // плавный fade-out
      }
    }, 6000); // ← интро исчезает через 6 секунд от загрузки

    return () => clearTimeout(autoExit);
  }, [introDone]);

  // ✅ 3. Блокировка скролла, пока идёт интро
  useEffect(() => {
    document.body.style.overflow = introDone ? "auto" : "hidden";
  }, [introDone]);

  // --- Полная блокировка скролла, пока интро не завершено ---
  useEffect(() => {
    const preventScroll = (e: Event) => {
  e.preventDefault();
};

useEffect(() => {
  if (!introDone) {
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("keydown", preventScroll, { passive: false });
  }

  return () => {
    window.removeEventListener("wheel", preventScroll);
    window.removeEventListener("touchmove", preventScroll);
    window.removeEventListener("keydown", preventScroll);
  };
}, [introDone]);


  // --- Глушим хэши и автоскроллы браузера ---
  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const clearHash = () => {
      if (location.hash) {
        history.replaceState(null, "", location.pathname + location.search);
      }
    };

    clearHash();
    window.scrollTo(0, 0);

    const onHashChange = (e) => {
      if (!introDone) {
        e.preventDefault?.();
        clearHash();
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [introDone]);

  // --- Сброс скролла при обновлении ---
  useEffect(() => {
    window.history.replaceState(null, "", window.location.pathname);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // ✅ 4. Плавное появление фона через 3 секунды
  useEffect(() => {
    if (!introDone) {
      const timer = setTimeout(() => {
        document.body.classList.add("bg-visible");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [introDone]);

  // --- Анимация появления белых секций ---
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window === "undefined") return;
      const sections = document.querySelectorAll(".clean-section");
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show-on-scroll");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );

      sections.forEach((s) => io.observe(s));
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // --- Скрываем фон, когда скроллим ниже hero ---
  useEffect(() => {
    if (typeof window === "undefined") return;
    const bg = document.getElementById("background");
    const trigger = document.getElementById("after-hero-trigger");
    if (!bg || !trigger) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            bg.classList.add("fade-out-bg");
          } else {
            bg.classList.remove("fade-out-bg");
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(trigger);
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* ---------- Интро ---------- */}
      {!introDone && (
        <section
          id="intro"
          onClick={handleIntroClick}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            transition: "opacity 1s ease",
            opacity: fadeOut ? 0 : 1,
            cursor: "pointer",
          }}
        >
          <svg
            className="logo-svg"
            viewBox="0 0 1200 400"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Живой золотой градиент */}
              <linearGradient
                id="goldGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#d4af37">
                  <animate
                    attributeName="offset"
                    values="0;1;0"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="50%" stopColor="#fff2a8">
                  <animate
                    attributeName="offset"
                    values="0.3;0.8;0.3"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="100%" stopColor="#b8860b">
                  <animate
                    attributeName="offset"
                    values="1;0;1"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
            </defs>

            {/* ALMATY */}
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              className="logo-outline main"
            >
              ALMATY
            </text>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              className="logo-fill main"
            >
              ALMATY
            </text>

            {/* RESTAURANT */}
            <text
              x="53%"
              y="72%"
              textAnchor="middle"
              className="logo-outline sub"
            >
              RESTAURANT
            </text>
            <text
              x="53%"
              y="72%"
              textAnchor="middle"
              className="logo-fill sub"
            >
              RESTAURANT
            </text>
          </svg>
        </section>
      )}

      {/* ---------- Фон ---------- */}
      <section id="background">
        <div className="bg-image"></div>
      </section>

      {/* ---------- Главный экран ---------- */}
      <section id="hero">
  <div className="hero-content">
    <h1 className="gold-title">
      <span>Almaty Restaurant</span>
    </h1>
    <p className="hero-tagline">
  Гармония традиций и вкусов <br />
  <span>Казахстана и Вьетнама</span>
</p>

     <p className="hero-locations gold-gradient">Nha Trang &amp; Phu Quoc</p>




    <div className="hero-buttons">
      <a href="#menu" className="btn">Меню</a>
      <a href="#about" className="btn-outline">О нас</a>
      <a href="#booking" className="btn-outline">Бронирование</a>
      <a href="#address" className="btn-outline">Адрес</a>
    </div>
  </div>
</section>


      <div id="after-hero-trigger" style={{ position: "relative", top: 0 }}></div>

     {/* ---------- О РЕСТОРАНЕ ---------- */}
<section id="about" className="clean-section about-section">
  <div className="about-wrapper">
    <div className="about-text">
      <h2 className="section-title gold-gradient">О ресторане</h2>
      <p className="lead">
        <strong>Almaty Restaurant</strong> — это место, где встречаются 
        казахское гостеприимство и вьетнамская атмосфера уюта.  
        Мы создаём пространство, где каждый гость ощущает тепло дома и восточную щедрость вкусов.  
        От первых блюд, вдохновлённых горами Алматы, до свежих нот Вьетнама —  
        всё продумано до мелочей, чтобы вы чувствовали не просто вкус, а историю.
      </p>

      <p className="mission">
        Наша цель — объединить культуры и подарить вкус Востока в сердце Вьетнама.  
        Мы верим, что еда — это язык, понятный каждому.
      </p>
    </div>

    <div className="about-image">
      <img src="/images/about-almaty.jpg" alt="Almaty Restaurant interior" />
    </div>
  </div>
</section>


{/* ---------- МЕНЮ ---------- */}
<section id="menu" className="clean-section">
  <div className="section-content menu">
    <h2 className="section-title gold-gradient">Меню</h2>
    <p className="section-subtitle">Казахстанские традиции и вьетнамская свежесть в каждом блюде</p>

    {/* --- Меню карточек (горизонтальный скролл на всех устройствах) --- */}
<div className="menu-scroll">
  {menuItems.map((item, index) => (
    <article key={index} className="menu-card">
      <img src={item.image} alt={item.name} loading="lazy" />
      <div className="menu-body">
        <h3>{item.name}</h3>
      </div>
    </article>
  ))}
</div>





    <div className="menu-cta">
      <a className="btn" href="https://r.grab.com/g/6-20250830_133454_E0ED4DFA76744ABF8C776BB201B40A42_MEXMPS-5-C7MBV4DWNVN2GX" target="_blank" rel="noreferrer">Заказать в GrabFood          Nha Trang</a>
      <a className="btn" href="https://r.grab.com/g/6-20251029_022842_E0ED4DFA76744ABF8C776BB201B40A42_MEXMPS-5-C7TDGCEGJPBYN2" target="_blank" rel="noreferrer">Заказать в GrabFood          Phu Quoc</a>
      <span className="hint">Доставка и самовывоз • 10:00–22:00</span>
    </div>
  </div>
</section>

{/* ---------- БРОНИРОВАНИЕ ---------- */}
<section id="booking" className="clean-section">
  <div className="section-content booking">
    <h2 className="section-title">Бронирование</h2>
    <p className="lead">
      Ежедневно с 10:00 до 23:00. Напишите нам — подберём лучший столик.
    </p>

    <div className="booking-actions">
      <a className="btn" href="tel:+84123456789">Позвонить</a>
      <a className="btn-outline" href="https://wa.me/84123456789" target="_blank" rel="noreferrer">WhatsApp</a>
      <a className="btn-outline" href="https://t.me/your_restaurant" target="_blank" rel="noreferrer">Telegram</a>
    </div>

    <p className="micro">Almaty Restaurant — Nha Trang &amp; Phu Quoc</p>
  </div>
</section>

{/* ---------- АДРЕС ---------- */}
<section id="address" className="clean-section">
  <div className="section-content address">
    <h2 className="section-title">Адрес и контакты</h2>

    <div className="locations">
      {/* --- Nha Trang --- */}
      <div className="loc">
        <h3>Nha Trang</h3>
        <p>96A6/7, Nha Trang, Khánh Hòa, Вьетнам</p>
        <div className="map-wrap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5967.215147832618!2d109.19954854907513!3d12.227326496124435!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317067d6ba524307%3A0x521a0933d429e383!2sALMATY%20RESTAURANT!5e0!3m2!1sru!2s!4v1761680584886!5m2!1sru!2s"
            style={{ border: 0, width: "100%", height: "250px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* --- Phu Quoc --- */}
      <div className="loc">
        <h3>Phu Quoc</h3>
        <p>75b Đường Trần Hưng Đạo, Khu phố 7, Phú Quốc, Kiên Giang</p>
        <div className="map-wrap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.658735284006!2d103.9619835!3d10.2083438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a78d002ecfaf93%3A0xc93f672335fe79bc!2sAlmaty%20restaurant!5e0!3m2!1sru!2s!4v1761680474187!5m2!1sru!2s"
            style={{ border: 0, width: "100%", height: "250px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>


    <div className="socials">
      <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
      <span>•</span>
      <a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a>
      <span>•</span>
      <a href="https://grab.com" target="_blank" rel="noreferrer">GrabFood</a>
    </div>

    <p className="micro gold-gradient text-glow">Nha Trang &amp; Phu Quoc</p>
  </div>
</section>

    </main>
  );
}
