import { makeStyles } from "@material-ui/core/styles";
import globalStyles from "../global";

const useStyles = makeStyles({
  formElementLabelMuiRoot: {
    color: globalStyles.secondaryColorDark,
    // fontWeight: "bolder",
    "&.Mui-focused": {
      color: globalStyles.secondaryColorDark,
    },
    "&.Mui-error": {
      color: globalStyles.secondaryColorDark,
    },
  },

  formElementLabelMui: {
    fontSize: "0.8em",
  },

  formElementLabelMuiMobile: {
    fontSize: "0.75em",
  },

  notchedOutline: {
    borderWidth: "2px",
    borderColor: `${globalStyles.secondaryColorDark}`,
  },

  cssFocused: {},

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `${globalStyles.tertiaryColor}`,
    },
  },

  inputTextRoot: {
    color: globalStyles.secondaryColorDark,
    // padding: "10px"
  },

  inputText: {
    fontSize: "0.9rem",
  },

  inputTextMobile: {
    fontSize: "0.75rem",
  },

  helperTextRoot: {
    color: "black",
    "&.Mui-error": {
      color: globalStyles.errorTextColor,
    },
  },

  helperTextMobile: {
    "&.Mui-error": {
      fontSize: "0.6rem",
    },
  },

  selectIcon: {
    color: globalStyles.secondaryColorDark,
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
    height: "60vh"
  },

  modalText: {
    fontWeight: "normal",
    fontStyle: "italic",
  },
});

export { useStyles };
