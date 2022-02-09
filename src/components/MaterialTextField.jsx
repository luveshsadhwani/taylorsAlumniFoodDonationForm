import { styled, TextField } from "@material-ui/core";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiFormLabel-root": {
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.75rem",
    },
    fontSize: "1rem",
  },
  "& .MuiFilledInput-input": {
    fontWeight: "bold",
    fontSize: "1rem",
  },
  "& .MuiFormHelperText-root": {
    color: theme.palette.secondary.main,
    "&.Mui-error": {
      color: theme.palette.error.main,
    },
  },
}));

const TextFieldComponent = (props) => {
  const { ...field } = props;
  return (
    <StyledTextField
      {...field}
      label={props.label}
      helperText={props.helperText}
      name={props.name}
      error={props.error}
      color="primary"
      align={props.align}
      variant="filled"
      fullWidth
      multiline={props.multiline}
      margin={props.margin}
      minRows={props.minRows}
      select={props.select}
    >
      {props.children}
    </StyledTextField>
  );
};
export default TextFieldComponent;
