import './App.css';
import NavBar from './components/navbar';
import Header from './components/header';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
