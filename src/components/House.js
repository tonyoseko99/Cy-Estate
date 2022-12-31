import react from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Divider, Button } from "antd";
const { Meta } = Card;

const House = () => {
  const { id } = useParams();
  const [house, setHouse] = react.useState({});
  react.useEffect(() => {
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
          <Card
            className="house__card"
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
            <Divider />
            <Button type="primary">View House</Button>
          </Card>
        </div>
      </div>
    </>
  );
};

export default House;
