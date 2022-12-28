import react, { useState, useEffect } from "react";
import axios from "axios";
import Houses from "./Houses";
import { Layout, Divider, Card, Button } from "antd";
import { BankOutlined, WalletOutlined, HomeOutlined } from "@ant-design/icons";
const { Meta } = Card;

const { Content } = Layout;

const Home = () => {
  // slider state and functions
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRightArrowClick = () => {
    setCurrentIndex((currentIndex) => currentIndex + 2);
  };

  const handleLeftArrowClick = () => {
    setCurrentIndex((currentIndex) => currentIndex - 2);
  };

  //   use axios to fetch data from the backend

  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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

  //   end of axios

  return (
    <>
      <Layout>
        <Content className="home">
          <div className="home__container">
            <h1 className="home-h1">
              Easy way to find <br /> your dream home.
            </h1>
            <p className="home-p">
              We provide the best service for you to find your dream home,{" "}
              <br />
              we have a lot of houses for you to choose, <br />
              purchase or rental houses.
            </p>
          </div>
        </Content>

        <Content className="home__container2">
          <div className="home__container2__content">
            <h2 className="home-h2">Why Choose Us?</h2>
            <img
              src="https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              alt="home"
            />
          </div>
          <div className="home__container2__details">
            <WalletOutlined />
            <h3 className="home-h3">Easy Payment Method</h3>
            <p className="home-p">
              We give you the lowest price for your dream home, <br />
              and we also give you the best payment method.
            </p>
            <Divider />
            <BankOutlined />
            <h3 className="home-h3">Tax Advantage</h3>
            <p className="home-p">
              You can get tax advantage when you purchase a house, <br />
              and you can also get tax advantage when you rent a house.
            </p>
            <Divider />
            <HomeOutlined />
            <h3 className="home-h3">Property Insurance</h3>
            <p className="home-p">
              We provide property insurance for your house, <br />
              so you don't have to worry about your house.
            </p>
          </div>
        </Content>

        <Content className="home__container3">
          <div className="home__container3__content">
            <h2 className="home-h2">Featured Properties</h2>
          </div>
          <div className="home__container3__properties">
            <div className="carousel">
              {currentIndex > 0 && (
                <button onClick={handleLeftArrowClick}>&lt;</button>
              )}
              {houses.slice(currentIndex, currentIndex + 2).map((house) => (
                <div className="carousel__slide" key={house.id}>
                    <img className="carousel-img" src={house.image} alt={house.title} />
                    <h3 className="carousel-h3">{house.title}</h3>
                </div>
              ))}
              {currentIndex + 2 < houses.length && (
                <button onClick={handleRightArrowClick}>&gt;</button>
              )}
            </div>
            {/* link to view all houses and pass the fetchData function as props */}
          </div>
          <div className="home__container3__properties__viewall">
            <a href="/houses">
              <Button type="primary">View All Houses</Button>
            </a>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default Home;
