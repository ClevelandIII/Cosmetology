import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const CardExampleCard = () => (
  <div
    style={{
      margin: "0",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
    }}
  >
    <h1>404 Page Not Found</h1>
    <p>
      This page doesn't exist. Try re-entering the page, or using the navbar,
      which has all the pages.
    </p>
  </div>
);

export default CardExampleCard;
