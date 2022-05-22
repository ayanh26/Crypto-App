import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import CryptoList from "./components/CryptoList";
import MarketList from "./components/MarketList";
import Supply from "./components/Supply";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const results = await axios.get("https://api.coinlore.net/api/tickers/");

      setData(results.data.data);
    };

    getData();
  }, []);

  return (
    <div className="theapp">
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" element={<CryptoList data={data} />} exact />
          <Route path="/supply" element={<Supply data={data} />} />
          <Route path="/markets/:id" element={<MarketList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
