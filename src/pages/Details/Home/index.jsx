import macarons from "../../../assets/macarons.webp";
import { Container } from "./styles";
import React from "react";
import { Footer } from "../../../components/Footer";
import Carousel from "../../../components/Carousel";

export function Home() {
  console.log(macarons);
  return (
    <Container>
      <div>
        <h1>Topo</h1>
      </div>
      <hgroup
        style={{
          alignSelf: "center",
          height: "412px",
          display: "flex",
          alignItems: "end",
        }}
      >
        <div
          className="bg"
          style={{
            width: "1120px",
            height: "260px",
            background: "linear-gradient(180deg, #091E26 0%, #00131C 100%)",
            display: "flex",
            position: "relative",
            justifyContent: "end",
          }}
        >
          <div
            style={{
              height: "412px",
              width: "656px",
              top: "-152px",
              left: "-23px",
              position: "absolute",
              backgroundImage: `url("${macarons}")`,
              backgroundSize: "656px",
            }}
          />
          <div className="texts">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>
      </hgroup>

      <Carousel />
      <Carousel data={["a", "b", "c", "d", "e", "f"]} />

      {<Footer />}
    </Container>
  );
}
