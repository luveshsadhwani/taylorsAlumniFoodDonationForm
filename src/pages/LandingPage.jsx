import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const styles = {
    title: {
      position: "relative",
      color: "#038C7F",
      marginTop: "3rem",
      fontSize: "5rem",
      WebkitTextStrokeWidth: "1px",
      WebkitTextStrokeColor: "white",
    },

    description: {
      width: "60%",
      margin: "2.5rem auto",
      fontSize: "1.5rem",
      color: "white",
      fontWeight: "bold",
    },

    button: {
      width: "18rem",
      height: "5rem",
      backgroundColor: "#4146A6",
      color: "white",
      fontSize: "2rem",
      marginTop: "1.5rem",
      border: "none",
    },
  };

  return (
    <>
      <h1 style={styles.title}>
        Taylors Alumni <br />
        White Flag Initiative
      </h1>
      <p style={styles.description}>
        As the situation of Covid-19 unfolds in Malaysia, Taylors Alumni have
        collaborated with Petronas to help those in need with donations of items
        to Petronas’ food banks. We are facing an unprecedented challenge and
        any form of item donations are welcomed to help those who are in need of
        support
      </p>
      <Link to="/form">
        <button style={styles.button}>Donate NOW!</button>
      </Link>
    </>
  );
}
