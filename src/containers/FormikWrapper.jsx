import React from "react";
import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

export default function FormikWrapper({ children }) {
  const history = useHistory();
  const initialFormData = {
    privacy: false,
    fullName: "",
    email: "",
    contribution: "",
    education: "",
    supportMessage: "",
    donorChoice: "",
  };

  const validationSchema = Yup.object({
    privacy: Yup.boolean().oneOf(
      [true],
      "Please agree with the statement above"
    ),
    fullName: Yup.string().required("Please fill in your full name"),
    email: Yup.string().email().required("Please fill in your email"),
    contribution: Yup.string().required("Please select your contribution"),
    education: Yup.string().required("Please select your education at Taylors"),
    supportMessage: Yup.string().required("Please write a support message"),
    donorChoice: Yup.string().required("Please choose a donor"),
  });

  const handleSubmit = async (values) => {
    const {
      fullName,
      email,
      contribution,
      education,
      supportMessage,
      donorChoice,
    } = values;

    const url =
      "https://sheet.best/api/sheets/6839cda2-8c56-4197-b427-b5d5e8e58404";

    await axios
      .post(url, {
        fullName,
        email,
        contribution,
        education,
        supportMessage,
        donorChoice,
      })
      .then((response) => console.log(response));

    console.log(values);

    history.push("/submission", { donorChoice });
  };

  return (
    <Formik
      initialValues={initialFormData}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>{children}</Form>
    </Formik>
  );
}
