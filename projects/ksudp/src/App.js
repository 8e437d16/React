import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Navigator from "./components/Navigator";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigator />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
