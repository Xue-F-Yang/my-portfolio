import React from 'react';

const Portfolio = () => {
  // Assume projects is an array of project objects
  const projects = [
    // ... your projects here
  ];

  return (
    <section id="portfolio">
      {projects.map((project, index) => (
        <div key={index}>
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <a href={project.deployedLink}>Live Demo</a>
          <a href={project.githubLink}>GitHub Repo</a>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;