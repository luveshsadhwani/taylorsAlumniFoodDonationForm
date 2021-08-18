import React from "react";

import { Modal, Backdrop } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import { useStyles } from "../styles/form/form";
import FormControl from "./FormControl";

export default function MaterialModal({ isVisible, setIsVisible, isMobileScreen }) {
  const { modalPosition, modalPaper, modalText } = useStyles();

  const TextWrapper = ({ children }) => (
    <h5 className={modalText}>{children}</h5>
  );
  return (
    <Modal
      open={isVisible}
      onClose={() => {
        setIsVisible(false);
      }}
      BackdropComponent={Backdrop}
      className={modalPosition}
    >
      <Fade in={isVisible}>
        <div className={modalPaper}>
          <TextWrapper>
            By submitting this Form, you hereby agree that Taylor’s Alumni
            Office may collect, obtain, store and process your personal data
            that you provide in this form for the purpose of receiving updates,
            news, promotional and marketing mails or materials from Taylor’s
            Alumni Office.
          </TextWrapper>
          <br />
          <TextWrapper>
            You hereby give your consent to Taylor’s Alumni Office to:
          </TextWrapper>
          <br />
          <TextWrapper>
            a) Store and process your Personal Data - This information obtained
            from the form, will be stored in our alumni database which will be
            used for future communications to alumni.
          </TextWrapper>
          <br />
          <TextWrapper>
            b) Disclose your Personal Data to the relevant governmental
            authorities, companies within the Taylor’s Education Group within or
            outside Malaysia or third parties where required by law or for legal
            purposes and outsourcing services.
          </TextWrapper>
          <br />
          <TextWrapper>
            c) Disclose your Personal Data to third parties appointed by
            Taylor’s Alumni Office to provide services, such as but not limited
            to auditors, legal representatives, contractors, printing companies,
            data processors, technology providers (to support the development,
            implementation and maintenance of the online /virtual environment)
            and insurance companies;
          </TextWrapper>
          <br />
          <TextWrapper>
            In addition, your personal data may be transferred to any company
            within Taylor’s University/Taylor’s Education Group within or
            outside Malaysia. For the purpose of updating or correcting such
            data, you may at any time apply to the Taylor’s Alumni Office to
            have access to your personal data which are stored by Taylor’s
            Alumni Office.
          </TextWrapper>
          <br />
          <TextWrapper>
            For the avoidance of doubt, Personal Data includes all data defined
            within the Personal Data Protection Act 2010 including all data you
            had disclosed to Taylor’s Alumni Office in this Form.
          </TextWrapper>
          <br />
          <FormControl control="checkbox" name="privacy">
            <strong>I hereby understand and agree/consent to above terms on the
            collection, retention and processing of my personal data.</strong>
          </FormControl>
        </div>
      </Fade>
    </Modal>
  );
}
