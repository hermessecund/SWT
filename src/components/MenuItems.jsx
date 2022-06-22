import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems() {
  const { pathname } = useLocation();

  return (
    <Menu
      theme=""
      mode="horizontal"
      style={{
        display: "flex",
        fontSize: "16px",
        fontStyle: "#0033ff",
        fontWeight: "400",
        width: "100%",
        justifyContent: "right",
        backgroundColor: "#000000",
        borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
      }}
      defaultSelectedKeys={[pathname]}
    >
      <Menu.Item key="/quickstart">
        <NavLink to="/quickstart"> BeTi/DeFi </NavLink>
      </Menu.Item>
      <Menu.Item key="/contract">
        <NavLink to="/contract"> Contract</NavLink>
      </Menu.Item>
      <Menu.Item key="/1inch">
        <NavLink to="/1inch"> Exchange</NavLink>
      </Menu.Item>
      <Menu.Item key="onramp">
        <NavLink to="/onramp"> Fiat </NavLink>
      </Menu.Item>
      <Menu.Item key="/erc20balance">
        <NavLink to="/erc20balance"> Balances</NavLink>
      </Menu.Item>
      <Menu.Item key="/erc20transfers">
        <NavLink to="/erc20transfers"> Transfers</NavLink>
      </Menu.Item>
      <Menu.Item key="/wallet">
        <NavLink to="/wallet"> Wallet</NavLink>
      </Menu.Item>
      <Menu.Item key="/nftbalance">
        <NavLink to="/nftbalance"> NFT </NavLink>
      </Menu.Item>
      <Menu.Item key="/tokenprice">
        <NavLink to="/tokenprice"> SWT </NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default MenuItems;
