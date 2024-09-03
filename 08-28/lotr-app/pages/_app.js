import GlobalStyle from "../styles";
import { createGlobalStyle } from "styled-components";

const theme = "dark";

export default function App({ Component, pageProps, theme }) {
  return (
    <>
      <GlobalStyle theme={theme} />
      <Component {...pageProps} />
    </>
  );
}
