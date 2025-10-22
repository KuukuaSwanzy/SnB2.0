"use client";

import DetailStack from "@/components/customDetailStack";
import { Phone } from "@mui/icons-material";
import { MailOutlineRounded } from "@mui/icons-material";
import { QueryBuilderRounded } from "@mui/icons-material";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Box
      component="section"
      maxWidth="sm"
      minHeight="70vh"
      bgcolor={"primary.main"}
      sx={{ paddingY: 6 }}
      align={"center"}
      padding={2}
    >
      <DetailStack
        title={"Contact"}
        textTransform={"uppercase"}
        color={"primary.light"}
        textColor={"primary.light"}
      />
      <TextField
        placeholder="Name"
        fullWidth
        margin="normal"
        sx={{ backgroundColor: "primary.light", borderRadius: 1 }}
      />
      <TextField
        placeholder="Phone"
        fullWidth
        margin="normal"
        sx={{ backgroundColor: "primary.light", borderRadius: 1 }}
      />
      <TextField
        placeholder="Email Address"
        fullWidth
        margin="normal"
        sx={{ backgroundColor: "primary.light", borderRadius: 1 }}
      />
      <TextField
        placeholder="Message"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        sx={{ backgroundColor: "primary.light", borderRadius: 1 }}
      />

      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "primary.light",
          color: "primary.main",
          borderRadius: 0.5,
          marginTop: 2,
        }}
      >
        Contact Us
      </Button>

      <Stack spacing={0.5} marginTop={2} color={"primary.light"}>
        <Typography>2 Mo Street, Community 22, Tema</Typography>
        <Typography sx={{ paddingBottom: 3 }}>P.O Box Ds 2187</Typography>
        <Typography
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Phone fontSize="" sx={{ marginRight: 0.5 }} />
          <a
            href="tel:+233-5455-41014"
            style={{ textDecoration: "none", color: "white", marginRight: 3 }}
          >
            +233-5455-41014
          </a>{" "}
          - Spark And Blush
        </Typography>
        <Typography
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <MailOutlineRounded fontSize="" sx={{ marginRight: 0.5 }} />{" "}
          nhyiraswanzy11@gmail.com
        </Typography>
        <Typography
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <QueryBuilderRounded
            fontSize="small"
            sx={{
              paddingRight: 0.5,
              marginRight: 0.5,
              transform: "scaleX(-1)",
            }}
          />
          Mon-Sat - 08:00-19:00
        </Typography>
      </Stack>
    </Box>
  );
}
