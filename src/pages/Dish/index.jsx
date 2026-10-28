import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CaretLeft, Minus, Plus } from "@phosphor-icons/react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { dishes } from "../../data/dishes";
import { Container, Content } from "./styles";

export function Dish() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const dish = dishes.find((item) => item.id === Number(id));

  if (!dish) {
    return <h1>Prato não encontrado</h1>;
  }

  const total = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(dish.price * quantity);

  return (
    <Container>
      <Header />

      <Content>
        <Link to="/" className="back">
          <CaretLeft size={24} />
          voltar
        </Link>

        <div className="dish">
          <img src={dish.image} alt={dish.title} />

          <div className="info">
            <h1>{dish.title}</h1>
            <p>{dish.description}</p>

            {dish.ingredients?.length > 0 && (
              <ul>
                {dish.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            )}

            <div className="buy">
              <div className="stepper">
                <button
                  type="button"
                  aria-label="Diminuir quantidade"
                  disabled={quantity === 1}
                  onClick={() => setQuantity(quantity - 1)}
                >
                  <Minus size={24} />
                </button>

                <span>{String(quantity).padStart(2, "0")}</span>

                <button
                  type="button"
                  aria-label="Aumentar quantidade"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus size={24} />
                </button>
              </div>

              <button type="button" className="add">
                incluir · {total}
              </button>
            </div>
          </div>
        </div>
      </Content>

      <Footer />
    </Container>
  );
}