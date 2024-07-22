import "./styles.css";

import { Avatar } from "./components/avatar";
import { Header } from "./components/header";
import { Navigation } from "./components/Navigation";
import { Logo } from "./components/logo";
import { Link } from "./components/link";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
