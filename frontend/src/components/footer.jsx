import { Box, Button, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="section"
      maxWidth="sm"
      minHeight="30vh"
      bgcolor={"primary.light"}
      sx={{ paddingY: 6, paddingX: 2 }}
      align={"center"}
      justifyContent={"center"}
    >
      <Stack direction={"row"} spacing={1} paddingBottom={4}>
        <Button size="small" sx={{ fontSize: 12 }}>
          Home
        </Button>
        <Button size="small" sx={{ fontSize: 12 }}>
          About
        </Button>
        <Button size="small" sx={{ fontSize: 12 }}>
          Services
        </Button>
        <Button size="small" sx={{ fontSize: 12 }}>
          Our Products
        </Button>
        <Button size="small" sx={{ fontSize: 12 }}>
          Contact
        </Button>
      </Stack>

      <Typography>Spark And Blush Cosmetology.</Typography>
      <Typography>
        Copyright &copy; {new Date().getFullYear()} All Rights Reserved.
      </Typography>
      <Typography>
        Developed by{" "}
        <span style={{ color: "primary." }}>Klenam Chris.</span>
      </Typography>
    </Box>
  );
}
