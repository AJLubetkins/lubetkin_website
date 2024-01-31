import React, { useState, useEffect, useRef } from 'react';

const ResponsiveIframe = (url) => {
    const [iframeSize, setIframeSize] = useState({
	width: window.innerWidth - (.1 * window.innerWidth),
	height: (window.innerWidth - (.1 * window.innerWidth)) * ( 480 / 854)
    });

    const iframeRef = useRef(null);
    
    useEffect(() => {
	const handleResize = () => {
	    setIframeSize({
		width: window.innerWidth - (.1 * window.innerWidth),
		height: (window.innerWidth - (.1 * window.innerWidth)) * ( 480 / 854)
	    });
	};
	
	// Set the resize listener
	window.addEventListener('resize', handleResize);
	
	// Call the handler right away so state gets updated with initial window size
	handleResize();
	
	// Remove event listener on cleanup
	return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount
    
    return (
	<iframe
	    ref={iframeRef}
	    src={url.url}
	    width={iframeSize.width}
	    height={iframeSize.height}
	    style={{ border: 'none' }} // Add any additional styles if needed
	    title="Showreel"
            frameBorder="0"
            allowFullScreen
	/>
    );
    
}

export default ResponsiveIframe;
