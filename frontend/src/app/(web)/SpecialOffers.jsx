import DetailStack from "@/components/customDetailStack";
import { Box } from "@mui/material";

const pageTitle = "Special Offers";
const pageDescription = "Pamper Yourself at Special Prices";
const pageColor = "primary.main";

export default function SpecialOffers() {
  return (
    <Box
      component="section"
      maxWidth="sm"
      height="50vh"
      alignContent="center"
      sx={{
        background: `
        linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)),
        url("/specialoffers_picture.webp")
        `,
        backgroundSize: "cover",
        BackgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <DetailStack
        title={pageTitle}
        description={pageDescription}
        color={pageColor}
        fontWeight={"bold"}
      />
    </Box>
  );
}
