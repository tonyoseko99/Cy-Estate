import react, { useState, useEffect } from "react";
import axios from "axios";

import { Card, Divider } from "antd";
const { Meta } = Card;

const Houses = ({ house }) => {
  console.log(house);
  return (
    <>
      <div className="houses">
        <h1 className="houses-h1">Houses</h1>
        <Divider />
        <div className="houses__container">
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt={house.title} src={house.image} />}
          >
            <Meta title={house.title} description={house.description} />
            <Divider />
          </Card>
        </div>
      </div>
    </>
  );
};

export default Houses;
