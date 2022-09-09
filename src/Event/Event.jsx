import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Banner from "./components/Banner";
import Content from "./components/Content";


function Event() {
  return (
    <>
      <Navbar />
      <Banner />
      <Content/>
      <Footer />
    </>
  );
}

export default Event;