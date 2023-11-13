import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';
import testimonials from './testimonialsData.js'
import '../styles/Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
	<Carousel showStatus={false} showThumbs={false} emulateTouch={true} infiniteLoop={true} showArrows={true}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <p className="author">{testimonial.name}</p>
              <p className="position">{testimonial.position}</p>
	      <p className="content">{testimonial.quote}</p>

          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default Testimonials;
