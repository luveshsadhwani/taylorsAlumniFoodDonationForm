import React from "react";
import { styled, Typography } from "@material-ui/core";

const StyledTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
  fontSize: "1.25rem",
}));

const TextComponent = (props) => (
  <StyledTypography color="secondary" align={props.align}>
    {props.children}
  </StyledTypography>
);

export default TextComponent;
