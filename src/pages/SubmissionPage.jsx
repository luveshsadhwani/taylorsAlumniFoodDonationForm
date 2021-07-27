import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
      color: "#02704A",
      fontSize: "4rem",
      marginTop: "3rem",
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
      fontSize: "2rem",
      color: "#D66A0C",
      fontWeight: "bold",
    },

    descriptionMobile: {
      width: "80%",
      margin: "2rem auto",
      fontSize: "0.75rem",
      color: "#D66A0C",
      fontWeight: "bold",
    },

    link: {
      display: "inline-block",
      color: "#3B37B8",
    },
  };

  const { state } = useLocation();

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

  const FormIsSubmittedResponse = () => (
    <>
      <ResponsiveTitle>Thank you for submitting!</ResponsiveTitle>
      <ResponsiveText>
        You will be redirected to the donor of your choice!
      </ResponsiveText>
    </>
  );

  const FormNotSubmittedResponse = () => (
    <>
      <ResponsiveTitle>Oops! </ResponsiveTitle>
      <ResponsiveText>
        Please submit the{" "}
        <Link to="/form" style={styles.link}>
          form
        </Link>{" "}
        first!
      </ResponsiveText>
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
