import Header from "./components/header.jsx";
import Navigation from "./components/navigation.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Home />
      <Contact />
      <About />
    </div>
  );
}
export default App;
