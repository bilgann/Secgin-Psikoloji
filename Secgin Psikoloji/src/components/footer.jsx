import React from "react";
import InstaIcon from "./icons/instaIcon";
import LinkedinIcon from "./icons/linkedinIcon";
import FooterLogo from "./icons/footerLogo";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                {/* Left content */}
                <div className="footer-left">
                    <div className="footer-title">
                        <h2>Uzman Psikolog Gürbey Seçgin</h2>
                        <div className="footer-divider"></div>
                    </div>

                    <div className="footer-contact-row">
                        <div className="footer-contact-group">
                            <div className="footer-contact-title">Adres</div>
                            <div className="footer-contact-details">
                                Arabacıalanı Mah. Cadde 54 I Blok Kat: 3 Daire: 3014, Serdivan, Sakarya, Türkiye
                            </div>
                        </div>

                        <div className="footer-contact-group">
                            <div className="footer-contact-title">Telefon</div>
                            <div className="footer-contact-details-phone">
                                0 (533) 034 40 04
                            </div>
                        </div>
                    </div>

                    {/* Social icons - now placed correctly under contact */}
                    <div className="social">
                        <a href="https://www.linkedin.com/in/g%C3%BCrbey-se%C3%A7gin-1182581a0/?originalSubdomain=tr" target="_blank" aria-label="LinkedIn">
                            <LinkedinIcon />
                        </a>
                        <a href="https://www.instagram.com/psk.gurbeysecgin/" target="_blank" aria-label="Instagram">
                            <InstaIcon />
                        </a>
                    </div>

                    {/* Footer note */}
                    <div className="footer-note">
                        <p>© 2025 Gürbey Seçgin, Uzman Psikolog. All rights reserved. / Tüm hakları saklıdır.</p>
                        <p>Designed by bilgan.</p>
                    </div>
                </div>

                {/* Right-side SVG */}
                <div className="footer-svg-wrapper">
                    <FooterLogo />
                </div>
            </div>
        </footer>
    );
}
