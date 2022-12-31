import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, Divider, Button } from "antd";

const { Meta } = Card;

const Houses = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const getHouses = async () => {
      try {
        const result = await axios.get("http://localhost:4000/houses");
        setHouses(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    getHouses();
  }, []);

  return (
    <>
      <div className="houses">
        <h1 className="houses-h1">Houses</h1>
        <Divider />
        {houses.map((house) => (
          <div className="houses__container" key={house.id}>
            <Card
              className="houses__card"
              hoverable
              style={{ width: 240 }}
              cover={<img alt={house.title} src={house.image} />}
            >
              <Meta title={house.title} description={house.description} />
              <Divider />
              <Link to={`/house/${house.id}`}>
                <Button type="primary">View House</Button>
              </Link>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Houses;
