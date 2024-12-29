import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "Can I return a dress?", answer: "Yes, you can return a dress within 30 days of purchase." },
    { question: "How long does shipping take?", answer: "Shipping typically takes 5-7 business days." },
    { question: "Do you offer gift cards?", answer: "Yes, we offer digital and physical gift cards." },
    { question: "How do i speak with the customer care?", answer: "You can speak to our customer care via 07049946769" },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      style={{
        backgroundColor: "#fff8e1",
        padding: "20px",
        borderRadius: "10px",
        maxWidth: "600px",
        margin: "20px auto",
      }}
    >
      {faqs.map((faq, index) => (
        <div
          key={index}
          style={{
            borderBottom: "1px solid #f0e6c9",
            padding: "15px 0",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onClick={() => toggleFAQ(index)}
          >
            <h4 style={{ margin: 0 }}>{faq.question}</h4>
            <span
              style={{
                transform: activeIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s",
              }}
            >
              ⌄
            </span>
          </div>
          {activeIndex === index && (
            <p style={{ marginTop: "10px", color: "#555" }}>{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
