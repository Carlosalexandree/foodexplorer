import logo from "../../assets/logo.svg";
import { Container } from "./styles";

export function Logo({ onClick, onFooter }) {
  return (
    <Container>
      <img src={logo} alt="Logo Food Explorer" width={49.43} height={35} />
      <div>
        <h2>food explorer</h2>
      </div>
    </Container>
  );
}
