import { createGlobalStyle, css } from "styled-components";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${lora.style.fontFamily}, system-ui;
    @media (prefers-color-scheme: dark) {
      background-color: var(--color-earth);
      color: var()(--color-clouds);
    }
      
    ${({ theme }) =>
      theme === "dark" &&
      css`
        background-color: var(--color-earth);
        color: var(--color-clouds);
      `}
  }`;
