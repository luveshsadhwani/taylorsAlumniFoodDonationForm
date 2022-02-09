import React from "react";
import { styled, Typography } from "@material-ui/core";

const StyledErrorText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
}));

const ErrorTextComponent = (props) => (
  <StyledErrorText color="error" variant={props.variant} align={props.align}>
    {props.children}
  </StyledErrorText>
);

export default ErrorTextComponent;
