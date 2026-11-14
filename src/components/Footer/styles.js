import { styled } from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 1.75rem;
  padding-inline: max(
    clamp(2rem, -1.2782rem + 12.198vw, 9.7rem),
    calc((100% - 72rem) / 2)
  );
  font-size: clamp(0.5rem, 0.3403rem + 0.5941vw, 0.875rem);
  background: ${({ theme }) => theme.DARK.D600};

  & h3 {
    line-height: 1;
    font-weight: 400;
  }

  & div {
    margin-bottom: 0;
    align-items: center;

    font-size: inherit;
    color: ${({ theme }) => theme.LIGHT.L700};

   & img {
      width: clamp(1.125rem, 0.9653rem + 0.5941vw, 1.5rem);
      height: auto;
      margin-top: 0;
      filter: grayscale(1);
    }
  }
`;
