import macarons from "../../../assets/macarons.webp";
import { Container } from "./styles";
import React from "react";
import { Footer } from "../../../components/Footer";
import Carousel from "../../../components/Carousel";

export function Home() {
  return (
    <Container>
      <div>
        <h1>Topo</h1>
      </div>
      <hgroup>
        <img
          src={macarons}
          alt="imagem macarons caindo junto de algumas frutas vermelhas"
        />
        <div className="texts">
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </hgroup>

      <Carousel />
      <Carousel data={["a", "b", "c", "d", "e", "f"]} />

      {/* <div class="carousel">
        <button class="arrow-left control" aria-label="Previous">
          ◀
        </button>
        <button class="arrow-right control" aria-label="Next Image">
          ▶
        </button>

        <div class="gallery-wrapper">
          <div class="gallery">
            <img
              src="http://source.unsplash.com/random/250x250/?beach"
              alt="beach"
              class="item"
            />
            <img
              src="http://source.unsplash.com/random/250x250/?restaurant"
              alt="restaurante"
              class="item current-item"
            />
            <img
              src="http://source.unsplash.com/random/250x250/?animal"
              alt="animal"
              class="item current-item"
            />
            <img
              src="http://source.unsplash.com/random/250x250/?work"
              alt="work"
              class="item"
            />
          </div>
        </div>
      </div> */}

      {<Footer />}
    </Container>
  );
}
