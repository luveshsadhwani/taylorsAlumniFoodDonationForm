import React from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core";
import styles from "../styles/landingPage";

const useStyles = makeStyles((theme) => ({
  bodyText: {
    color: theme.palette.secondary.dark,
  },
  button: {
    backgroundColor: theme.palette.tertiary.main,
    color: "white",
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  const isMobileScreen = useMediaQuery("(max-width: 1024px)");
  const isSmallMobileScreen = useMediaQuery("(max-width: 400px)");

  const ResponsiveTitle = ({ children }) => {
    return isMobileScreen ? (
      <h1 style={styles.titleMobile}>{children}</h1>
    ) : (
      <h1 style={styles.title}>{children}</h1>
    );
  };

  const ResponsiveText = ({ children }) => {
    return isMobileScreen ? (
      <p style={styles.descriptionMobile} className={classes.bodyText}>
        {children}
      </p>
    ) : (
      <p style={styles.description} className={classes.bodyText}>
        {children}
      </p>
    );
  };

  const ResponsiveButton = () => {
    return isMobileScreen ? (
      <button style={styles.buttonMobile} className={classes.button}>
        <strong>
          Donate <br />
          Now!
        </strong>
      </button>
    ) : (
      <button style={styles.button} className={classes.button}>
        <strong>
          Donate <br />
          Now!
        </strong>
      </button>
    );
  };

  return (
    <>
      <ResponsiveTitle>
        <img
          src={`${process.env.PUBLIC_URL}/img/title-banner-cropped.jpg`}
          style={{ width: "80%" }}
          alt="donating food to those who need it"
        />
      </ResponsiveTitle>
      <ResponsiveText>
        As the situation of Covid-19 unfolds in Malaysia, Taylors Alumni have
        collaborated with The Lost Food Project to help those in need with
        donations to their food banks. We are facing an unprecedented challenge
        and any form of item donations are welcomed to help those who are in
        need of support.
      </ResponsiveText>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: isSmallMobileScreen ? "0rem 1rem" : "0rem 3rem",
        }}
      >
        <Link to="/formOnline">
          <ResponsiveButton />
        </Link>
      </div>
    </>
  );
}
