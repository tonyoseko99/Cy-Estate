import react, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Divider, Button } from "antd";
const { Meta } = Card;

const House = () => {
  const { id } = useParams();
  const [house, setHouse] = useState({});
  useEffect(() => {
    const getHouse = async () => {
      try {
        const result = await axios.get(`http://localhost:4000/houses/${id}`);
        setHouse(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    getHouse();
  }, [id]);

  return (
    <>
      <div className="house">
        <h1 className="house-h1">House</h1>
        <Divider />
        <div className="house__container">
          <img className="house__image" src={house.image} alt={house.title} />
          <div className="house__info">
            <h1 className="house__title">{house.title}</h1>
            <p className="house__description">{house.description}</p>
            <p className="house__price">Price: {house.price}</p>
            <p className="house__location">Location: {house.address}</p>
            <p className="house__bedrooms">Bedrooms: {house.bedrooms}</p>
            <Divider />
            <Button type="primary">Purchase</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default House;
