import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <h1>Taylors Alumni x Petronas White Flag Initiative</h1>
      <p style={{ width: "80%", margin: "0 auto" }}>
        As the situation of Covid-19 unfolds in Malaysia, Taylors Alumni have
        collaborated with Petronas to help those in need with donations of items
        to Petronas’ food banks. We are facing an unprecedented challenge and
        any form of item donations are welcomed to help those who are in need of
        support
      </p>
      <Link to="/form">
        <button style={{ marginTop: "16px" }}>Donate NOW!</button>
      </Link>
    </>
  );
}
