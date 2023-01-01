import React, { useState } from "react";
import Houses from "./Houses";
import {
  AppstoreOutlined,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Header } = Layout;
const items = [
  {
    label: (
      <a href="/" rel="noopener noreferrer">
        Cy-Estate
      </a>
    ),
    key: "logo",
    icon: <HomeOutlined />,
  },
  {
    label: "About Us",
    key: "app",
    icon: <AppstoreOutlined />,
    disabled: false,
  },
  {
    label: "Apartments",
    key: "All",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Categories",
        children: [
          {
            label: "One Bedroom",
            key: "one-bedroom",
          },
          {
            label: "Two Bedroom",
            key: "two-bedroom",
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Contact Us
      </a>
    ),
    key: "alipay",
  },
  {
    label: "Login",
    key: "login",
    disabled: false,
    className: "signup",
  },
  {
    label: "signup",
    key: "signup",
    disabled: false,
    className: "signup",
  },
];

const Navigation = () => {
  const [current, setCurrent] = useState("mail");
  const [filter, setFilter] = useState("");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);

    if (e.key === "one-bedroom") {
      setFilter(1);
    } else if (e.key === "two-bedroom") {
      setFilter(2);
    } else if (e.key === "All") {
      setFilter("");
    }
  };
  return (
    <Layout>
      <Header>
        <Menu
          theme="dark"
          align="right"
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </Header>
      {filter && <Houses filter={filter} />}
    </Layout>
  );
};
export default Navigation;
