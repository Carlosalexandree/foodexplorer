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
    max-width: 72rem;
    padding-inline: 1rem;
    margin-top: calc(var(--h) * 0.585 + 1rem);

    @media (${({ theme }) => theme.SCREENS.MD}) {
      margin-top: calc(var(--h) * 0.53 + 1rem);
    }

    & .bg {
      position: relative;
      display: flex;
      justify-content: flex-end;
      width: 100%;
      border-radius: 8px;
      height: var(--h);
      background: ${({ theme }) => theme.GRADIENTS.G200};
    }

    & .hero-image {
      position: absolute;
      left: -2%;
      bottom: 0;
      width: calc(var(--h) * 1.3);
      height: calc(var(--h) * 1.585);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: left bottom;

      @media (${({ theme }) => theme.SCREENS.MD}) {
        left: calc(var(--h) * -0.27);
        width: calc(var(--h) * 2.523);
        height: calc(var(--h) * 1.531);
        background-size: 100% auto;
        background-position: left top;
      }
    }

    & .texts {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-top: 1.875rem;
      margin-right: clamp(1.25rem, -0.8787rem + 7.9208vw, 6.25rem);

      @media (${({ theme }) => theme.SCREENS.MD}) {
        margin-top: calc(var(--h) * 0.338);
      }

      & h1 {
        font-size: clamp(1.125rem, 0.5396rem + 2.1782vw, 2.5rem);
        font-weight: 500;
      }

      & p {
        width: 11rem;
        font-family: "Roboto", sans-serif;
        font-size: clamp(0.75rem, 0.6436rem + 0.396vw, 1rem);

        @media (${({ theme }) => theme.SCREENS.MD}) {
          width: unset;
        }
      }
    }
  }
`;