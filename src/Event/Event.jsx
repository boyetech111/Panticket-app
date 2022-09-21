import React, {useState} from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Overlay from "../components/Overlay";
import Banner from "./components/Banner";
import Bookticket from "./components/Bookticket";
import Content from "./components/Content";



function Event() {
  const [modal, setModal] = useState(false)
  return (
    <>
      {modal ? ( 
      <Overlay>
      <Bookticket setModal={setModal}/>
      </Overlay>
      ) : null}   
      <Navbar />
      <Banner />
      <Content setModal={setModal}/>
      <Footer />
    </>
  );
}

export default Event;