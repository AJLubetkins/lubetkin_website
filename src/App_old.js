import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
    return (
	    <div className="App">
	    <Header />
	    <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            </Switch>
	    <div className="main">
	    <Portfolio />
	    <Testimonials />
	    <Clients />
	    <Footer />
	    {/* Add other components/content here */}
	</div>
	    </div>
  );
}

export default App;
