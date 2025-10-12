import * as React from "react";
import Typography from "@mui/material/Typography";
import AboutPage from "./(web)/about";
import Homepage from "./(web)/homepage";
import SpecialOffers from "./(web)/SpecialOffers";

export default function Home() {
  return (
    <>
      <Homepage />
      <AboutPage />
      <SpecialOffers />
      <Typography variant="h4" component="h1">
        Spark and Blush 2.0
      </Typography>
    </>
  );
}
