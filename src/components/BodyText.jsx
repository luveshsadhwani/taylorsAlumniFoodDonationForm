import React from "react";
import { styled, Typography } from "@material-ui/core";

const StyledTypography = styled(Typography)(({ theme }) => ({}));

const TextComponent = (props) => (
  <StyledTypography
    color={props.color || "secondary"}
    variant={props.variant}
    align={props.align}
    display={props.display}
    htmlFor={props.htmlFor}
  >
    {props.children}
  </StyledTypography>
);

export default TextComponent;
