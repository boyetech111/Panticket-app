import React from "react";
import "./Banner.css";
function Banner({ image, blurImage }) {
  return (
    <div className="banner">
      <img src="/image/event-banner.png" alt="Event-banner" />
      <div className="banner-caption">
        <p className="banner-title">Pelumi</p>
        <p className="banner-para">A Musical Play By Muyiwa Adigun</p>
      </div>
    </div>
  );
}

export default Banner;