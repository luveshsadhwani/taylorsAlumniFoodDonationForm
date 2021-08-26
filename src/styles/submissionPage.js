import globalStyles from "./global";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignitems: "center",
    flexDirection: "column",
    height: "100%",
  },

  title: {
    color: globalStyles.secondaryColorDark,
    fontSize: "4rem",
    marginTop: "3rem",
  },

  titleMobile: {
    color: globalStyles.secondaryColorDark,
    position: "relative",
    marginTop: "2rem",
    fontSize: "1.75rem",
  },

  description: {
    color: globalStyles.secondaryColorDark,
    width: "70%",
    fontSize: "1.3rem",
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

  link: {
    color: globalStyles.tertiaryColor,
    display: "inline-block",
  },

  button: {
    backgroundColor: globalStyles.tertiaryColor,
    color: "white",
    fontSize: "1.3rem",
    height: "5rem",
    width: "12rem",
    marginTop: "1.5rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
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
};

export default styles;
