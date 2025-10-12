import * as React from "react";
import Typography from "@mui/material/Typography";
import AboutPage from "./(web)/about";
import Homepage from "./(web)/homepage";
import SpecialOffers from "./(web)/SpecialOffers";
import Services from "./(web)/Services";

export default function Home() {
  return (
    <>
      <Homepage />
      <AboutPage />
      <SpecialOffers />
      <Services />
      <Typography variant="h4" component="h1">
        Spark and Blush 2.0
      </Typography>
    </>
  );
}
