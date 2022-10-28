import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import TitleComponent from "../components/TitleText";
import TextComponent from "../components/BodyText";
import ButtonComponent from "../components/Button";

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "4rem",
    },
    marginTop: "10rem",
  },
  leftTextContainer: {
    [theme.breakpoints.down("sm")]: {
      padding: "0rem 2rem",
      marginTop: "1rem",
    },
    marginTop: "3rem",
    paddingLeft: "6rem",
  },
  centerTextContainer: {
    [theme.breakpoints.down("sm")]: {
      padding: "0rem 2rem",
      marginTop: "1rem",
    },
    marginTop: "3rem",
  },
  buttonContainer: {
    textAlign: "center",
    marginTop: "3rem",
  },
  buttonText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "100px",
    },
    fontSize: "1rem",
  },
  linkText: { color: theme.palette.tertiary.main },
}));

export default function SubmissionPage() {
  const [contribution, setContribution] = useState(0);
  const { state } = useLocation();

  const classes = useStyles();

  useEffect(() => {
    const contributionOther = parseInt(state?.values?.contributionOther);
    setContribution(contributionOther);
  }, [state?.values?.contributionOther]);

  const FormIsSubmittedResponse = () => {
    return (
      <>
        <div className={classes.titleContainer}>
          <TitleComponent align="center" variant="h2">
            Thank You!
          </TitleComponent>
        </div>
        <div className={classes.centerTextContainer}>
          <TextComponent align="center" variant="h5">
            You will proceed to The Lost Food Project.
            <br />
            <br />
            Please select SINGLE GIFT for the donation.
            <br />
            <br /> Click below once you are ready!
          </TextComponent>
        </div>

        <div className={classes.buttonContainer}>
          <ButtonComponent
            href="https://donate.thelostfoodproject.org/ODP/Donate/DonateNow"
            fontSize="small"
            text={"The Lost Food Project"}
          />
        </div>
      </>
    );
  };

  const FormIsSubmittedResponseLessThan100Contribution = () => {
    return (
      <>
        <div className={classes.titleContainer}>
          <TitleComponent align="center" variant="h2">
            Thank You!
          </TitleComponent>
        </div>
        <div className={classes.leftTextContainer}>
          <TextComponent align="left" variant="h5">
            Please send your donation directly to the Lost Food Project!
            <br />
            <br />
          </TextComponent>
          <TextComponent align="left" variant="h6">
            Maybank
            <br />
            Account Name: The Lost Food Project
            <br />
            Account Number: 5148 9706 8927
          </TextComponent>
        </div>
      </>
    );
  };

  const FormNotSubmittedResponse = () => (
    <>
      <div className={classes.titleContainer}>
        <TitleComponent align="center" variant="h2">
          Oops!
        </TitleComponent>
      </div>
      <div className={classes.centerTextContainer}>
        <TextComponent align="center" variant="h5">
          Please submit the{" "}
          <Link to="/formOnline" className={classes.linkText}>
            form for donations
          </Link>{" "}
          first!
        </TextComponent>
      </div>
    </>
  );

  return (
    <>
      {state ? (
        contribution < 100 ? (
          <FormIsSubmittedResponseLessThan100Contribution />
        ) : (
          <FormIsSubmittedResponse />
        )
      ) : (
        <FormNotSubmittedResponse />
      )}
    </>
  );
}
