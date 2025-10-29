"use client";

import * as React from "react";
import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Drawer,
  Typography,
  Stack,
} from "@mui/material";
import { CloseRounded } from "@mui/icons-material";

export default function CustomAppBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const mobileNavBar = (
    <Box
      role="presentation"
      onClick={toggleMobileMenu}
      color={"white"}
      maxWidth="100vw"
      height={"100vh"}
      bgcolor={"black"}
      padding={3}
    >
      <CloseRounded
        color="white"
        fontSize="large"
        onClick={toggleMobileMenu}
        sx={{ alignContent: "start", cursor: "pointer" }}
      />
      <Box
        display={"flex"}
        sx={{ justifyContent: "center", paddingY: 30, alignSelf: "justify" }}
      >
        <List>
          {["Home", "About", "Services", "Our Product", "Contact"].map(
            (menu) => (
              <ListItem key={menu} disablePadding>
                <ListItemButton>
                  <ListItemText primary={menu} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Box>
    </Box>
  );

  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            size="large"
            color="inherit"
            aria-label="menu"
            onClick={toggleMobileMenu}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center", fontSize: "1rem" }}
          >
            Spark and Blush Cosmetology
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="top" open={mobileMenuOpen} onClick={toggleMobileMenu}>
        {mobileNavBar}
      </Drawer>
    </Box>
  );
}
