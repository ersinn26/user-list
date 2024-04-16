import data from "../helper/data";
import React from "react";
import "./Lİststyle.css"
import { useState } from "react";

const List = () => {
 


  return (
    <div className="list-container">
      <h2>Employee List</h2>
      <p className="total">Total: {data.length}</p>
      {data.map((user, id) => (
        <div className="list-item" key={id}>
          <div>
            <img src={user.image} alt={user.name} />
          </div>
          <div className="list-info">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.age}</p>
          </div>
        </div>
      ))}
      <button >Prev</button>
      <button >Next</button>
    </div>
  );
};

export default List;
