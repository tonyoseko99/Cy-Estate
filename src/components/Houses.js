import react, { useState, useEffect } from "react";
import axios from "axios";

import { Card, Divider } from "antd";
const { Meta } = Card;

const Houses = () => {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //   use axios to fetch data from the backend
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:4000/houses");
      setHouses(response.data);
      console.log(response.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <div className="houses-container">
          {houses.map((house) => (
            <Card
              className="houses__card"
              key={house.id}
              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt={house.title} src={house.image} />}
            >
              <Meta title={house.title} description={house.description} />
              <Divider />
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Houses;
