
import './App.css';
import 'animate.css';
import '../src/asserts/css/main/body.css'
import '../src/asserts/css/main/shared.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { TechSkills } from './components/TechSkills';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <TechSkills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
