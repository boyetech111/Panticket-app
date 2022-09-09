import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-banner">
        <div className="footer-logo">
          <img src="/image/Pantiket-logo.png" alt="footer-logo" />
        </div>
        <div className="footer-details">
          <div className="phone">
            <img src="/image/phone.png" alt="phone" />
            <span>+234 812 345 6789</span>
          </div>

          <div className="email">
            <img src="/image/email.png" alt="email" />
            <a href="mailto:hello@pantiket.ng">hello@pantiket.ng</a>
          </div>

          <div className="icons">
            <img src="/image/linkedin.png" alt="linkedin" />
            <img src="/image/whatsapp.png" alt="whatsapp" />
            <img src="/image/facebooks.png" alt="facebook" />
            <img src="/image/instagrams.png" alt="instagram" />
            <img src="/image/twitter.png" alt="twitter" />
          </div>
        </div>
      </div>
      <div className="footer-caption">
        <small>2019 &copy; All rights reserved by BoyePanthera.com</small>
        <small>Design with ❤️ by BlaqMac Design</small>
      </div>
    </footer>
  );
}

export default Footer;
