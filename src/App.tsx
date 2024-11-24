import "./styles/global.scss";

import { Header } from "./components/Header";
import { Portfolio } from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Portfolio />
        {/* <Footer /> */}
      </main>
    </div>
  );
}

export default App;
