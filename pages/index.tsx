import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button, Typography,Grid,Container } from "@mui/material";
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

      <section className={styles.marketPlace }> 
      <div className={styles.marketHeading} > 
      <Button variant="outlined" className={styles.marketButton}>HOW THE MARKETPLACE WORKS</Button>
      </div>
      <p className={styles.content}>CDcare allows an instalmental payment plan for your preferred and in-demand gadgets and appliances. </p>
  
      <Grid container spacing={2}>

    <Grid item xs={5}>
    <Image
                src="/cdmobile.png"
                alt="Picture of cdcare logo"
                width={388}
                height={540}
              />
    </Grid>

    <Grid item xs={7}>
  <div className={styles.space} >
  <li className={styles.listHeading}> Spread your cost</li>
    <p className={styles.listText}>We help you to spread the cost into equal weekly
or monthly payments towards buying items over a given period of time.</p>
  </div>
  <div>
  <li className={styles.listHeading}> Mid-Payment Delivery</li>
    <p className={styles.listText}>Items are delivered before full payment in the middle of the installment period when
     half of the instalment amount has been paid.</p>
  </div>

  <div>
  <li className={styles.listHeading}> After-delivery Payment</li>
    <p className={styles.listText}>The installment payments continue after delivery until full payments are made.</p>
  </div>
    </Grid>

  </Grid>
  
      
  </section>
    </div>
  );
};

export default Home;
