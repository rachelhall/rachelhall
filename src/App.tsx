import "./styles/global.scss";

import { Header } from "./components/Header";
import { Portfolio } from "./components/Portfolio";
import { Nav } from "./components/Nav";
import { pages } from "./pages";
// import { useState } from "react";

function App() {
  // const [theme, setTheme] = useState("light");

  return (
    <div className="App">
      <main>
        <Nav pages={pages} />
        <Header />
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
