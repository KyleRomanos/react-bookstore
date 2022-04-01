import React, { useState } from "react";
import list from "../data";
import Cards from "./card";
import "../styles/amazon.css";

const Amazon = ({ handleClick }) => {
  return (
    <div className="main-body">
    <section className="main-section">
      {list.map((item) => (
           
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
    </div>
  );
};

export default Amazon;