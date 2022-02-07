// use styled components for textfield
// access to theme
import { styled, TextField } from "@material-ui/core";

const MUITextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "mobile",
})(({ mobile, theme }) => ({
  "& .MuiFilledInput-underline": {
    "&:before": {
      borderColor: theme.palette.secondary.dark,
    },
  },
  "& .MuiFormLabel-root": {
    fontSize: mobile ? "3.75em" : "0.8em",
    color: theme.palette.secondary.dark,
  },
  "& .MuiFilledInput-input": {
    fontWeight: "bold",
    fontSize: mobile ? "0.75rem" : "0.9rem",
  },
  "& .MuiFormHelperText-root": {
    color: theme.palette.secondary.dark,
    "&.Mui-error": {
      color: theme.palette.error.dark,
      fontSize: mobile ? "0.6rem" : null,
    },
  },
}));

export { MUITextField };

// function MaterialTextField(props) {} to control API?

// export default MaterialTextField;
