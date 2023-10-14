import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Input } from "./components/Input";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Footer />
      <Contact />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
