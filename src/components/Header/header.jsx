import React from "react";
import { UserContext } from "./../../contexts/index.js";
const Header = () => {
  const consumerFunc = (user) => {
    return (
      <div>
        <h2>Hello, {user.fullName}</h2>
      </div>
    );
  };
  return <UserContext.Consumer>{consumerFunc}</UserContext.Consumer>;
};

export default Header;
