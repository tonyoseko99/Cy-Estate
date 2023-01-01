import react from "react";
import { Layout } from "antd";
const { Footer } = Layout;

const FooterSection = () => {
  return (
    <>
      <Footer className="footer">
        <p>© 2022 Cy-Estate</p>
        {/* <Carousel autoplay>
              {houses.slice(currentIndex, currentIndex + 2).map((house) => (
                <div key={house.id}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={house.image} />}
                  >
                    <Meta title={house.title} />
                  </Card>
                </div>
              ))}
            </Carousel> */}
      </Footer>
    </>
  );
};

export default FooterSection;
