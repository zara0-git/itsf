import React from "react";

import AdviceCarousel from "user/components/adviceCarousel/AdviceCarousel";

export default function (props) {
  return (
    <div
      style={{
        borderBottom: "1px solid #1F77B4",
      }}
    >
      <div
        style={{
          position: "relative",
          margin: "30px 0",
          borderTop: "1px solid #1F77B4",
        }}
      >
        <h3
          style={{
            position: "absolute",
            top: "-17px",
            left: 0,
            right: "auto",
            bottom: "auto",
            display: "inline-block",
            margin: 0,
            padding: "4px 12px",
            backgroundColor: "#1F77B4",
            color: "#fff",
            fontSize: "18px",
            fontWeight: "400",
            textTransform: "uppercase",
          }}
        >
          Арга зүй
        </h3>
      </div>
      <div
        style={{
          backgroundColor: " rgba(51, 51, 51, 0.5)",
          width: " 100%",
          padding: "30px",
        }}
      >
        <AdviceCarousel />
      </div>
    </div>
  );
}
