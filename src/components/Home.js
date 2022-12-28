import react from "react";
import { Layout, Divider } from "antd";
import { BankOutlined, WalletOutlined, HomeOutlined } from "@ant-design/icons";

const { Content } = Layout;

const Home = () => {
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
      </Layout>
    </>
  );
};

export default Home;
