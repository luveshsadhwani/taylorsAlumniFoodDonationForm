import React from "react";
import CheckBox from "./CheckBox";
import MaterialInput from "./MaterialInput";
import MaterialSelect from "./MaterialSelect";
import MaterialTextArea from "./MaterialTextArea";

function FormControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "material-input":
      return <MaterialInput {...rest} />;
    case "material-select":
      return <MaterialSelect {...rest} />;
    case "material-textarea":
      return <MaterialTextArea {...rest} />;
    case "checkbox":
      return <CheckBox {...rest} />;
    default:
      return null;
  }
}

export default FormControl;
