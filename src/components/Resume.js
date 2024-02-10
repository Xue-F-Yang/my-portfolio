import React from 'react';

const Resume = () => {
  const proficiencies = [
    // ... your proficiencies here
  ];

  return (
    <section id="resume">
      <a href="path-to-resume.pdf" download>Download Resume</a>
      <ul>
        {proficiencies.map((proficiency, index) => (
          <li key={index}>{proficiency}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;