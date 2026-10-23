import { useRef } from "react";
import { Card } from "../Card";
import { Container } from "./styles";

export default function Carousel({ title, dishes = [] }) {
  const listRef = useRef(null);

  function scroll(direction) {
    const list = listRef.current;
    const amount = list.clientWidth * 0.8;

    list.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  return (
    <Container>
      <h2>{title}</h2>

      <div className="wrapper">
        <button
          type="button"
          className="arrow left"
          onClick={() => scroll("left")}
          aria-label="Pratos anteriores"
        >
          &#60;
        </button>

        <div className="list" ref={listRef}>
          {dishes.map((dish) => (
            <Card key={dish.id} {...dish} />
          ))}
        </div>

        <button
          type="button"
          className="arrow right"
          onClick={() => scroll("right")}
          aria-label="Próximos pratos"
        >
          &#62;
        </button>
      </div>
    </Container>
  );
}