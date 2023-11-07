import React, { useState, useEffect } from 'react';
import '../styles/Portfolio.css';
import portfolioItems from './portfolioData'; // Import the JSON or JavaScript data

function Portfolio() {
  // State to manage the standalone video panel
  const [showVideoPanel, setShowVideoPanel] = useState(false);
  const [videoPanelUrl, setVideoPanelUrl] = useState('');

  const openVideoPanel = (url) => {
    setShowVideoPanel(true);
    setVideoPanelUrl(url);
  };

  const closeVideoPanel = () => {
    setShowVideoPanel(false);
      setVideoPanelUrl('');
  };

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
          width="854"
          height="480"
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
		    onClick={() => openVideoPanel(item.url)}
		>
		    <img
			src={`https://img.youtube.com/vi/${item.url.split('?v=')[1]}/0.jpg`}
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
		  	      <div dangerouslySetInnerHTML={{ __html: `<iframe width="640" height="360" src="https://www.youtube.com/embed/${videoPanelUrl.split('?v=')[1]}" frameborder="0" allowfullscreen ></iframe>` }} />

            <button onClick={closeVideoPanel}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
