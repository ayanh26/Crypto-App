import React from "react";
import { Badge, Card, ListGroupItem, ListGroup, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import Flip from "react-reveal/Flip";

const Crypto = ({ data }) => {
  const [image, setImage] = useState([]);
  const change = data.percent_change_24h > 0;

  return (
    <div>
      <Flip left>
        <Card
          className="bg-secondary text-white"
          style={{
            width: "17rem",
            margin: "auto",
            marginTop: "3rem",
            marginBottom: "3rem",
          }}
        >
          <Card.Body>
            <Card.Title>{data.symbol}</Card.Title>
            <Badge pill bg="info text-black" style={{ float: "right" }}>
              Rank: {data.rank}
            </Badge>
            <Card.Text>{data.name}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="bg-secondary text-white">
              $ {data.price_usd}
            </ListGroupItem>
            <ListGroupItem className="bg-secondary text-white">
              24h change ={" "}
              <Badge bg={change ? "success" : "danger"}>
                {data.percent_change_24h}
              </Badge>
            </ListGroupItem>
            <ListGroupItem className="bg-secondary text-white">
              Supply = {data.tsupply}
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">
              <Button variant="primary">Markets</Button>
            </Card.Link>
            <Card.Link href="#">
              <Button variant="primary">Exchanges</Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Flip>
    </div>
  );
};

export default Crypto;
