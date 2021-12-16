import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import Link from "next/link";
import styles from './nav.module.css'

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar position="static" className={`${styles.backwhite} ${styles.appbar}`} >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <Image
                src="/logo.svg"
                alt="Picture of cdcare logo"
                width={174}
                height={40}
              />
            </Typography>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <Image
                src="/logo.svg"
                alt="Picture of cdcare logo"
                width={174}
                height={40}
              />
            </Typography>

            <Box sx={{ flexGrow: 0.01, display: { xs: "flex", md: "none" } }}>
              <Button variant="contained" className={styles.navButton}>
                Get the app
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0.01, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="default"
              >
                <MenuIcon className="black-color" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <div className={styles.navLinks}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link href="/">
                      <a>Shop now</a>
                    </Link>
                  </MenuItem>

                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link href="/about">
                      <a>About us</a>
                    </Link>
                  </MenuItem>

                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                  </MenuItem>

                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link href="/testimonial">
                      <a>Testimonials</a>
                    </Link>
                  </MenuItem>
                </div>
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <div className={styles.navLinks}>
                <Link href="/">
                  <a>Shop now</a>
                </Link>

                <Link href="/about">
                  <a>About us</a>
                </Link>

                <Link href="/contact">
                  <a>Contact</a>
                </Link>

                <Link href="/testimonial">
                  <a>Testimonials</a>
                </Link>
              </div>
            </Box>

            <Box sx={{ flexGrow: 0.01, display: { xs: "none", md: "flex" } }}>
              <Button variant="contained" className={styles.navButton}>
                Get the app
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

     
    </div>
  );
};

export default Navbar;
