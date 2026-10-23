import styled from "styled-components";

export const Container = styled.section `

width: 100%;
max-width: 1120px;
align-self: center;
padding: 0 16px;
margin: 24px 0;

h2 {
font-size: 1.125rem;
font-weight: 500;
margin-bottom: 16px;
}

.wrapper {
position: relative;
}

.list {
display: flex;
gap: 16px;
overflow-x: auto;
scroll-behavior: smooth;
scroll-width: none;
}

.list::-webkit-scrollbar {
  display: none;
}

.list > * {
  flex-shrink: 0;
}

.arrow {
    display: none;
}
    
@media (${({ theme }) => theme.SCREENS.MD}) {
    h2 {
      font-size: 2rem;
    }

    .arrow {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      bottom: 0;
      width: 56px;
      border: none;
      color: ${({ theme }) => theme.LIGHT.L100};
      font-size: 2rem;
      z-index: 1;
    }

    .left {
      left: 0;
      background: linear-gradient(270deg, rgba(0, 10, 15, 0) 0%, #000a0f 100%);
    }

    .right {
      right: 0;
      background: linear-gradient(90deg, rgba(0, 10, 15, 0) 0%, #000a0f 100%);
    }
  }
`
