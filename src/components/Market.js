import React from "react";
import { Card, Badge } from "react-bootstrap";

const Market = ({ data }) => {
  return (
    <div>
      <Card style={{ width: "18rem", margin: "auto", marginTop: "3rem" }}>
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{data.base}</Card.Subtitle>
          <Card.Text>
            <Badge bg="success">$ {Math.round(data.price_usd)}</Badge>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Market;
