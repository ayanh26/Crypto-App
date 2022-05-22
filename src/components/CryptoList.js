import React from "react";
import Crypto from "./Crypto";
import { Container } from "react-bootstrap";
const CryptoList = ({ data }) => {
  return (
    <div style={{ paddingTop: "3rem" }}>
      {data.map((item) => (
        <Crypto data={item} />
      ))}
    </div>
  );
};

export default CryptoList;
