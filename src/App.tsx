import Header from "./components/Header";
import { CartProvider } from "./contexts/CartContext";
import Routes from "./routes";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Header />
      <section>
        <div className="container">
          <div className="columns">
            <Routes />
          </div>
        </div>
      </section>
    </CartProvider>
  );
}

export default App;
