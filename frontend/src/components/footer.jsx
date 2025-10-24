import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    <Box
      component="footer"
      maxWidth="sm"
      minHeight="30vh"
      bgcolor={"primary.light"}
      sx={{ paddingY: 6, paddingX: 2 }}
      align={"center"}
      justifyContent={"center"}
    >
      <Stack direction={"row"} spacing={1} paddingBottom={4}>
        <Button href="#home" size="small" sx={{ fontSize: 12 }}>
          Home
        </Button>
        <Button href="#about" size="small" sx={{ fontSize: 12 }}>
          About
        </Button>
        <Button href="#services" size="small" sx={{ fontSize: 12 }}>
          Services
        </Button>
        <Button href="#products" size="small" sx={{ fontSize: 12 }}>
          Our Products
        </Button>
        <Button href="#contact" size="small" sx={{ fontSize: 12 }}>
          Contact
        </Button>
      </Stack>

      <Typography>Spark And Blush Cosmetology.</Typography>
      <Typography>
        Copyright &copy; {new Date().getFullYear()} All Rights Reserved.
      </Typography>
      <Typography>
        Developed by{" "}
        <Link
          href={"https://klenam-chris.vercel.app"}
          style={{
            color: "primary.main",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Klenam Chris.
        </Link>
      </Typography>
    </Box>
  );
}
