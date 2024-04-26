import { Logo } from '../Logo'
import { Container } from './styles'

export function Footer() {
  return (
    <Container>
      <Logo onFooter/>
      <h3>© 2023 - Todos os direitos reservados.</h3>
    </Container>
  )
}