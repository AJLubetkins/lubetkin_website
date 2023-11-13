import React, { useState } from 'react'
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


function App() {
    const [currentPage, setCurrentPage] = useState('home'); // State to track the current page

    const renderPage = (page) => {
	setCurrentPage(page);
    };

    return (
	<div>
	    <Header renderPage={renderPage} />
	    {currentPage === 'home' && <Home />}
	    {currentPage === 'about' && <About />}
	    {currentPage === 'contact' && <Contact />}
	    <Footer />
	</div>
    );
}

export default App;
