import react from "react";
import { Layout } from "antd";
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
      </Layout>
    </>
  );
};

export default Home;
