import globalStyles from "./global";

const styles = {
  title: {
    color: globalStyles.primaryColor,
    position: "relative",
    fontSize: "3rem",
    marginTop: "3rem",
    padding: "1rem",
  },

  titleMobile: {
    color: globalStyles.primaryColor,
    position: "relative",
    fontSize: "1.75rem",
    marginTop: "2rem",
  },

  description: {
    color: globalStyles.secondaryColorDark,
    width: "60%",
    fontSize: "1rem",
    fontWeight: "bold",
    margin: "2.5rem auto",
  },

  descriptionMobile: {
    color: globalStyles.secondaryColorDark,
    width: "80%",
    fontSize: "0.75rem",
    fontWeight: "bold",
    margin: "2rem auto",
  },

  button: {
    backgroundColor: globalStyles.tertiaryColor,
    color: "white",
    fontSize: "1.5rem",
    height: "5rem",
    width: "12rem",
    marginTop: "1.5rem",
    border: "none",
    borderRadius: "5px",
    cursor:"pointer",
  },

  buttonMobile: {
    backgroundColor: globalStyles.tertiaryColor,
    color: "white",
    fontSize: "1.1rem",
    height: "4rem",
    width: "8rem",
    marginTop: "1rem",
    border: "none",
    borderRadius: "5px",
  },

  buttonTextSpan: { fontSize: "1rem" },

  buttonTextSpanMobile: { fontSize: "0.8rem" },
};

export default styles;
