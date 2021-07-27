import React from "react";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
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
    case "input":
      return <Input {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "checkbox":
      return <CheckBox {...rest} />;
    default:
      return null;
  }
}

export default FormControl;
