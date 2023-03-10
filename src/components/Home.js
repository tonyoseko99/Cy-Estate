import react, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Houses from "./Houses";
import { Layout, Divider, Card, Button, Carousel } from "antd";
import { BankOutlined, WalletOutlined, HomeOutlined } from "@ant-design/icons";
const { Meta } = Card;

const { Content } = Layout;

const Home = () => {
  // slider state and functions
  const [currentIndex, setCurrentIndex] = useState(0);

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

          <Carousel
            autoplay
            dots
            dotPosition="bottom"
            dotStyle={{ backgroundColor: "red" }}
            className="carousel"
          >
            {houses.slice(currentIndex, currentIndex + 2).map((house) => (
              <Card key={house.id} style={{ margin: "16px" }}>
                <div className="carousel-item">
                  <img alt={house.title} src={house.image} />
                  <h1>{house.title}</h1>
                </div>
                <p>{house.description}</p>
              </Card>
            ))}
          </Carousel>
          <div className="home__container3__button">
            <Button type="dark" size="large">
              <Link to="/houses">View All</Link>
            </Button>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default Home;
