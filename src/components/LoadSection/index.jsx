import { CardSkeleton } from '../CardSkeleton'
import { Container } from './styles'

export function LoadSection() {
  return (
    <Container>
      <h2></h2>
      <section>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </section>
    </Container>
  )
}