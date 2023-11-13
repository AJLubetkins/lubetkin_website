import React from 'react';
import '../styles/Home.css';

import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Clients from './Clients';

function Home() {
    return (
	<div className="main">
	    <Portfolio />
	    <Testimonials />
	    <Clients />
	</div>
    )
}

export default Home;
