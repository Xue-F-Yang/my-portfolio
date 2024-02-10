import React from 'react';
import profilePic from '../images/profilepic.jpg'; // Import the image

const About = () => {
  return (
    <section id="about">
      <img src={profilePic} alt="Developer" /> {/* Use the imported image */}
      <p>My name is Xue Yang, .</p>
    </section>
  );
};

export default About;