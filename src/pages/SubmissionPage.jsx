import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import styles from "../styles/submissionPage";

export default function SubmissionPage() {
  const [contribution, setContribution] = useState(0);
  const isMobileScreen = useMediaQuery("(max-width: 1024px)");
  const { state } = useLocation();

  useEffect(() => {
    const contributionOther = parseInt(state?.values?.contributionOther);
    setContribution(contributionOther);
  }, [state?.values?.contributionOther]);

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

  const ResponsiveButton = () => {
    return isMobileScreen ? (
      <button style={styles.buttonMobile}>The Lost Food Project</button>
    ) : (
      <button style={styles.button}>The Lost Food Project</button>
    );
  };

  const FormIsSubmittedResponse = () => {
    return (
      <>
        <ResponsiveTitle>Thank you!</ResponsiveTitle>

        <ResponsiveText>
          You will proceed to The Lost Food Project. <br />
          <br />
          Please select SINGLE GIFT for the donation.
          <br />
          <br /> Click below once you are ready!
        </ResponsiveText>

        <a href="https://donate.thelostfoodproject.org/ODP/Donate/DonateNow">
          <ResponsiveButton />
        </a>
      </>
    );
  };

  const FormIsSubmittedResponseLessThan100Contribution = () => {
    return (
      <>
        <ResponsiveTitle>Thank you!</ResponsiveTitle>

        <ResponsiveText>
          Please send your donation directly to the Lost Food Project! <br />
          <br />
          Maybank
          <br />
          Account Name: The Lost Food Project
          <br />
          Account Number: 5148 9706 8927
        </ResponsiveText>
      </>
    );
  };

  const FormNotSubmittedResponse = () => (
    <>
      <ResponsiveTitle>Oops! </ResponsiveTitle>
      <ResponsiveText>
        Please submit the{" "}
        <Link to="/formOnline" style={styles.link}>
          form for donations
        </Link>{" "}
        first!
      </ResponsiveText>
    </>
  );

  return (
    <div style={styles.container}>
      {state ? (
        contribution < 100 ? (
          <FormIsSubmittedResponseLessThan100Contribution />
        ) : (
          <FormIsSubmittedResponse />
        )
      ) : (
        <FormNotSubmittedResponse />
      )}
    </div>
  );
}
