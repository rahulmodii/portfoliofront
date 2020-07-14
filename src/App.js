import React from "react";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Footer from "./Components/Footer";
import Faq from "./Components/Faq";
import Pricing from "./Components/Pricing";
import Teams from "./Components/Teams";
import Portfolio from "./Components/Portfolio";
import CTA from "./Components/CTA";
import Services from "./Components/Services";
import About from "./Components/About";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
    return (  
      <GlobalProvider>
        <Header />
        <Intro />
        <main id="main">
          <About />
          <Services />
          <CTA />
          <Portfolio />
          <Teams />
          <Pricing />
          {/* <Faq /> */}
        </main>
        <Footer />
        <button  className="back-to-top">
          <i className="fa fa-chevron-up" />
        </button>
      </GlobalProvider>
    );
    
  
};

export default App;
