import React from "react";
import heroImage from "../assets/images/gurbeysecginpic.jpg"; // adjust path if needed
import ServiceBoxes from "../components/ServiceBoxes";
import ReviewCarousel from "../components/ReviewCarousel";
import ContactSection from "../components/ContactSection";
import GallerySection from "../components/GallerySection";

export default function Home() {
  return (
    <main className="container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image">
          <img src={heroImage} alt="Uzman Psikolog Gürbey Seçgin" />
        </div>
        <div className="hero-text">
          <h1>Uzman Psikolog Gürbey Seçgin</h1><br />
          <p>Merhaba! Ben Uzman Psikolog Gürbey Seçgin.<br />
                    Lise eğitimimi Sakarya Üniversitesi Vakfı Koleji Anadolu Lisesi’nde tamamladıktan sonra, lisans eğitimimi 2019 yılında İstanbul Beykent Üniversitesi Psikoloji bölümünden onur belgesi ile mezun oldum. Lisans eğitimim sırasında Göztepe Eğitim Araştırma Hastanesi ve Fransız Lape Hastanesi’nde stajyer psikolog olarak çalışmalarda bulundum. Sonraki süreçlerde Rehabilitasyon Merkezleri ve Psikolojik Danışmanlık Merkezleri’nde psikolog olarak görev aldım. Birçok eğitim ve kurs sertifika programlarını başarıyla tamamladım. Şimdi ise mesleki çalışmalarıma Sakarya Serdivan’da kendi ofisimde devam etmekteyim.
                </p>
          <a className="cta-button" href="/hakkimda">Hakkımda</a>
        </div>
      </section>

      {/* Services Section */}
      <ServiceBoxes />

      {/* Reviews Section */}
      <ReviewCarousel />

      {/* Galeri Section */}
      <GallerySection />

      {/* Iletisim Section */}
      <ContactSection />
    </main>
  );
}
