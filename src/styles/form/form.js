import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formElementLabelMuiRoot: {
    color: theme.palette.secondary.dark,
    // fontWeight: "bolder",
    "&.Mui-focused": {
      color: theme.palette.secondary.main,
    },
    "&.Mui-error": {
      color: theme.palette.error.dark,
    },
  },

  formElementLabelMui: {
    fontSize: "0.8em",
  },

  formElementLabelMuiMobile: {
    fontSize: "0.75em",
  },

  cssFocused: {},

  cssOutlinedInput: {
    "&.MuiFilledInput-underline:before": {
      borderColor: theme.palette.secondary.main,
    },
  },

  inputTextRoot: {
    color: theme.palette.secondary.dark,
    fontWeight: "bold",
    // padding: "10px"
  },

  inputText: {
    fontSize: "0.9rem",
  },

  inputTextMobile: {
    fontSize: "0.75rem",
  },

  helperTextRoot: {
    color: theme.palette.secondary.dark,
    "&.Mui-error": {
      color: theme.palette.error.main,
    },
  },

  helperTextMobile: {
    "&.Mui-error": {
      fontSize: "0.6rem",
    },
  },

  selectIcon: {
    color: theme.palette.secondary.dark,
  },

  modalPosition: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  modalPaper: {
    width: "70%",
    backgroundColor: "white",
    padding: "2rem",
    "&:focus": {
      outline: "none",
    },
    overflow: "scroll",
    height: "60vh",
  },

  modalText: {
    fontWeight: "normal",
    fontStyle: "italic",
  },
}));

export { useStyles };
