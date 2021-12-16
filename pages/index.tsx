import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <section className={styles.heroSection }>
        <div className={styles.heroDiv }>
          <Typography variant="h1" component="h2" className={styles.heroHeading}>
            You can afford <span className={styles.heroSpan}> anything</span>
          </Typography>

          <p className={styles.heroText}>
            With CDcare marketplace, you can pay small-small at zero interest at
            normal market price.
          </p>
        </div>

        <div className={styles.heroImage}>
          <Image
            src="/hero-background.png"
            alt="Picture of cdcare logo"
            width={1016}
            height={557}
          />
        </div>

        <Button
          variant="contained"
          className={styles.heroButton}
          endIcon={<ArrowForwardIcon />}
        >
          Shop online now
        </Button>

        <div className={styles.heroWatsap}>
          <Image
            src="/watsap.png"
            alt="Picture of cdcare logo"
            width={100}
            height={100}
          />
        </div>
      </section>


<section className="marketPlace">

</section>
      
    </div>
  );
};

export default Home;
