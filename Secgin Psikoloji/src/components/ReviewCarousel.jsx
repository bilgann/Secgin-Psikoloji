import React, {useRef, useState, useEffect} from "react";

const reviews = [
    { id: 1, 
      text: "Yaklasik 1.5 yildir beraber calisiyoruz ve bu surecte stres yonetimi, fobi, kaygi ve duygu durumlari gibi konularda buyuk ilerlemeler kaydettik. samimi yaklasimi guven veren tutumu ve beni gercekten dinleyip anlamasi sureci benim icin cok degerli kildi. Kendisine cok tesekkur ederim.", 
      author: "A*** E***"
    },
    { id: 2, 
      text: "Yaklasik bir yildir seanslara duzenli olarak katiliyorum ve bu surecte kendimde fark ettigim degisim inanilmaz. Ilk basladigimda duygularimi tanimakta ve ifade etmekte cok zorlaniyordum. Simdi ise hem kendimi daha iyi taniyor hem de hayatimda karsilastigim zorluklarla daha saglikli basa cikabiliyorum seanslar boyunca kendimi guvende, anlasilmis ve yargilanmadan dinlemis hissettim. Kendimi tanimak ve ic huzuruna ulasmak isteyen herkese gonul rahatligiyla tavsiye ederim.",
      author: "S*** A***"
    },
    { id: 3, 
      text: "Aylardir kendisinden seans aliyorum, her zaman guler yuzlu, asla yargilanmayan tavri ve anlayisli yapisi sayesinde psikolojimi toparlayabildim diyebilirim. Her krizimde bana destek olmasaydi suan bu yorumu yapmakta bile zorlanirdim. Iyi ki canim terapistim iyi ki cevremdeki herkese gonulden onerimdir.",
      author: "R*** S***"},
    { id: 4, 
      text: "Anksiyete ve ilişki durumu için başvurdum. 5 aydır gidiyorum seanslarımdan verim alıyorum. Kendisinden çok memnunum. Kaygılarımı yenmeme yardımcı oluyor, her anlattığım şeylerde beni destekliyor. Terapi dışında da kendisine ulaşabiliyorum, bana yardımcı oluyor. Çevremdeki herkese öneriyorum. Ayrılık dönemindeydim, süreci birlikte yönettik, bunu başarılı bir şekilde atlattık. Artık kendimi daha sağlıklı ve mutlu hissediyorum.", 
      author: "D*** S***"
    },
    { id: 5, 
      text: "Psikologa tavsiye sonrasında ulaştım. Yıllar öncesi boşanma sürecim olmuştu. Bu da ben de uzun yıllar kaygı öfke ve uyku problemleri yarattı. Gürbey hocama çok teşekkür ediyorum üstesinden gelmemi sağladı. Saplantı kalmamayı terapiyle öğrendim. Seanslarımız devam ediyor. Çok Güler yüzlü kibar ilgili bir hocamız. Çevreme de sıklıkla tavsiye ediyorum. Yorumla da tavsiyem ulaşır umarım diğer insanlara.", 
      author: "İ***"
    },
    { id: 6, 
      text: "Çok içten ve güler yüzlü bir psikolog gerçekten. Üstelik gayet profesyonel ve çözüm odaklı. İnsan konuştukça rahatladığını hissediyor. Birkaç seansta sınav stresi ve anksiyete problemlerimi yenmemi sağladı. Sakarya'da önereceğim tek psikolog.", 
      author: "H***"
    },
    { id: 7, 
      text: "Çok tecrübeli ve yetenekli ve güleryüzlü bir psikolog. İyi ki yollarımız kesişmiş. Düzenli seanslarımıza devam ediyoruz 5.seansımız bitti ve sayesinde başa çıkamadığım tramvalarım sonucu yaşadığım uyku problemlerimi, depresyonumu yenmede çok ilerledim. Çok memnunum. Kesinlikle tavsiye ediyorum. Kendisine de başarılar diliyorum.", 
      author: "E***"
    },
    { id: 8, 
      text: "Internet üzerinden ulaştım. Kaygı bozukluğumda bas etmemde güçlük çekiyordum ve psikolog arayışım vardı Gürbey Beyle tanıştım bu süreçte bana cok guzel farkındalık kazandırdı. 8.seansimizi da sonlandırdık daha surecimiz devam ediyor. Kibar, güler yüzlü ve iletişimi cok basariyliydi cok memnun kaldım ilk seanstan beri. Çevreme ve psikolog arayan herkese tavsiye ederim", 
      author: "M***"
    },
    { id: 9, 
      text: "İhtiyacım olan terapi hizmetini Gürbey Bey ile karşılayıp yürütebildiğimi görmek terapiye olan inancımı fazlasıyla kuvvetlendirdi.İhtiyacı olan herkese tavsiye edebileceğim bir Terapist, Psikolog.Aldığım hizmetten dolayı gayet memnunum.", 
      author: "O***"
    },
];


export default function ReviewCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      if (width < 768) setCardsPerSlide(1);
      else setCardsPerSlide(3);
    };
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  const totalSlides = Math.ceil(reviews.length / cardsPerSlide);

  const getVisibleReviews = () => {
    const start = currentSlide * cardsPerSlide;
    return reviews.slice(start, start + cardsPerSlide);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };


    return (
    <section className="reviews">
        <div className="section-header">
          <h2>Sizden Gelen Yorumlar</h2>
          <div className="header-line"></div>
        </div>

        <div className="carousel-wrapper">
          <button className="carousel-btn left-btn" onClick={handlePrev}> 
              <svg
      width={11}
      height={19}
      viewBox="0 0 11 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_60_463)">
        <path
          d="M0.460094 8.38196C-0.153607 9.00021 -0.153607 10.0042 0.460094 10.6225L8.31548 18.5361C8.92919 19.1543 9.92584 19.1543 10.5395 18.5361C11.1532 17.9178 11.1532 16.9138 10.5395 16.2955L3.79373 9.49975L10.5351 2.70397C11.1488 2.08572 11.1488 1.08218 10.5351 0.46393C9.92142 -0.154318 8.92477 -0.154318 8.31106 0.46393L0.455675 8.37751L0.460586 8.38245L0.460094 8.38196Z"
          fill="#7272AB"
        />
      </g>
      <defs>
        <clipPath id="clip0_60_463">
          <rect
            width={11}
            height={19}
            fill="white"
            transform="matrix(-1 0 0 1 11 0)"
          />
        </clipPath>
      </defs>
              </svg>
          </button>

          {/* Review Cards */}
        <div className="carousel-slide">
          {getVisibleReviews().map((review) => (
            <div className="review-card" key={review.id}>
              <div className="svg-wrapper">
                  <svg
      width={219}
      height={39}
      viewBox="0 0 219 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_58_360)">
        <path
          d="M21.7367 0.896501L25.9758 13.9033H39.6953C40.9562 13.9033 41.4797 15.5111 40.4602 16.2499L29.3608 24.2884L33.6 37.2951C33.99 38.4905 32.6176 39.484 31.598 38.7452L20.4987 30.7067L9.39934 38.7452C8.37978 39.484 7.00739 38.4905 7.39735 37.2951L11.6365 24.2884L0.538081 16.2499C-0.48148 15.5111 0.0420065 13.9033 1.30297 13.9033H15.0224L19.2616 0.896501C19.6515 -0.298834 21.3476 -0.298834 21.7367 0.896501Z"
          fill="#7899D4"
        />
      </g>
      <g clipPath="url(#clip1_58_360)">
        <path
          d="M110.267 0.896501L114.609 13.9033H128.663C129.955 13.9033 130.491 15.5111 129.447 16.2499L118.077 24.2884L122.42 37.2951C122.819 38.4905 121.413 39.484 120.369 38.7452L108.999 30.7067L97.6286 38.7452C96.5842 39.484 95.1783 38.4905 95.5778 37.2951L99.9204 24.2884L88.5512 16.2499C87.5068 15.5111 88.0431 13.9033 89.3348 13.9033H103.389L107.731 0.896501C108.131 -0.298834 109.868 -0.298834 110.267 0.896501Z"
          fill="#7899D4"
        />
      </g>
      <g clipPath="url(#clip2_58_360)">
        <path
          d="M66.2065 0.896501L70.3423 13.9033H83.7271C84.9573 13.9033 85.4681 15.5111 84.4734 16.2499L73.6447 24.2884L77.7805 37.2951C78.161 38.4905 76.8221 39.484 75.8274 38.7452L64.9988 30.7067L54.1701 38.7452C53.1754 39.484 51.8365 38.4905 52.217 37.2951L56.3528 24.2884L45.525 16.2499C44.5303 15.5111 45.041 13.9033 46.2712 13.9033H59.656L63.7918 0.896501C64.1723 -0.298834 65.8269 -0.298834 66.2065 0.896501Z"
          fill="#7899D4"
        />
      </g>
      <g clipPath="url(#clip3_58_360)">
        <path
          d="M155.207 0.896501L159.342 13.9033H172.727C173.957 13.9033 174.468 15.5111 173.473 16.2499L162.645 24.2884L166.781 37.2951C167.161 38.4905 165.822 39.484 164.827 38.7452L153.999 30.7067L143.17 38.7452C142.175 39.484 140.837 38.4905 141.217 37.2951L145.353 24.2884L134.525 16.2499C133.53 15.5111 134.041 13.9033 135.271 13.9033H148.656L152.792 0.896501C153.172 -0.298834 154.827 -0.298834 155.207 0.896501Z"
          fill="#7899D4"
        />
      </g>
      <g clipPath="url(#clip4_58_360)">
        <path
          d="M199.737 0.896501L203.976 13.9033H217.695C218.956 13.9033 219.48 15.5111 218.46 16.2499L207.361 24.2884L211.6 37.2951C211.99 38.4905 210.618 39.484 209.598 38.7452L198.499 30.7067L187.399 38.7452C186.38 39.484 185.007 38.4905 185.397 37.2951L189.637 24.2884L178.538 16.2499C177.519 15.5111 178.042 13.9033 179.303 13.9033H193.022L197.262 0.896501C197.652 -0.298834 199.348 -0.298834 199.737 0.896501Z"
          fill="#7899D4"
        />
      </g>
      <defs>
        <clipPath id="clip0_58_360">
          <rect width={41} height={39} fill="white" />
        </clipPath>
        <clipPath id="clip1_58_360">
          <rect width={42} height={39} fill="white" transform="translate(88)" />
        </clipPath>
        <clipPath id="clip2_58_360">
          <rect width={40} height={39} fill="white" transform="translate(45)" />
        </clipPath>
        <clipPath id="clip3_58_360">
          <rect width={40} height={39} fill="white" transform="translate(134)" />
        </clipPath>
        <clipPath id="clip4_58_360">
          <rect width={41} height={39} fill="white" transform="translate(178)" />
        </clipPath>
      </defs>
                  </svg>
                 </div>
              <p>“{review.text}”</p>
              <span><strong>{review.author}</strong></span>
            </div>
          ))}
        </div>

          <button className="carousel-btn right-btn" onClick={handleNext}>
            <svg
      width={11}
      height={19}
      viewBox="0 0 11 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_58_382)">
        <path
          d="M10.54 8.38196C11.1537 9.00021 11.1537 10.0042 10.54 10.6225L2.68458 18.5361C2.07088 19.1543 1.07422 19.1543 0.460521 18.5361C-0.153181 17.9178 -0.153181 16.9138 0.460521 16.2955L7.20634 9.49975L0.46494 2.70397C-0.148763 2.08572 -0.148763 1.08218 0.46494 0.46393C1.07864 -0.154318 2.07529 -0.154318 2.689 0.46393L10.5444 8.37751L10.5395 8.38245L10.54 8.38196Z"
          fill="#7272AB"
        />
      </g>
      <defs>
        <clipPath id="clip0_58_382">
          <rect width={11} height={19} fill="white" />
        </clipPath>
      </defs>
              </svg>
          </button>
        </div>

      {/* Dots */}
      <div className="carousel-dots">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <span
            key={i}
            className={`dot ${currentSlide === i ? 'active' : ''}`}
            onClick={() => setCurrentSlide(i)}
          />
        ))}
      </div>

        <div className="all-services-wrapper">
                    <a href="https://www.doktortakvimi.com/gurbey-secgin/psikoloji/sakarya#profile-reviews" target="_blank" className ="cta-button">Yorum Ekle
                          <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
  >
    <g clipPath="url(#clip0_58_369)">
      <path
        d="M11.5385 1.53846C11.5385 0.6875 10.851 0 10 0C9.14904 0 8.46154 0.6875 8.46154 1.53846V8.46154H1.53846C0.6875 8.46154 0 9.14904 0 10C0 10.851 0.6875 11.5385 1.53846 11.5385H8.46154V18.4615C8.46154 19.3125 9.14904 20 10 20C10.851 20 11.5385 19.3125 11.5385 18.4615V11.5385H18.4615C19.3125 11.5385 20 10.851 20 10C20 9.14904 19.3125 8.46154 18.4615 8.46154H11.5385V1.53846Z"
        fill="#F2F6FF"
      />
    </g>
    <defs>
      <clipPath id="clip0_58_369">
        <rect width={20} height={20} fill="white" />
      </clipPath>
    </defs>
                        </svg>
                    </a>
        </div>
        
    </section>
  );
}