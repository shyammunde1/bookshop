import "./App.css";
import { Footer, Header } from "./components";
import { RouteLayout } from "./routes/RouteLayout";

function App() {
  return (
    <div className="App dark:bg-dark">
      <Header />
      <RouteLayout />
      <Footer />
    </div>
  );
}

export default App;
