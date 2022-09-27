import React from "react";
import logo from "./logo.svg";
import { Nav } from "./components/Nav";
import { pages } from "./pages";

import "./styles/global.scss";
import { Header } from "./components/Header";
import { Portfolio } from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
