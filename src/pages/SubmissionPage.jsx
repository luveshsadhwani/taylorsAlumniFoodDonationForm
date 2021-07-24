import React, { useEffect } from "react";
import { useLocation } from "react-router";

export default function SubmissionPage() {
  const {
    state: { donorChoice },
  } = useLocation();
  console.log(donorChoice);

//   useEffect(() => {
//     const matchDonorToLink = () => {
//       if (donorChoice === "donor1") {
//         window.location.href = "https://www.google.com/";
//       }
//       if (donorChoice === "donor2") {
//         window.location.href = "https://www.youtube.com/";
//       }
//       if (donorChoice === "donor3") {
//         window.location.href = "https://www.facebook.com/";
//       }
//     };

//     setTimeout(matchDonorToLink, 2000);
//   }, []);

  return (
    <>
      <h1>Thank you for submitting!</h1>
      <p>You will be redirected to the donor of your choice!</p>
    </>
  );
}
