import React from "react";
import "./Schimmer.css";
const SchimmerCard = () => {
  return (
    <>
      <div className="shimmer-container fade">
        <div className="shimmer"></div>
      </div>
      <div className="shimmer-container no-fade">
        <div className="shimmer"></div>
      </div>
    </>
  );
};

export default SchimmerCard;
