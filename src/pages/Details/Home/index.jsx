import { dishes } from "../../../data/dishes";
import macarons from "../../../assets/macarons.webp";
import { Container } from "./styles";
import React from "react";
import { Footer } from "../../../components/Footer";
import Carousel from "../../../components/Carousel";

export function Home() {
  const refeicoes = dishes.filter((dish) => dish.category === "refeicoes");
  const sobremesas = dishes.filter((dish) => dish.category === "sobremesas");
  const bebidas = dishes.filter((dish) => dish.category === "bebidas");

  return (
    <Container>
      <div>
        <h1>Food Explorer</h1>
      </div>

      <hgroup>
        <div className="bg">
          <div
            className="hero-image"
            style={{ backgroundImage: `url("${macarons}")` }}
          />
          <div className="texts">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>
      </hgroup>

      <Carousel title="Refeições" dishes={refeicoes} />
      <Carousel title="Sobremesas" dishes={sobremesas} />
      <Carousel title="Bebidas" dishes={bebidas} />

      {<Footer />}
    </Container>
  );
}