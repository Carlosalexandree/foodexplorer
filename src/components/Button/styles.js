import { styled } from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $hasicon }) => (!$hasicon ? "" : "gap: 0.375rem;")};
  width: ${({ $istext }) => (!$istext ? "100%" : "fit-content")};
  padding-inline: ${({ $istext }) => (!$istext ? "1rem" : "none")};

  color: ${({ theme }) => theme.LIGHT.L100};
  background: ${({ theme, $istext }) =>
    !$istext ? theme.COLORS.TOMATO_200 : "none"};

  transition: all 0.3s;
  :root {
    font-size: 62.5%;
  }

  &:hover {
    transform: scale(${({ $istext }) => ($istext ? "1.03" : "")});
    cursor: pointer;
  }

  height: 3rem;
  width: 21.75rem;
  border-radius: 0.3125rem;
  border: none;
`;
