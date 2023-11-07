import React, { useState } from 'react';
import '../styles/Portfolio.css';

function Portfolio() {
  // Sample data for portfolio videos (replace with actual data)
  const portfolioItems = [
    {
      id: 1,
      title: 'Showreel',
      mediaUrl: 'https://www.youtube.com/watch?v=your-showreel-video-id',
    },
    {
      id: 2,
      title: 'Video 1',
      mediaUrl: 'https://www.youtube.com/watch?v=your-video-1-id',
    },
    // Add more portfolio items as needed
  ];

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

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-showreel">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/your-showreel-video-id"
          title="Showreel"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-item">
            <div
              className="video-thumbnail"
              onClick={() => openVideoPanel(item.mediaUrl)}
            >
              <img
                src={`https://img.youtube.com/vi/${item.mediaUrl.split('?v=')[1]}/0.jpg`}
                alt={item.title}
              />
              <div className="overlay">
                <p>{item.title}</p>
              </div>
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      {showVideoPanel && (
        <div className="video-panel">
          <div className="video-panel-inner">
            <iframe
              width="560"
              height="315"
              src={videoPanelUrl}
              title="Video Panel"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <button onClick={closeVideoPanel}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
