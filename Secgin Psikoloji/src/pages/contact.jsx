import React from "react";

export default function Contact() {
     return (
    <main className="container">
      <section className="iletisim">
        <div className="section-header">
          <div className="section-divider"></div>
          <h2>İletişim</h2>
          <div className="section-divider"></div>
        </div>

        <div className="contact-page-details">
          <div className="contact-item">
            <a href="tel:+905330344004" aria-label="Telefon Numarasını Ara">
              <svg
                width="24"
                height="24"
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
                    <rect width="33" height="43" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <h3 className="medium-text">Telefon</h3>
            <p>0 (533) 034 40 04</p>
          </div>

          <div className="contact-item">
            <a
              href="https://www.google.com/maps?q=Arabacıalanı+Mah.+Cadde+54+I+Blok+Kat:+3+Daire:+3014,+Serdivan,+Sakarya,+Türkiye"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Adresi Google Maps'te aç"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
                    <rect width="33" height="43" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <h3 className="medium-text">Adres</h3>
            <p>
              Arabacıalanı Mah. Cadde 54 I Blok Kat: 3 Daire: 3014, Serdivan,
              Sakarya, Türkiye
            </p>
          </div>

          <div className="contact-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 38 38"
              fill="none"
            >
              <g clipPath="url(#clip0_60_406)">
                <path
                  d="M34.4375 19C34.4375 27.5262 27.5262 34.4375 19 34.4375C10.4738 34.4375 3.5625 27.5262 3.5625 19C3.5625 10.4738 10.4738 3.5625 19 3.5625C27.5262 3.5625 34.4375 10.4738 34.4375 19ZM0 19C0 29.493 8.50695 38 19 38C29.493 38 38 29.493 38 19C38 8.50695 29.493 0 19 0C8.50695 0 0 8.50695 0 19ZM17.2188 8.90625V19C17.2188 19.5938 17.5156 20.1504 18.0129 20.4844L25.1379 25.2344C25.9543 25.7836 27.0602 25.5609 27.6094 24.7371C28.1586 23.9133 27.9359 22.8148 27.1121 22.2656L20.7812 18.05V8.90625C20.7812 7.91914 19.9871 7.125 19 7.125C18.0129 7.125 17.2188 7.91914 17.2188 8.90625Z"
                  fill="#7899D4"
                />
              </g>
              <defs>
                <clipPath id="clip0_60_406">
                  <rect width="38" height="38" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h3 className="medium-text">Çalışma Saatleri</h3>
            <p>
              Pazartesi – Cumartesi
              <br />
              12:00 – 20:00
            </p>
          </div>
        </div>

        <div className="google-map-wrapper">
          <div className="google-map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.4617205682966!2d30.366411099999997!3d40.7738624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ccb390a3df8cd3%3A0x2dd4451858743b66!2sSakarya%20Uzman%20Psikolog%20G%C3%BCrbey%20Se%C3%A7gin!5e0!3m2!1sen!2str!4v1750448074091!5m2!1sen!2str"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}