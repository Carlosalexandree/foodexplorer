import React, { useRef } from "react";
import Item from "./components/Item";

const Carousel = ({ data = [1, 2, 3, 4, 5, 6, 7] }) => {
  const containerRef = useRef(null);

  const handleControlClick = (event, direction = "left") => {
    const currentScrollLeft = containerRef.current.scrollLeft;
    const moveToRight = direction === "right";
    const nextScrollLeft = moveToRight
      ? currentScrollLeft + 331
      : currentScrollLeft - 331;

    containerRef.current.scrollTo({
      left: nextScrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={containerRef}
      className="carousel"
      style={{
        display: "flex",
        position: "relative",
        width: "1122px",
        height: "462px",
        alignSelf: "center",
        overflow: "hidden",
        margin: "20px 0",
      }}
    >
      <div
        onClick={(e) => handleControlClick(e, "left")}
        className="control"
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          height: "100%",
          width: 0,
          display: "flex",
          alignItems: "center",
          fontSize: "32px",
        }}
      >
        <span style={{ cursor: "pointer" }}>&#60;</span>
      </div>

      <div
        className="items-container"
        style={{
          display: "flex",
          gap: "27px",
          maxWidth: "unset",
        }}
      >
        {data.map((item) => {
          return <Item name={item} />;
        })}
      </div>

      <div
        onClick={(e) => handleControlClick(e, "right")}
        className="control"
        style={{
          position: "sticky",
          top: 0,
          right: 0,
          height: "100%",
          width: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          fontSize: "32px",
        }}
      >
        <span style={{ cursor: "pointer" }}>&#62;</span>
      </div>
    </div>
  );
};

export default Carousel;
