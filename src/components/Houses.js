import react, { useState, useEffect } from "react";
import axios from "axios";

import { Card, Divider } from "antd";
const { Meta } = Card;

const Houses = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    getHouses();
  }, []);

  async function getHouses() {
    let result = await fetch("http://localhost:4000/houses");
    result = await result.json();
    console.log(`result: ${result}`);
    setHouses(result);
  }

  return (
    <>
      <div className="houses">
        <h1 className="houses-h1">Houses</h1>
        <Divider />
        {houses.map((house) => (
          <div className="houses__container">
            <Card
              onClick={() => {
                window.location.href = `/house/${house.id}`;
              }}
              className="houses__card"
              key={house.id}
              hoverable
              style={{ width: 240 }}
              cover={<img alt={house.title} src={house.image} />}
            >
              <Meta title={house.title} description={house.description} />
              <Divider />
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Houses;
