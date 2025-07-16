import React from "react";
import { Link } from "react-router-dom";

// Import images
import bireysel from "../assets/images/bireyselpsikoterapi.jpg";
import cift from "../assets/images/ciftterapi.jpg";
import duygudurum from "../assets/images/duygudurumbozukluklari.jpg";
import bagimlilik from "../assets/images/bagimlilik.jpg";
import cinsel from "../assets/images/cinselterapi.jpg";
import kisilik from "../assets/images/kisilikbozukluklari.jpg";
import yas from "../assets/images/yassureci.jpg";
import fobiler from "../assets/images/fobiler.jpg";

// Define services with imported images
const services = [
  {
    href: "/bireyselpsikoterapi",
    imgSrc: bireysel,
    alt: "Bireysel Psikoterapi",
    title: "Bireysel Psikoterapi",
  },
  {
    href: "/ciftterapi",
    imgSrc: cift,
    alt: "Çift ve İlişki Terapisi",
    title: "Çift ve İlişki Terapisi",
  },
  {
    href: "/duygudurumbozukluklari",
    imgSrc: duygudurum,
    alt: "Duygudurum Bozuklukları",
    title: "Duygudurum Bozuklukları",
  },
  {
    href: "/bagimlilik",
    imgSrc: bagimlilik,
    alt: "Bağımlılık Psikoterapi",
    title: "Bağımlılık",
  },
  {
    href: "/cinselterapi",
    imgSrc: cinsel,
    alt: "Cinsel Terapi",
    title: "Cinsel Terapi",
  },
  {
    href: "/kisilikbozukluklari",
    imgSrc: kisilik,
    alt: "Kişilik Bozuklukları",
    title: "Kişilik Bozuklukları",
  },
  {
    href: "/yassureci",
    imgSrc: yas,
    alt: "Yas ve Kayıp Süreçleri",
    title: "Yas ve Kayıp Süreçleri",
  },
  {
    href: "/fobiler",
    imgSrc: fobiler,
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
