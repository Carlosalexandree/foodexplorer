import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  width: 13.125rem;
  height: 18.25rem;
  padding: 1.5rem 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.DARK.D300};
  background: ${({ theme }) => theme.DARK.D200};

  img {
    width: 5.5rem;
    height: 5.5rem;
  }

  h2 {
    font-size: 0.875rem;
    font-weight: 500;
    text-align: center;
  }
  a {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  p {
    color: ${({ theme }) => theme.LIGHT.L400};
    text-align: center;
  }

  span {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 1rem;
  }

  @media (${({ theme }) => theme.SCREENS.MD}) {
    width: 19rem;
    height: 28.875rem;
    padding: 1.5rem;

    img {
      width: 11rem;
      height: 11rem;
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
    }

    span {
      font-size: 2rem;
    }
  }
`;