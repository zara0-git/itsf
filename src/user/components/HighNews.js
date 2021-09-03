import React from "react";

import NewsCarousel from "user/components/news-slider/NewsCarousel";

export default function (props) {
  return (
    <div>
      <div
        style={{
          position: "relative",
          margin: "30px 0",
          borderTop: "1px solid #ff6d12",
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
            backgroundColor: "#ff6d12",
            color: "#fff",
            fontSize: "18px",
            fontWeight: "400",
            textTransform: "uppercase",
          }}
        >
          Онцлох мэдээ
        </h3>
      </div>
      <NewsCarousel />
    </div>
  );
}
