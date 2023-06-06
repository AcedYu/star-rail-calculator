import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Header = (args) => {
  return (
    <Navbar color="dark" dark>
      <NavbarBrand href="/">
        <img
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/en/b/b1/Honkai-Star-Rail.png"
          style={{
            height: "7em",
            width: "7em"
          }}
        />
        Honkai: Star Rail Aggro Calculator
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
