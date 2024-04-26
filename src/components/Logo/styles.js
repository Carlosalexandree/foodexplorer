import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0.625rem;
  justify-content: center;

  & img {
    margin-top: -12px;
  }

  & div {
    display: flex;
    flex-direction: column;
    line-height: 110%;

    & span {
      align-self: flex-end;
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }
`;
