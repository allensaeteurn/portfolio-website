import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            align="left"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Allen Saeteurn
          </Typography>
          <Button
            /*component={Link} to="/home"*/ variant="outlined"
            color="inherit"
            sx={{ m: ".5rem" }}
          >
            Home
          </Button>
          <Button
            /*component={Link} to="/projects"*/ variant="outlined"
            color="inherit"
            sx={{ m: ".5rem" }}
          >
            Projects
          </Button>
          <Button
            /*component={Link} to="/contact"*/ variant="outlined"
            color="inherit"
            sx={{ m: ".5rem" }}
          >
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
