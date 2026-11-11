import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  max-width: 90rem;
  margin-inline: auto;
`;

export const Content = styled.main`
  flex: 1;
  width: 100%;
  max-width: 72rem;
  margin-inline: auto;
  padding: 2rem 1rem 3rem;

  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: 500;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  img {
    width: 4.5rem;
    height: 4.5rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }

  .info p {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.6rem;
    font-size: 1.25rem;
  }

  strong {
    font-weight: 500;
  }

  span {
    color: ${({ theme }) => theme.LIGHT.L500};
    font-size: 0.75rem;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .actions button {
    display: flex;
    padding: 0;
    background: none;
    border: none;
    color: ${({ theme }) => theme.LIGHT.L100};
  }

  .actions .remove {
    color: ${({ theme }) => theme.COLORS.TOMATO_400};
    font-size: 0.75rem;
  }

  .total {
    margin-top: 2rem;
    font-size: 1.25rem;
    font-weight: 500;
  }

  .empty {
    font-size: 1rem;
  }

  .empty a {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }
`;