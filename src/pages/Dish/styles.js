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
  padding: 1.5rem 1rem 3rem;

  .back {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
    font-weight: 700;
  }

  .dish {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  img {
    width: 16.5rem;
    height: 16.5rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    text-align: center;
  }

  h1 {
    font-size: 1.7rem;
    font-weight: 500;
  }

  .info p {
    font-size: 1rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
  }

  li {
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    background: ${({ theme }) => theme.DARK.D1000};
    font-size: 0.75rem;
    font-weight: 500;
  }

  .buy {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .stepper {
    display: flex;
    align-items: center;
    gap: 0.875rem;

    button {
      display: flex;
      background: none;
      border: none;
      color: ${({ theme }) => theme.LIGHT.L100};
    }

    button:disabled {
      opacity: 0.4;
      cursor: default;
    }

    span {
      min-width: 1.75rem;
      font-size: 1.25rem;
      font-weight: 700;
      text-align: center;
    }
  }

  .add {
    height: 3rem;
    padding: 0 1.5rem;
    border: none;
    border-radius: 5px;
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.LIGHT.L100};
    font-size: 0.875rem;
    font-weight: 500;
  }

  @media (${({ theme }) => theme.SCREENS.LG}) {
    padding-top: 2.5rem;

    .back {
      font-size: 1.5rem;
    }

    .dish {
      flex-direction: row;
      gap: 3rem;
    }

    img {
      width: 24.375rem;
      height: 24.375rem;
    }

    .info {
      align-items: flex-start;
      text-align: left;
    }

    h1 {
      font-size: 2.5rem;
    }

    .info p {
      font-size: 1.5rem;
    }

    ul {
      justify-content: flex-start;
    }
  }
`;