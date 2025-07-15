import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    href: "/bireyselpsikoterapi",
    imgSrc: "src/assets/images/bireyselpsikoterapi.jpg",
    alt: "Bireysel Psikoterapi",
    title: "Bireysel Psikoterapi",
  },
  {
    href: "/ciftterapi",
    imgSrc: "src/assets/images/ciftterapi.jpg",
    alt: "Çift ve İlişki Terapisi",
    title: "Çift ve İlişki Terapisi",
  },
  {
    href: "/duygudurumbozukluklari",
    imgSrc: "src/assets/images/duygudurumbozukluklari.jpg",
    alt: "Duygudurum Bozuklukları",
    title: "Duygudurum Bozuklukları",
  },
  {
    href: "/bagimlilik",
    imgSrc: "src/assets/images/bagimlilik.jpg",
    alt: "Bağımlılık Psikoterapi",
    title: "Bağımlılık",
  },
  {
    href: "/cinselterapi",
    imgSrc: "src/assets/images/cinselterapi.jpg",
    alt: "Cinsel Terapi",
    title: "Cinsel Terapi",
  },
  {
    href: "/kisilikbozukluklari",
    imgSrc: "src/assets/images/kisilikbozukluklari.jpg",
    alt: "Kişilik Bozuklukları",
    title: "Kişilik Bozuklukları",
  },
  {
    href: "/yassureci",
    imgSrc: "src/assets/images/yassureci.jpg",
    alt: "Yas ve Kayıp Süreçleri",
    title: "Yas ve Kayıp Süreçleri",
  },
  {
    href: "/fobiler",
    imgSrc: "src/assets/images/fobiler.jpg",
    alt: "Fobiler",
    title: "Fobiler",
  },
];

export default function Services() {
  return (
    <main className="container">
      <section className="hizmetler">
        <div className="section-header">
          <div className="section-divider"></div>
          <h2>Hizmetler</h2>
          <div className="section-divider"></div>
        </div>

        <div className="services-grid">
          {services.map(({ href, imgSrc, alt, title }) => (
            <Link
              key={title}
              to={href}
              className={`${title.toLowerCase().replace(/\s/g, "-")}-link`}
            >
              <div className="service-card">
                <img src={imgSrc} alt={alt} />
                <div className="card-overlay">
                  <h3>{title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
