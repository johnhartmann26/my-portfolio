import React from "react";
// project images
import houstonWeatherPNG from "./images/houston-weather.png";
import cshyperPNG from "./images/cshyper.png";

function Projects() {
  function projectBox(name, img, link, src, desc, tech) {
    return (
      <div className="projectContainer">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={img} alt={name} className="projectIMG" />
        </a>
        <div style={{ width: "25rem" }}>
          <h2>{name}</h2>
          <h3>{desc}</h3>
          <h3>Technologies used: {tech}</h3>
        </div>
      </div>
    );
  }
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projectsContainer">
        {projectBox(
          "Weather App",
          houstonWeatherPNG,
          "https://houston-weather.netlify.com/",
          "https://github.com/johnhartmann26/react-weather",
          "A houston weather app using DarkSky's weather API. First project that accessed a third party API.",
          "React, CSS3, HTML5, DarkSky API"
        )}
        {projectBox(
          "csHyper",
          cshyperPNG,
          "https://cshyper.netlify.com",
          "https://github.com/johnhartmann26/cshyper",
          "A ranking system for Counter Strike teams with drag and drop support. Connects to Google Firebase.",
          "React, CSS3, HTML5, Firebase"
        )}
      </div>
    </div>
  );
}

export default Projects;
