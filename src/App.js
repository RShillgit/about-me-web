import './App.css';
import NavBar from './components/navbar';
import Header from './components/header';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='page-content'>
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
