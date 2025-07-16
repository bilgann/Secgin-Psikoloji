import React from "react";
import bireyselImg from "../assets/images/bireyselpsikoterapi.jpg";
import ciftImg from "../assets/images/ciftterapi.jpg";
import duygudurumImg from "../assets/images/duygudurumbozukluklari.jpg";


const services = [
  {
    title: "Bireysel Psikoterapi",
    image: bireyselImg,
    alt: "Bireysel Psikoterapi",
    href: "/bireyselpsikoterapi",
  },
  {
    title: "Çift ve İlişki Terapisi",
    image: ciftImg,
    alt: "Çift ve İlişki Terapisi",
    href: "/ciftterapi",
  },
  {
    title: "Duygudurum Bozuklukları",
    image: duygudurumImg,
    alt: "Duygudurum Bozuklukları",
    href: "/duygudurumbozukluklari",
  },
];

export default function ServiceBoxes() {
  return (
    <section className="services" id="services">
      <div className="section-header">
        <h2>Hizmetler</h2>
        <div className="header-line"></div>
      </div>

      <div className="service-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <a href={service.href} className="page-link">
              <img src={service.image} alt={service.title} />
              <div className="card-overlay">
                <h3>{service.title}</h3>
                <a href={service.href}>
                </a>
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className="all-services-wrapper">
        <a href="/hizmetler" className="cta-button">
          Tüm Hizmetler
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="39"
            height="23"
            viewBox="0 0 39 23"
            fill="none"
          >
            <path
              d="M27.5 1L38 11.5"
              stroke="#F8FBFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.25 11.5H38"
              stroke="#F8FBFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M27.5 22L38 11.5"
              stroke="#F8FBFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
