import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function SubmissionPage() {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignitems: "center",
      flexDirection: "column",
      height: "100%",
    },

    title: {
      color: "#038C7F",
      fontSize: "4rem",
      WebkitTextStrokeWidth: "1px",
      WebkitTextStrokeColor: "white",
    },

    description: {
      width: "60%",
      margin: "2.5rem auto",
      fontSize: "2rem",
      color: "white",
      fontWeight: "bold",
    },

    link: {
      color: "#4146A6",
      WebkitTextStrokeWidth: "1px",
      WebkitTextStrokeColor: "white",
    },
  };

  const { state } = useLocation();

  const FormIsSubmittedResponse = () => (
    <>
      <h1 style={styles.title}>Thank you for submitting!</h1>
      <p style={styles.description}>
        You will be redirected to the donor of your choice!
      </p>
    </>
  );

  const FormNotSubmittedResponse = () => (
    <>
      <h1 style={styles.title}>
        Oops! <br />
        Please submit the{" "}
        <Link to="/form" style={styles.link}>
          form
        </Link>{" "}
        first!
      </h1>
    </>
  );

  useEffect(() => {
    if (state) {
      const { donorChoice } = state;
      const matchDonorToLink = () => {
        if (donorChoice === "donor1") {
          window.location.href = "https://www.google.com/";
        }
        if (donorChoice === "donor2") {
          window.location.href = "https://www.youtube.com/";
        }
        if (donorChoice === "donor3") {
          window.location.href = "https://www.facebook.com/";
        }
      };

      setTimeout(matchDonorToLink, 2000);
    }
  }, []);

  return (
    <div style={styles.container}>
      {state ? <FormIsSubmittedResponse /> : <FormNotSubmittedResponse />}
    </div>
  );
}
