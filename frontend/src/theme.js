"use client";
import { Caladea } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const caladea = Caladea({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});
const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
    primary: {
      main: "#380b54",
      light: "#ffff",
    },
  },
  typography: {
    fontFamily: caladea.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: "info" },
              style: {
                backgroundColor: "#60a5fa",
              },
            },
          ],
        },
      },
    },
  },
});

export default theme;
