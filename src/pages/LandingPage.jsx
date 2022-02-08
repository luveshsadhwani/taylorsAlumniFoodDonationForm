import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import ButtonComponent from "../components/Button";
import TextComponent from "../components/BodyText";

const useStyles = makeStyles((theme) => ({
  bodyText: {
    color: theme.palette.secondary.dark,
  },
  titleContainer: {
    [theme.breakpoints.down("xl")]: {
      marginTop: "3rem",
      padding: "0rem 7rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "1rem",
      padding: "0rem 3rem",
    },
    "& img": {
      width: "100%",
    },
  },
  textContainer: {
    [theme.breakpoints.down("sm")]: {
      padding: "0rem 3rem",
      marginTop: "1rem",
    },
    marginTop: "3rem",
    padding: "0rem 7rem",
  },
  buttonContainer: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "1rem",
    },
    marginTop: "3rem",
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <div className={classes.titleContainer}>
        <img
          src={`${process.env.PUBLIC_URL}/img/title-banner-cropped.jpg`}
          alt="donating food to those who need it"
        />
      </div>
      <div className={classes.textContainer}>
        <TextComponent align="center">
          As the situation of Covid-19 unfolds in Malaysia, Taylors Alumni have
          collaborated with The Lost Food Project to help those in need with
          donations to their food banks. We are facing an unprecedented
          challenge and any form of item donations are welcomed to help those
          who are in need of support.
        </TextComponent>
      </div>
      <div className={classes.buttonContainer}>
        <ButtonComponent
          text="Donate"
          onClick={() => history.push("/formOnline")}
        />
      </div>
    </>
  );
}
