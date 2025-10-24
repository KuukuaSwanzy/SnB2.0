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
  Typography,
} from "@mui/material";

export default function CustomAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const mobileNavBar = (
    <Box sx={{ width: "250" }}>
      <List>
        {["Home", "About", "Services", "Product", "Contact"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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
            onClick={toggleDrawer(true)}
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
    </Box>
  );
}
