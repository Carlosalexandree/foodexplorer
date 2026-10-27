import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 6.25rem;
  padding-inline: 1rem;
  background: ${({ theme }) => theme.DARK.D600};

  @media (${({ theme }) => theme.SCREENS.LG}) {
    height: 104px;
  }

  .mobile-menu {
    position: fixed;
    inset: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.DARK.D400};

    .top {
      display: flex;
      align-items: center;
      gap: 1rem;
      height: 6.25rem;
      padding-inline: 1rem;
      background: ${({ theme }) => theme.DARK.D600};
      font-family: "Roboto", sans-serif;
      font-size: 1.25rem;
    }

    .top button,
    .exit {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      color: ${({ theme }) => theme.LIGHT.L100};
    }

    .body {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 2.25rem 1.75rem;
    }

    .search-mobile {
      display: flex;
      align-items: center;
      gap: 14px;
      height: 3rem;
      padding: 0 14px;
      border-radius: 5px;
      background: ${({ theme }) => theme.DARK.D900};
      color: ${({ theme }) => theme.LIGHT.L500};

      input {
        flex: 1;
        height: 100%;
        background: transparent;
        color: ${({ theme }) => theme.LIGHT.L100};
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
      }

      input::placeholder {
        color: ${({ theme }) => theme.LIGHT.L500};
      }
    }

    .exit {
      padding-bottom: 0.625rem;
      border-bottom: 1px solid ${({ theme }) => theme.DARK.D1000};
      font-size: 1.5rem;
      font-weight: 300;
    }

    @media (${({ theme }) => theme.SCREENS.LG}) {
      display: none;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  max-width: 70rem;
  height: 100%;
  margin-inline: auto;

  button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    color: ${({ theme }) => theme.LIGHT.L100};
  }

  .menu {
    justify-self: start;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 11px;

    svg {
      color: ${({ theme }) => theme.COLORS.CAKE_100};
    }

    h1 {
      font-family: "Roboto", sans-serif;
      font-size: 1.125rem;
      font-weight: 700;
      white-space: nowrap;
    }
  }

  .cart {
    position: relative;
    justify-self: end;

    span {
      position: absolute;
      top: -6px;
      right: -8px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 50%;
      background: ${({ theme }) => theme.COLORS.TOMATO_200};
      font-size: 0.75rem;
      font-weight: 500;
    }
  }

  .search,
  .orders,
  .signout {
    display: none;
  }

  @media (${({ theme }) => theme.SCREENS.LG}) {
    display: flex;
    gap: 2rem;

    .menu,
    .cart {
      display: none;
    }

    .logo h1 {
      font-size: 1.5rem;
    }

    .search {
      display: flex;
      flex: 1;
      align-items: center;
      gap: 14px;
      height: 3rem;
      padding: 0 14px;
      border-radius: 5px;
      background: ${({ theme }) => theme.DARK.D900};
      color: ${({ theme }) => theme.LIGHT.L500};

      input {
        flex: 1;
        height: 100%;
        background: transparent;
        color: ${({ theme }) => theme.LIGHT.L100};
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
      }

      input::placeholder {
        color: ${({ theme }) => theme.LIGHT.L500};
      }
    }

    .orders {
      display: flex;
      justify-content: center;
      gap: 10px;
      width: 13.5rem;
      height: 3.5rem;
      border-radius: 5px;
      background: ${({ theme }) => theme.COLORS.TOMATO_100};
      font-size: 0.875rem;
      font-weight: 500;
    }

    .signout {
      display: flex;
    }
  }
`;