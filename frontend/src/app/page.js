import * as React from "react";
// import Typography from "@mui/material/Typography";
import AboutPage from "./(web)/about";
import Homepage from "./(web)/homepage";
import SpecialOffers from "./(web)/specialoffers";
import Services from "./(web)/services";
import Products from "./(web)/products";
import Contact from "./(web)/contact";

export default function Home() {
  return (
    <>
      <Homepage />
      <AboutPage />
      <SpecialOffers />
      <Services />
      <Products />
      <Contact />
    </>
  );
}
