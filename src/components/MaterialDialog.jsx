import React from "react";
import { Dialog } from "@material-ui/core";
import { styled } from "@material-ui/core";

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    padding: theme.spacing(2),
  },
}));

function MaterialDialog({ onClose, open, children }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <StyledDialog onClose={handleClose} open={open}>
      {children}
    </StyledDialog>
  );
}

export default MaterialDialog;
