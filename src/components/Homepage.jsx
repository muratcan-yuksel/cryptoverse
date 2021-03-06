import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

// import { useGetCryptosQuery } from "../services/cryptoApi";
// import Cryptocurrencies from "./Cryptocurrencies";
// import News from "./News";
// import Loader from "./Loader";

const { Title } = Typography;

const Homepage = () => {
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
        <Row>
          <Col span={12}>
            <Statistic title="Total Cryptocurrencies" value="5" />
          </Col>{" "}
          <Col span={12}>
            <Statistic title="Total Exchanges" value="5" />
          </Col>{" "}
          <Col span={12}>
            <Statistic title="Total Market Cap" value="5" />
          </Col>{" "}
          <Col span={12}>
            <Statistic title="Total 24h Volume" value="5" />
          </Col>{" "}
          <Col span={12}>
            <Statistic title="Total Total Markets" value="5" />
          </Col>
        </Row>
      </Title>
    </>
  );
};

export default Homepage;
