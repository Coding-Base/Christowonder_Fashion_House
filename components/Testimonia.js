import React from "react";
import image from "./mylogo.jpg"
import cimage from "./christopher.jpg"
const TestimonialCard = () => {
  return (
    <div
      style={{
        backgroundColor: "#fff8e1",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src={image}
          alt="Brand Logo"
          style={{
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            objectFit: "cover",
          }}
        />
        <div>
          <h3 style={{ margin: 0, fontSize: "18px" }}>Christowonder Fashion House</h3>
          <p style={{ margin: 0, fontSize: "14px", color: "#888" }}>
            Tailoring Shop
          </p>
        </div>
      </div>

      <p
        style={{
          fontStyle: "italic",
          marginTop: "20px",
          fontSize: "16px",
          color: "#555",
        }}
      >
        "Best tailoring experience ever! we give you the best !"
      </p>

      <img
        src={cimage}
        alt="Customer"
        style={{
          borderRadius: "50%",
          width: "80px",
          height: "80px",
          objectFit: "cover",
          margin: "20px auto",
        }}
      />
      <h4 style={{ margin: "10px 0 0", fontSize: "18px" }}>CHRISTOPHER CEO</h4>
    </div>
  );
};

export default TestimonialCard;
