import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
	  <Header />
	  <div className="main">
	  <Portfolio />
	  <Testimonials />
	  <Clients />
	  <About />
	  <Contact />
	  <Footer />
	  {/* Add other components/content here */}
      </div>
    </div>
  );
}

export default App;
