import React from "react";
import { styled, Typography } from "@material-ui/core";

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
}));

const TitleComponent = (props) => (
  <StyledTypography color="primary" variant={props.variant} align={props.align}>
    {props.children}
  </StyledTypography>
);

export default TitleComponent;
