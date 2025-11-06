import CardComponent from "@/components/customCardComponent";
import { Box, Typography } from "@mui/material";

export default function Services() {
  return (
    <Box
      component="section"
      id="services"
      maxWidth="sm"
      alignContent="center"
      sx={{
        background: `
        linear-gradient(rgba(0, 0, 0, 0.5)),
        url(services_picture.webp)
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: 2,
      }}
    >
      <Typography
        component="h1"
        variant="h5"
        textAlign="center"
        textTransform="uppercase"
        sx={{ color: "primary.light", padding: 4 }}
      >
        Services
      </Typography>
      <CardComponent
        title={"Haircare"}
        description={
          "Expert cutting, coloring, styling, braiding, wigs and treatments tailored to your hair type."
        }
        img={"haircare_picture.webp"}
        alt={"haircare"}
      />
      <CardComponent
        title={"Skincare"}
        description={
          "Revitalize your skin with our customized facial and exfoliation treatments."
        }
        img={"skincare_picture.webp"}
        alt={"skincare"}
      />
      <CardComponent
        title={"Makeup"}
        description={
          "Enhance your feature with our expert makeup application for any occassion."
        }
        img={"makeup_picture.webp"}
        alt={"makeup"}
      />
    </Box>
  );
}
