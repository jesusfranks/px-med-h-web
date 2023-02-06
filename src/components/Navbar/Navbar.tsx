import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import styles from "./styles/Navbar.module.scss";
import { Link } from "react-router-dom";
import SvgIcon from "../SvgIcon";

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  return (
    <div className={styles.navbar}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1 }}>
            Px Medical History
          </Typography>
          <IconButton color="inherit" component={Link} to="/settings">
            <SvgIcon iconName="settings" svgProp={{ width: 28, height: 28 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
