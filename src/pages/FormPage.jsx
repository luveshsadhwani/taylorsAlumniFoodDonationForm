import React from "react";
import { Field, useField } from "formik";
import FormikWrapper from "../containers/FormikWrapper";

export default function FormPage() {
  const FieldContainer = ({ children, marginTop = 16 }) => {
    const getStyle = () => {
      return { marginTop };
    };
    return <div style={getStyle()}>{children}</div>;
  };

  const TextField = ({ children, label, ...props }) => {
    const [field] = useField(props);
    return (
      <FieldContainer>
        {label && (
          <>
            <label htmlFor={field.name}>{label}</label>
            <br />
          </>
        )}
        <Field type="text" name={field.name} {...props} />
        {children}
      </FieldContainer>
    );
  };

  const TextAreaField = ({ label, ...props }) => {
    const [field] = useField(props);
    return (
      <FieldContainer>
        <label htmlFor={field.name}>{label}</label>
        <br />
        <Field as="textarea" id={field.name} cols="50" rows="10" {...props} />
      </FieldContainer>
    );
  };

  const CheckBoxField = ({ label, children, ...props }) => {
    const [field] = useField(props);
    return (
      <FieldContainer>
        <Field type="checkbox" id={field.name} name={field.name} />
        <label htmlFor={field.name}>{label}</label>
        <br />
        <p>{children}</p>
      </FieldContainer>
    );
  };

  const RadioField = ({ fieldProp, children, value, ...props }) => {
    const [field] = useField(props);
    return (
      <FieldContainer marginTop={8}>
        <input type="radio" id={field.name} name={field.name} value={value} />
        <label htmlFor={fieldProp}>{children}</label>
      </FieldContainer>
    );
  };

  return (
    <>
      <div style={{ margin: 16 }}>
        <h1>Please fill in the form</h1>
        <FormikWrapper>
          <h4 style={{ margin: 4 }}>Privacy Consent</h4>
          <CheckBoxField
            name="privacy"
            label="I authorize my information to be used by Taylors Alumni for recording,
          receiving emails and on social media"
          ></CheckBoxField>
          <TextField name="fullName" label="Full Name" />
          <TextField name="email" label="Email" />
          <h4 style={{ margin: 16 }}>Contribution</h4>
          <Field as="select" name="contribution">
            <option value="rm10-49">RM 10 - 49</option>
            <option value="rm50-99">RM 50 - 99</option>
            <option value="rm100-149">RM 100 - 149</option>
            <option value="rm150+">RM 150 and above</option>
          </Field>
          {/* <RadioField fieldProp="contribution" value="rm10-49">
            RM 10 - 49
          </RadioField>
          <RadioField fieldProp="contribution" value="rm50-99">
            RM 50 - 99
          </RadioField>
          <RadioField fieldProp="contribution" value="rm100-149">
            RM 100 - 149
          </RadioField>
          <RadioField fieldProp="contribution" value="rm150+">
            RM 150 and above
          </RadioField> */}
          <h4 style={{ margin: 16 }}>Education at Taylors</h4>
          <Field as="select" name="education">
            <option value="university">Taylor's University</option>
            <option value="college">Taylor's College</option>
            <option value="rm100-149">Other</option>
          </Field>
          {/* <RadioField fieldProp="education" value="university">
            Taylor's University
          </RadioField>
          <RadioField fieldProp="education" value="college">
            Taylor's College
          </RadioField>
          <RadioField fieldProp="education" value="other">
            Other
            <TextField fieldProp="educationOther" />
          </RadioField> */}
          <TextAreaField label="Message of Support" name="supportMessage" />
          <h4 style={{ margin: 16 }}>Choice of Donor</h4>
          <Field as="select" name="donorChoice">
            <option value="donor1">Donor 1 - Google.com</option>
            <option value="donor2">Donor 2 - Youtube.com</option>
            <option value="donor3">Donor 3 - Facebook.com</option>
          </Field>
          {/* <RadioField fieldProp="donorChoice" value="donor1">
            Donor 1
          </RadioField>
          <RadioField fieldProp="donorChoice" value="donor2">
            Donor 2
          </RadioField>
          <RadioField fieldProp="donorChoice" value="donor3">
            Donor 3
          </RadioField> */}
          <div style={{ marginTop: 16 }}>
            <button type="submit">SUBMIT!</button>
          </div>
        </FormikWrapper>
      </div>
    </>
  );
}
