import React, { useState } from "react";
import {
  AppstoreOutlined,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Header } = Layout;
const items = [
  {
    label: "Cy-Estate",
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
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Category",
        children: [
          {
            label: "One Bedroom",
            key: "setting:1",
          },
          {
            label: "Two Bedroom",
            key: "Two Bedroom",
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
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
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
    </Layout>
  );
};
export default Navigation;
