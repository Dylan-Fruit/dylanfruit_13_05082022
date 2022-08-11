import React from "react";

const Features = ({ icon, alt, title, description }) => {
  return (
    <div className="feature-item">
      <img src={icon} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Features;
