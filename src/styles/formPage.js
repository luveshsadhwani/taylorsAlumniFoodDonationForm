import globalStyles from "./global";

const styles = {
  title: {
    color: globalStyles.primaryColor,
    position: "relative",
    fontSize: "2rem",
    marginTop: "2rem",
    paddingLeft: "4rem",
    textAlign: "left",
  },

  titleMobile: {
    color: globalStyles.primaryColor,
    position: "relative",
    fontSize: "1.5rem",
    marginTop: "1rem",
  },

  privacyLabel: {
    color: globalStyles.secondaryColorDark,
    display: "block",
    margin: "20px 0px 8px 0px",
    fontSize: "1em",
    fontWeight: "bolder",
  },

  privacyLabelMobile: {
    display: "block",
    color: globalStyles.secondaryColorDark,
    margin: "10px 0px 8px 0px",
    fontSize: "1em",
    fontWeight: "bolder",
  },

  privacyDescription: {
    color: globalStyles.primaryColor,
    fontSize: "0.9rem",
    fontWeight: "500",
    marginLeft: 8,
  },

  privacyDescriptionMobile: {
    color: globalStyles.primaryColor,
    fontSize: "0.75rem",
    fontWeight: "500",
    marginLeft: 8,
  },

  button: {
    width: "10.5rem",
    height: "3rem",
    backgroundColor: globalStyles.tertiaryColor,
    color: "white",
    fontSize: "1.5rem",
    marginTop: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor:"pointer",
  },

  buttonMobile: {
    width: "7rem",
    height: "2rem",
    backgroundColor: globalStyles.tertiaryColor,
    color: "white",
    fontSize: "1rem",
    marginTop: "0.5rem",
    border: "none",
    borderRadius: "5px",
  },

  formInput: {
    width: 200,
    height: 25,
    fontSize: "1rem",
  },

  formInputMui: {
    backgroundColor: "#02704A",
  },

  formSelect: {
    width: 200,
    fontSize: "1rem",
  },

  formTextArea: {
    fontSize: "1.1rem",
  },

  leftAlignError: {
    width: "300px",
    color: "#FF5151",
    position: "absolute",
    fontWeight: "bold",
    margin: "0 auto",
    textAlign: "left",
  },

  centerAlignError: {
    color: "#f44336",
    fontFamily: "Helvetica",
    position: "relative",
    margin: "3px 14px 0px 14px",
    fontSize: "0.75rem",
  },

  centerAlignErrorMobile: {
    color: "#f44336",
    fontFamily: "Helvetica",
    position: "relative",
    margin: "3px 14px 0px 14px",
    fontSize: "0.6rem",
  },
};

export default styles;
