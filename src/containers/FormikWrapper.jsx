import React from "react";
import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function FormikWrapper({ children }) {
  const history = useHistory();

  const initialFormData = {
    fullName: "",
    email: "",
    contribution: "rm10-49",
    education: "university",
    supportMessage: "",
    donorChoice: "donor1",
  };

  const handleSubmit = async (values) => {
    const donorChoice = values.donorChoice;
    const url =
      "https://sheet.best/api/sheets/6839cda2-8c56-4197-b427-b5d5e8e58404";
    await axios.post(url, values).then((response) => console.log(response));

    history.push("/submission", { donorChoice });
  };

  return (
    <Formik initialValues={initialFormData} onSubmit={handleSubmit}>
      <Form>{children}</Form>
    </Formik>
  );
}
