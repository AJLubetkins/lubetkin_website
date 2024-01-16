import React, { useState, useEffect } from 'react';
import '../styles/Portfolio.css';
import portfolioItems from './portfolioData'; // Import the JSON or JavaScript data

function Portfolio() {
  // State to manage the standalone video panel
    const [showVideoPanel, setShowVideoPanel] = useState(false);
    const [videoPanelItem, setVideoPanelItem] = useState('');

    let screenWidth = window.screen.width - (.1 * window.screen.width);
    
    // Calculate height based on the width (480/854)
    const heightRatio = 480 / 854;
    const height = screenWidth * heightRatio;
    console.log({screenWidth, height})

  const openVideoPanel = (item) => {
    setShowVideoPanel(true);
    setVideoPanelItem(item);
  };

  const closeVideoPanel = () => {
    setShowVideoPanel(false);
      setVideoPanelItem(null);
  };

    const extractVideoId = (url) => {
	const match = url.match(/[?&]v=([^&]+)/);
	return match ? match[1] : null;
    };
    
    console.log(portfolioItems[3].url.split('?v='))

/* unused code

            <iframe
              width="560"
              height="315"
              src={videoPanelUrl}
              title="Video Panel"
              frameBorder="0"
              allowFullScreen
            ></iframe>

*/

    
  // ... The rest of your Portfolio component remains unchanged

  return (
    <section className="portfolio" id="portfolio">
	<div className="portfolio-showreel">
        <iframe
            width={screenWidth}
            height={height}
            src={`https://player.vimeo.com/video/${portfolioItems[0].url.split('.com/')[1]}`}
          title="Showreel"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="portfolio-grid">
          {portfolioItems
	   .filter((item) => item.title !== 'Clip Reel') // Filter out the showreel video
	   .map((item) => (
            // Render portfolio items
	    <div key={item.id} className="portfolio-item">
		<div
		    className="video-thumbnail"
		    onClick={() => openVideoPanel(item)}
		>
		    <img
			src={`https://img.youtube.com/vi/${extractVideoId(item.url)}/hqdefault.jpg`}
			alt={item.title}
		    />
		    <div className="overlay">
			<p>{item.title}</p>
		    </div>
		</div>
            </div>
        ))}
      </div>
      {showVideoPanel && (
          // Render the video panel
	  <div className="video-panel">
	      <div className="video-panel-inner">
		  <div className="video-container">
		      <div dangerouslySetInnerHTML={{ __html: `<iframe width="640" height="360" src="https://www.youtube.com/embed/${extractVideoId(videoPanelItem.url)}" frameborder="0" allowfullscreen ></iframe>` }} />
		  </div>
		  <div className="info-container">
		      <h2>{videoPanelItem.title}</h2>
		      <p>{videoPanelItem.description}</p>
		  </div>
		  
		  <button onClick={closeVideoPanel}>Close</button>
              </div>
          </div>
      )}
    </section>
  );
}

export default Portfolio;
