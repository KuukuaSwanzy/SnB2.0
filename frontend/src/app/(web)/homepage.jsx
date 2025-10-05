import DetailStack from "@/components/customDetailStack";
import { Box } from "@mui/material";

const pageTitle = "Welcome to Spark And Blush Cosmetology";
const pageDescription = `"Alchemy of Beauty, Artistry of You"`;
const pageColor = "primary.main";

export default function Homepage() {
  return (
    <Box
      component="section"
      maxWidth="sm"
      height="50vh"
      sx={{
        backgroundImage: "url(frontpage_picture.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      alignContent="center"
    >
      <DetailStack
        title={pageTitle}
        description={pageDescription}
        color={pageColor}
      />
    </Box>
  );
}
