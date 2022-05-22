import React from "react";
import Crypto from "./Crypto";
import { Container } from "react-bootstrap";
const CryptoList = ({ data }) => {
  const sortedData = data.sort((a, b) => {
    return parseInt(a.tsupply) > parseInt(b.tsupply) ? 1 : -1;
  });
  return (
    <div style={{ paddingTop: "3rem" }}>
      {sortedData.map((item) => (
        <Crypto data={item} />
      ))}
    </div>
  );
};

export default CryptoList;
