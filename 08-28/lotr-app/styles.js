import { createGlobalStyle, css } from "styled-components";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"], style: ["normal", "italic"] });

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${lora.style.fontFamily}, serif;
    @media (prefers-color-scheme: dark) {
      background-color: var(--color-earth);
      color: var(--color-clouds);
    }
      
    ${({ theme }) =>
      theme === "dark" &&
      css`
        background-color: var(--color-earth);
        color: var(--color-clouds);
      `}
  }`;

export default GlobalStyle;
