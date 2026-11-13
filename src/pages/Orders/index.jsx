import { Link } from "react-router-dom";
import { Minus, Plus } from "@phosphor-icons/react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useCart } from "../../hooks/cart";
import { Container, Content } from "./styles";

function formatPrice(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function Orders() {
  const { items, removeFromCart, changeQuantity, totalPrice } = useCart();

  return (
    <Container>
      <Header />

      <Content>
        <h1>Meu pedido</h1>

        {items.length === 0 ? (
          <p className="empty">
            Seu pedido está vazio. <Link to="/">Ver o cardápio</Link>
          </p>
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt={item.title} />

                  <div className="info">
                    <p>
                      <strong>
                        {item.quantity} x {item.title}
                      </strong>
                      <span>{formatPrice(item.price * item.quantity)}</span>
                    </p>

                    <div className="actions">
                      <button
                        type="button"
                        aria-label="Diminuir quantidade"
                        onClick={() => changeQuantity(item.id, -1)}
                      >
                        <Minus size={18} />
                      </button>

                      <button
                        type="button"
                        aria-label="Aumentar quantidade"
                        onClick={() => changeQuantity(item.id, 1)}
                      >
                        <Plus size={18} />
                      </button>

                      <button
                        type="button"
                        className="remove"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <p className="total">Total: {formatPrice(totalPrice)}</p>
          </>
        )}
      </Content>

      <Footer />
    </Container>
  );
}