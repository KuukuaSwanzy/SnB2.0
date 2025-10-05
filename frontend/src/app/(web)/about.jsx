import DetailStack from "@/components/customDetailStack";
import { Box, Card } from "@mui/material";

const pageTitle = "About Us";
const pageDescription =
  "At Spark And Blush Cosmetology, we are committed to making you look and feel your best. Our team of skilled professionals offers a wide range of services tailored to your unique needs. Whether you're looking for a fresh haircut, a relaxing facial, or a stunning manicure, we've got you covered.";
const pageColor = "primary.light";
export default function AboutPage() {
  return (
    <Box
      component="section"
      maxWidth="sm"
      minHeight="100vh"
      sx={{ backgroundColor: "primary.main" }}
    >
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
    </Box>
  );
}
