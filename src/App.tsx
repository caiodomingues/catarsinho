import Header from "./components/Header";
import { UserProvider } from "./contexts/UserContext";
import Routes from "./routes";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <Header />
      <section>
        <div className="container">
          <div className="columns">
            <Routes />
          </div>
        </div>
      </section>
    </UserProvider>
  );
}

export default App;
