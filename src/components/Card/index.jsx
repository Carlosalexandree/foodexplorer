import { Link } from "react-router-dom";
import { CaretRight } from "@phosphor-icons/react";
import { Container } from "./styles";

export function Card({ id, title, description, price, image }) {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return (
    <Container>
      <img src={image} alt={title} />

      <Link to={`/prato/${id}`}>
        <h2>{title}</h2>
        <CaretRight size={20} weight="bold" />
      </Link>

      <p>{description}</p>
      <span>{formattedPrice}</span>
    </Container>
  );
}