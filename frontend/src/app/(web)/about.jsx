import DetailStack from "@/components/customDetailStack";
import { Box, Card, Stack } from "@mui/material";

const pageTitle = "About Us";
const pageDescription =
  "At Spark And Blush Cosmetology, we are committed to making you look and feel your best. Our team of skilled professionals offers a wide range of services tailored to your unique needs. Whether you're looking for a fresh haircut, a relaxing facial, or a stunning manicure, we've got you covered.";
const pageColor = "primary.light";
export default function AboutPage() {
  return (
    <Box
      component="section"
      id="about"
      maxWidth="sm"
      minHeight="100vh"
      sx={{ backgroundColor: "primary.main", paddingY: 6 }}
    >
      <Stack spacing={2} direction="column" sx={{ padding: 1 }}>
        <Card
          sx={{
            backgroundImage: "url(/aboutpage_picture.webp)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: 400,
          }}
        ></Card>
        <Card
          sx={{
            mx: 2,
            backgroundColor: "black",
            color: "primary.light",
          }}
        >
          <DetailStack
            title={pageTitle}
            description={pageDescription}
            color={pageColor}
          />
        </Card>
      </Stack>
    </Box>
  );
}
