import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 90rem;
  margin-inline: auto;
  padding-bottom: 3.125rem;

  & hgroup {
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
