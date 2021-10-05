import React from "react";
import { UserContext } from "../../../contexts/index.js";

const Sidebar = () => {
  const consumerFunc = (user) => {
    return (
      <div>
        <h2>Hello, {user.fullName}</h2>
        <div style={{ width: "200px" }}>
          <img
            src={user.userImg}
            alt={user.fullName}
            style={{ width: "100%" }}
          />
        </div>
      </div>
    );
  };
  return <UserContext.Consumer>{consumerFunc}</UserContext.Consumer>;
};

export default Sidebar;
