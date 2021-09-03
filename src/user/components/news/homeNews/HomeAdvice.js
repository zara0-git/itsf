import React from "react";

import NewsList from "user/components/news/newsList/NewsList";
export default function (props) {
  return (
    <div
      style={{
        borderBottom: "1px solid #2CA02C",
      }}
    >
      <div
        style={{
          position: "relative",
          margin: "30px 0",
          borderTop: "1px solid #2CA02C",
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
            backgroundColor: "#2CA02C",
            color: "#fff",
            fontSize: "18px",
            fontWeight: "400",
            textTransform: "uppercase",
          }}
        >
          Зөвлөгөө
        </h3>
      </div>
      <div
        style={{
          width: " 100%",
        }}
      >
        <NewsList typeId="advice" name="Зөвлөгөө" paginationHide={true} />
      </div>
    </div>
  );
}
