import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Home: NextPage = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-div">
          <Typography variant="h1" component="h2" className="hero-heading">
            You can afford <span className="hero-span"> anything</span>
          </Typography>

          <p className="hero-text">
            With CDcare marketplace, you can pay small-small at zero interest at
            normal market price.
          </p>
        </div>

        <div className="hero-image">
          <Image
            src="/hero-background.png"
            alt="Picture of cdcare logo"
            width={1016}
            height={557}
          />
        </div>

        <Button
          variant="contained"
          className="hero-button"
          endIcon={<ArrowForwardIcon />}
        >
          Shop online now
        </Button>

        <div className="hero-watsap">
          <Image
            src="/watsap.png"
            alt="Picture of cdcare logo"
            width={100}
            height={100}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
