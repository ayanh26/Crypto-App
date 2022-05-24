import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import axios from "axios";
import Market from "./Market";

const MarketList = () => {
  const [marketData, setMarketData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getMarkets = async () => {
      const markets = await axios.get(
        `https://api.coinlore.net/api/coin/markets/?id=${id}`
      );

      setMarketData(markets.data);
    };

    getMarkets();
  }, []);

  return (
    <div style={{ paddingTop: "3rem" }}>
      {marketData.map((m) => (
        <Market data={m} />
      ))}
    </div>
  );
};

export default MarketList;
