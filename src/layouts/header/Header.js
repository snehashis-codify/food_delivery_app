import React from "react";
export const Header = () => {
  return (
    <div className="flex justify-between items-center border-solid border-[1px] border-black">
      <div className="w-[100px]">
        <img src={require("../../assets/image/food_logo.png")} alt="" />
      </div>
      <div>
        <ul className="flex nav_list text-[24px]">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
