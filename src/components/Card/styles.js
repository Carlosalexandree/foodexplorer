import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  width: 304px;
  height: 462px;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.DARK.D300};
  background: ${({ theme }) => theme.DARK.D200};

  p {
    color: ${({ theme }) => theme.LIGHT.L400};
    text-align: center;
  }

  span {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 1.5rem;
  }
`;