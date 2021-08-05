import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import styles from "../styles/submissionPage";

export default function SubmissionPage() {
  const isMobileScreen = useMediaQuery("(max-width: 1024px)");
  const { state } = useLocation();

  const ResponsiveTitle = ({ children }) => {
    return isMobileScreen ? (
      <h1 style={styles.titleMobile}>{children}</h1>
    ) : (
      <h1 style={styles.title}>{children}</h1>
    );
  };

  const ResponsiveText = ({ children }) => {
    return isMobileScreen ? (
      <p style={styles.descriptionMobile}>{children}</p>
    ) : (
      <p style={styles.description}>{children}</p>
    );
  };

  const FormIsSubmittedResponse = () => {
    if (!state) return;
    const { campaign } = state;
    const submissionResponse =
      campaign === "online"
        ? "You will be redirected to the petronas online food bank!"
        : "You can proceed with your donation at the food bank!";
    return (
      <>
        <ResponsiveTitle>Thank you!</ResponsiveTitle>

        <ResponsiveText>{submissionResponse}</ResponsiveText>
      </>
    );
  };

  const FormNotSubmittedResponse = () => (
    <>
      <ResponsiveTitle>Oops! </ResponsiveTitle>
      <ResponsiveText>
        Please submit the form for{" "}
        <Link to="/formOnline" style={styles.link}>
          online donations
        </Link>{" "}
        or{" "}
        <Link to="/formFoodBank" style={styles.link}>
          donations at the food bank
        </Link>{" "}
        first!
      </ResponsiveText>
    </>
  );

  useEffect(() => {
    if (state) {
      const { campaign } = state;
      const matchDonorToLink = () => {
        if (campaign === "online") {
          window.location.href = "https://www.google.com/";
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
