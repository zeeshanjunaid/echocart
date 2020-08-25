import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Help/hero";
import Categories from "./components/Help/categories";
import ContactWidget from "./components/contactWidget";
import Faqs from "./components/Help/faqs";

function App() {
  return (
    <div className="Help">
      <Hero />
      <Categories />
      <Faqs />
      <ContactWidget />
    </div>
  );
}

export default App;
