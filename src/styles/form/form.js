import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
