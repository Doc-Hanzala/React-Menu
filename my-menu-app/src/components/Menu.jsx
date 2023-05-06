import React from "react";
import SingleItem from "./SingleItem";

const Menu = ({ menuItems }) => {
  return (
    <div className="menu-items">
      {menuItems.map((menuItem) => {
       return <SingleItem key = {menuItem.id} {...menuItem} />
      })}
    </div>
  );
};

export default Menu;
