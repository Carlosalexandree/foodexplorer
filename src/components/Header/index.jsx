import {
  Hexagon,
  List,
  MagnifyingGlass,
  Receipt,
  SignOut,
} from "@phosphor-icons/react";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <button type="button" className="menu" aria-label="Abrir menu">
          <List size={24} />
        </button>

        <div className="logo">
          <Hexagon size={30} weight="fill" />
          <h1>food explorer</h1>
        </div>

        <label className="search">
          <MagnifyingGlass size={24} />
          <input type="text" placeholder="Busque por pratos ou ingredientes" />
        </label>

        <button type="button" className="orders">
          <Receipt size={24} />
          Pedidos (0)
        </button>

        <button type="button" className="cart" aria-label="Pedidos">
          <Receipt size={32} />
          <span>0</span>
        </button>

        <button type="button" className="signout" aria-label="Sair">
          <SignOut size={22} />
        </button>
      </Content>
    </Container>
  );
}