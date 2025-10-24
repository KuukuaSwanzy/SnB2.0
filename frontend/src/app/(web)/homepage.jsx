import DetailStack from "@/components/customDetailStack";
import { Box } from "@mui/material";

const pageTitle = "Welcome to Spark And Blush Cosmetology";
const pageDescription = `"Alchemy of Beauty, Artistry of You"`;
const pageColor = "primary.main";

export default function Homepage() {
  return (
    <Box
      component="section"
      id="home"
      className="home"
      maxWidth="sm"
      height="50vh"
      sx={{
        background: `
        linear-gradient(to right, rgba(255,255,255,10), rgba(255,255,255,0.6)),
        url("frontpage_picture.webp")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
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
