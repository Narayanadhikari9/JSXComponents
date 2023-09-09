import Header from "./components/header.jsx";
import Navigation from "./components/navigation.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";
import "./App.css";
function App() {
  return (
    <>
      <div>
        <Header />
        <Navigation />
        <Home />
        <About />
        <Contact />
      </div>
    </>
  );
}
export default App;
