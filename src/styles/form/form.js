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
      borderColor: `${globalStyles.primaryColor}`,
    },
  },

  inputTextRoot: {
    color: globalStyles.primaryColor,
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
    // "&.Mui-error": {
    //   color: globalStyles.errorTextColor,
    // },
  },

  helperTextMobile: {
    "&.Mui-error": {
      fontSize: "0.6rem",
    },
  },

  selectIcon: {
      color: globalStyles.secondaryColorDark
  } 
});

export { useStyles };
