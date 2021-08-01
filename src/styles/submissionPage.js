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
    color: globalStyles.primaryColor,
    fontSize: "4rem",
    marginTop: "3rem",
  },

  titleMobile: {
    color: globalStyles.primaryColor,
    position: "relative",
    marginTop: "2rem",
    fontSize: "1.75rem",
  },

  description: {
    color: globalStyles.secondaryColorDark,
    width: "60%",
    fontSize: "2rem",
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
};

export default styles;
