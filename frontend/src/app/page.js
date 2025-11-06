import * as React from "react";
// import Typography from "@mui/material/Typography";
import AboutPage from "./(web)/about";
import Homepage from "./(web)/Homepage";
import SpecialOffers from "./(web)/SpecialOffers";
import Services from "./(web)/Services";
import Products from "./(web)/Products";
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
