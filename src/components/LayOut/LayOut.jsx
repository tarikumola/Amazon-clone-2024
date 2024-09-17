import React from "react";
import Header from "../Header/Header"; // Ensure the correct path

const LayOut = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default LayOut;
