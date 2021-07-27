import React from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function LandingPage() {
  const styles = {
    title: {
      position: "relative",
      color: "#02704A",
      marginTop: "3rem",
      fontSize: "4rem",
    },

    titleMobile: {
      position: "relative",
      color: "#02704A",
      marginTop: "2rem",
      fontSize: "1.75rem",
    },

    description: {
      width: "60%",
      margin: "2.5rem auto",
      fontSize: "1.25rem",
      color: "#D66A0C",
    },

    descriptionMobile: {
      width: "80%",
      margin: "2rem auto",
      fontSize: "0.75rem",
      color: "#D66A0C",
      fontWeight: "bold",
    },

    button: {
      width: "18rem",
      height: "5rem",
      backgroundColor: "#3B37B8",
      color: "white",
      fontSize: "2rem",
      marginTop: "1.5rem",
      border: "none",
      borderRadius: "5px",
    },

    buttonMobile: {
      width: "10rem",
      height: "4rem",
      backgroundColor: "#3B37B8",
      color: "white",
      fontSize: "1.25rem",
      marginTop: "1rem",
      border: "none",
      borderRadius: "5px",
    },
  };

  const ResponsiveTitle = ({ children }) => {
    const isMobileScreen = useMediaQuery("(max-width: 600px)");

    return isMobileScreen ? (
      <h1 style={styles.titleMobile}>{children}</h1>
    ) : (
      <h1 style={styles.title}>{children}</h1>
    );
  };

  const ResponsiveText = ({ children }) => {
    const isMobileScreen = useMediaQuery("(max-width: 600px)");

    return isMobileScreen ? (
      <p style={styles.descriptionMobile}>{children}</p>
    ) : (
      <p style={styles.description}>{children}</p>
    );
  };

  const ResponsiveButton = ({ children }) => {
    const isMobileScreen = useMediaQuery("(max-width: 600px)");

    return isMobileScreen ? (
      <button style={styles.buttonMobile}>{children}</button>
    ) : (
      <button style={styles.button}>{children}</button>
    );
  };

  return (
    <>
      <ResponsiveTitle>
        Taylors Alumni <br />
        White Flag Initiative
      </ResponsiveTitle>
      <ResponsiveText>
        As the situation of Covid-19 unfolds in Malaysia, Taylors Alumni have
        collaborated with Petronas to help those in need with donations of items
        to Petronas’ food banks. We are facing an unprecedented challenge and
        any form of item donations are welcomed to help those who are in need of
        support
      </ResponsiveText>
      <Link to="/form">
        <ResponsiveButton>Donate NOW!</ResponsiveButton>
      </Link>
    </>
  );
}
