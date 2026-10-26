import { Container } from "./styles";

export function Card({ title, description, price, image }) {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return (
    <Container>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <span>{formattedPrice}</span>
    </Container>
  );
}