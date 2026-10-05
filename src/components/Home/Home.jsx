import React from "react";
import Header from "../Header/Header";
import MarqueeMessage from "../MarqueeMessage/MarqueeMessage";
import Navigation from "../Navigation/Navigation";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Humanitarian from "../Humanitarian/Humanitarian";
import Religious from "../Religious/Religious";
import Programs from "../Programs & Projects/Programs";
import News from "../News & Stories/News";
import GetInvolved from "../GetInvolved/GetInvolved";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Home = () => (
  <>
    <Header />
    <MarqueeMessage />
    <Navigation />
    <main>
      <Hero />
      <About />
      <Humanitarian />
      <Religious />
      <Programs />
      <News />
      <GetInvolved />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Home;
