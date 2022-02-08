import React from "react";
import { styled, Button } from "@material-ui/core";

const StyledButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontWeight: "bold",
    height: "3rem",
    width: "8rem",
    fontSize: "1.1rem",
  },
  fontWeight: "bold",
  height: "4rem",
  width: "12rem",
  fontSize: "1.5rem",
}));

const ButtonComponent = (props) => (
  <StyledButton
    variant="contained"
    disableElevation
    color="primary"
    onClick={props.onClick}
    href={props.href}
    size={props.isMobile ? "medium" : "large"}
  >
    {props.text}
  </StyledButton>
);

export default ButtonComponent;
