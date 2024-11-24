import "./styles/global.scss";

import { Header } from "./components/Header";
import { Portfolio } from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
