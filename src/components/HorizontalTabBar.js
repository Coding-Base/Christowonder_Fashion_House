import React from "react";
import "./HorizontalTabBar.css";

const categories = [
  "Agbada",
  "Senator",
  "Kaftan",
  "Navy Blue",
  "Catalogue",
  "Attire",
  "Hausa",
];

const HorizontalTabBar = () => {
  return (
    <div className="horizontal-tab-bar">
      {categories.map((category, index) => (
        <button key={index} className="tab-button">
          {category} 
        </button>
      ))}
    </div>
  );
};

export default HorizontalTabBar;
