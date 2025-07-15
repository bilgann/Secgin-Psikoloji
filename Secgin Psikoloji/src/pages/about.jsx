import React, { useState } from "react";
import gurbeyImage from "../assets/images/gurbeysecginpic.jpg";

const AccordionItem = ({ title, content, link, isInitiallyOpen = false }) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className={`accordion-item ${isOpen ? "active" : ""}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <span className="accordion-title">{title}</span>
        <div className="accordion-line"></div>
        <svg
          className="accordion-arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="19"
          viewBox="0 0 32 19"
          fill="none"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M17.882 18.2053C16.8407 19.2654 15.1497 19.2654 14.1085 18.2053L0.781189 4.63694C-0.260071 3.57691 -0.260071 1.85542 0.781189 0.79539C1.82245 -0.264642 3.51346 -0.264642 4.55472 0.79539L16.0002 12.4473L27.4449 0.803022C28.4862 -0.257009 30.1772 -0.257009 31.2185 0.803022C32.2597 1.86305 32.2597 3.58454 31.2185 4.64457L17.8903 18.213L17.882 18.2045V18.2053Z"
              fill="#68647C"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="32" height="19" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {isOpen && (
        <>
          <div className="accordion-content">
            <p>{content}</p>
          </div>
          <div className="accordion-button">
            <a href={link} className="cta-button">
              Detaylı Bilgi Al
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default function About() {
  return (
    <main className="container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image">
          <img src={gurbeyImage} alt="Uzman Psikolog Gürbey Seçgin" />
        </div>

        <div className="about-hero-text">
          <h1>Uzman Psikolog Gürbey Seçgin</h1><br/>

          <p>Merhaba! Ben Uzman Psikolog Gürbey Seçgin.</p>
          <p>
            Lise eğitimimi Sakarya Üniversitesi Vakfı Koleji Anadolu Lisesi’nde
            tamamladıktan sonra, İstanbul Beykent Üniversitesi Psikoloji
            bölümünden onur derecesiyle mezun oldum. Lisans eğitimim süresince,
            teorik bilgilerin ötesine geçebilmek adına sahada aktif olarak yer
            almaya özen gösterdim. Göztepe Eğitim ve Araştırma Hastanesi ile
            Fransız Lape Hastanesi’nde staj yaparak; psikiyatrik değerlendirme
            süreçlerini gözlemleme, çok yönlü vaka analizleri yapabilme ve kurum
            içi psikolojik destek çalışmalarına katılma fırsatı buldum.
          </p>
          <p>
            Mezuniyetimin ardından Rehabilitasyon Merkezleri ve Psikolojik
            Danışmanlık Merkezleri’nde psikolog olarak görev aldım. Bu süreçte
            farklı yaş grupları ve sorun alanlarıyla çalışarak, psikolojik
            desteğe duyulan ihtiyacın bireyler üzerindeki etkilerini daha yakından
            deneyimledim. Mesleki gelişime verdiğim önem doğrultusunda,
            psikoterapi yaklaşımları, kişilik bozuklukları, cinsel terapi, kaygı
            ve duygudurum bozuklukları, travma ve bağlanma üzerine çeşitli
            eğitim ve süpervizyon programlarına katıldım.
          </p>
          <p>
            Şu anda Sakarya Serdivan’da yer alan danışmanlık ofisimde, bireysel ve
            çift terapileriyle mesleki çalışmalarımı sürdürüyorum. Terapi
            sürecini; güven, samimiyet ve açıklık üzerine kurulan bir yolculuk
            olarak görüyorum. Her danışanın kendi iç dünyasına ait farklı bir
            dili ve ritmi olduğunu, bu sürecin kişiye özel şekillenmesi
            gerektiğini düşünüyorum.
          </p>
          <p>
            Danışanlarıma yargılanmadıklarını hissettikleri, duygularına alan
            açabildikleri, kendilerini tanıyabildikleri bir terapi ortamı
            sunmayı hedefliyorum.
          </p>
          <p>
            Yaşamın farklı dönemlerinde ortaya çıkan duygusal zorlanmalar,
            ilişkisel problemler ya da kendini tanıma ihtiyacı; terapi süreciyle
            birlikte dönüştürülebilir ve iyileştirilebilir alanlara dönüşebilir.
            Bu yolculukta size eşlik etmekten mutluluk duyarım.
          </p>
        </div>
      </section>

      {/* Uzmanlık Alanlarım */}
      <section className="uzmanlik">
        <div className="section-header">
          <div className="section-divider"></div>
          <h2>Uzmanlık Alanlarım</h2>
          <div className="section-divider"></div>
        </div>

        <div className="info-section">
          <div className="accordion-column">
            <AccordionItem
              title="Bireysel Psikoterapi"
              content="Bireysel psikoterapi, ister yüz yüze ister online şekilde yürütülsün, danışan ve terapist arasında kurulan terapötik ilişkiye ve güvene dayalı bir süreçtir. Kendinizi daha iyi tanımak, yaşadığınız duygusal zorlanmalarla baş etmek ya da içsel bir denge kurmak istiyorsanız, bu süreç size destek olabilir."
              link="/bireyselpsikoterapi"
              isInitiallyOpen={true} // <-- Open by default
            />
            <AccordionItem
              title="Çift ve İlişki Terapisi"
              content="Çift ve ilişki terapisi, romantik ilişkide yaşanan iletişim problemleri, çatışmalar ya da duygusal uzaklık gibi durumların ele alındığı, çiftin birlikte katıldığı bir terapi sürecidir. Bu süreçte tarafların birbirini daha iyi anlaması, duygularını ve ihtiyaçlarını daha sağlıklı ifade edebilmesi amaçlanır."
              link="/ciftterapi"
              isInitiallyOpen={true} // <-- Open by default
            />
            <AccordionItem
              title="Duygudurum ve Anksiyete Bozuklukları"
              content="Duygudurum ve anksiyete bozuklukları, kişinin iç dünyasında yoğun ve sürekli bir duygusal dalgalanma ya da kaygı yaşamasına neden olan psikolojik durumlardır. Depresyon, bipolar bozukluk, panik bozukluk, yaygın kaygı bozukluğu ve obsesif kompulsif bozukluk gibi birçok farklı tanı bu başlık altında yer alır."
              link="/duygudurumbozukluklari"
              isInitiallyOpen={true} // <-- Open by default
            />
          </div>

          {/* Contact Box */}
          <div className="contact-box">
            <div className="section-header">
              <h2>İletişim</h2>
            </div>

            <div className="contact-content">
              <div className="contact-details-vertical">
                <div className="contact-item">
                  <div className="item-title">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 33 43"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_60_394)">
                        <path
                          d="M10.6279 2.06783C10.1316 0.50578 8.82329 -0.325633 7.57295 0.119467L1.90129 2.13501C0.779852 2.53812 0 3.86502 0 5.37668C0 26.1536 12.9288 43.0002 28.8739 43.0002C30.034 43.0002 31.0523 41.984 31.3617 40.5228L32.9085 33.1324C33.2501 31.5032 32.612 29.7984 31.4132 29.1517L25.226 25.7925C24.1754 25.2214 22.9573 25.6161 22.2419 26.7667L19.6381 30.9069C15.1008 28.1104 11.4271 23.3234 9.28089 17.4112L12.4583 14.0267C13.3413 13.0861 13.6442 11.5073 13.2059 10.1384L10.6279 2.07623V2.06783Z"
                          fill="#7899D4"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_60_394">
                          <rect width={33} height={43} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <h3 className="medium-text">Telefon</h3>
                  </div>
                  <p>0 (533) 034 40 04</p>
                </div>

                <div className="contact-item">
                  <div className="item-title">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 33 43"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_60_397)">
                        <path
                          d="M18.5367 42.0334C22.9453 36.6276 33 23.5259 33 16.1667C33 7.24133 25.6094 0 16.5 0C7.39062 0 0 7.24133 0 16.1667C0 23.5259 10.0547 36.6276 14.4633 42.0334C15.5203 43.3217 17.4797 43.3217 18.5367 42.0334ZM16.5 10.7778C19.5379 10.7778 22 13.1902 22 16.1667C22 19.1432 19.5379 21.5556 16.5 21.5556C13.4621 21.5556 11 19.1432 11 16.1667C11 13.1902 13.4621 10.7778 16.5 10.7778Z"
                          fill="#7899D4"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_60_397">
                          <rect width={33} height={43} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <h3 className="medium-text">Adres</h3>
                  </div>
                  <p>
                    Arabacıalanı Mah. Cadde 54 I Blok Kat: 3 Daire: 3014, Serdivan,
                    Sakarya, Türkiye
                  </p>
                </div>

                <div className="contact-item">
                  <div className="item-title">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={38}
                      height={38}
                      viewBox="0 0 38 38"
                      fill="none"
                    >
                      <path
                        d="M34.4375 19C34.4375 27.5262 27.5262 34.4375 19 34.4375C10.4738 34.4375 3.5625 27.5262 3.5625 19C3.5625 10.4738 10.4738 3.5625 19 3.5625C27.5262 3.5625 34.4375 10.4738 34.4375 19ZM0 19C0 29.493 8.50695 38 19 38C29.493 38 38 29.493 38 19C38 8.50695 29.493 0 19 0C8.50695 0 0 8.50695 0 19ZM17.2188 8.90625V19C17.2188 19.5938 17.5156 20.1504 18.0129 20.4844L25.1379 25.2344C25.9543 25.7836 27.0602 25.5609 27.6094 24.7371C28.1586 23.9133 27.9359 22.8148 27.1121 22.2656L20.7812 18.05V8.90625C20.7812 7.91914 19.9871 7.125 19 7.125C18.0129 7.125 17.2188 7.91914 17.2188 8.90625Z"
                        fill="#7899D4"
                      />
                    </svg>
                    <h3 className="medium-text">Çalışma Saatleri</h3>
                  </div>
                  <p>
                    Pazartesi – Cumartesi
                    <br />
                    12:00 – 20:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
