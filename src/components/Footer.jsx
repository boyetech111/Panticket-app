import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-banner">
        <div className="footer-logo">
          <img src="/image/Pantiket-logo.png" alt="footer-logo" />
        </div>
        <div className="right-flex">
          <div id="phone-container" className="flex-container">
            <a href="tel:+234 812 345 6789">
            <img src="/image/phone.png" alt="phone" />
            </a>
            <a href='tel:+2348123456789' className='phone'>
              +234 812 345 6789
            </a>
          </div>

          <div id="email-container" className="flex-container icon">
            <a href="mailto:hello@pantiket.ng">
            <img src="/image/email.png" alt="email" />
            </a>
            <a href="mailto:hello@pantiket.ng"  className='email'>
            hello@pantiket.ng
            </a>
          </div>

          

          <div id='icon-container' className='flex-container'>
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

