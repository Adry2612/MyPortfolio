import './App.css';

import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Proyects from './components/Proyects';
import AboutMe from "./components/AboutMe";
import Tecnologies from './components/Tecnologies';
import Footer from './components/Footer';


function App() {
  
  return (
    <div className="App">
      <Header />
      <Presentation />
      <AboutMe />
      <Proyects />
      <Tecnologies />
      <Footer />
    </div>
  );
}

export default App;
