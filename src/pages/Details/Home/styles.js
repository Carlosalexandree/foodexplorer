import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 90rem;
  margin-inline: auto;
  padding-bottom: 3.125rem;

  & hgroup {
    --h: clamp(7.5rem, 3.5rem + 15vw, 16.25rem);

    align-self: center;
    display: flex;
    align-items: flex-end;
    width: 100%;
    max-width: 70rem;
    padding-inline: 1rem;
    margin-top: calc(var(--h) * 0.585 + 1rem);

    & .bg {
      position: relative;
      display: flex;
      justify-content: flex-end;
      width: 100%;
      height: var(--h);
      background: ${({ theme }) => theme.GRADIENTS.G200};
    }

    & .hero-image {
      position: absolute;
      bottom: 0;
      left: -2%;
      height: calc(var(--h) * 1.585);
      aspect-ratio: 656 / 412;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: left bottom;
    }

    & .texts {
      margin-top: 1.875rem;
      margin-right: clamp(1.25rem, -0.8787rem + 7.9208vw, 6.25rem);

      & h1 {
        font-size: clamp(1.125rem, 0.5396rem + 2.1782vw, 2.8rem);
      }

      & p {
        width: clamp(13rem, 11.297rem + 6.3366vw, 17rem);
        font-size: clamp(0.75rem, 0.6436rem + 0.396vw, 1rem);

        @media (${({ theme }) => theme.SCREENS.MD}) {
          width: unset;
        }
      }
    }
  }
`;