import React from 'react';
import './Testimonial.css'

const Testimonial = () => (
    <section id="testimonial">
      <h2>Testimonial</h2>
      <div className="testimonial-content">
        <p>"The design quality, flexibility, documentation, and support is at all places excellent..."</p>
        <div className="client-info">
          <img src="path/to/client-image.png" alt="Client" />
          <p>Josef Sharon</p>
        </div>
      </div>
    </section>
  );

export default Testimonial;