import React from 'react';
import '../styles/Clients.css';

// Assuming the images are located in the 'client_logos' directory
import Truly from '../assets/client_logos/Truly.png';
import AlJazeera from '../assets/client_logos/al_jazeera.png';
import Boxxer from '../assets/client_logos/boxxer.png';
import Channel4 from '../assets/client_logos/channel_4.png';
import DenOfGeek from '../assets/client_logos/den_of_geek.jpg';
import GamesRadarPlus from '../assets/client_logos/games_radar_plus.png';
import LondonActionFestival from '../assets/client_logos/london_action_festival.png';
import NowThis from '../assets/client_logos/now_this.png';
import PBS from '../assets/client_logos/pbs.png';
import Remitly from '../assets/client_logos/remitly.png';
import ViceLandLogoTransparent from '../assets/client_logos/vice-land-logo-png-transparent.png';
import ViceLandLogo from '../assets/client_logos/vice-land-logo.png';

// You can now use these imported variables in your code, for example:

const logoImages = [
  Truly,
  AlJazeera,
  Boxxer,
  Channel4,
  DenOfGeek,
  GamesRadarPlus,
  LondonActionFestival,
  NowThis,
  PBS,
  Remitly,
  ViceLandLogoTransparent,
  //ViceLandLogo,
];

function Clients() {
  return (
    <section className="clients" id="clients">
      <h2>Who I've Worked With</h2>
	<div className="client-grid">
	    {logoImages.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}

export default Clients;
