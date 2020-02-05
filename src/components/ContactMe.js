import React from "react";

function ContactMe() {
  function contactBox(site, fa, link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="contactBox">
          <i class={fa}></i>
          <p>{site}</p>
        </div>
      </a>
    );
  }
  return (
    <div className="contactMe">
      <h1>Contact Me</h1>
      <div className="contactBoxContainer">
        {contactBox(
          "Email",
          "fas fa-envelope-square fa-2x",
          "mailto:jhartmann26@icloud.com"
        )}
        {contactBox(
          "GitHub",
          "fab fa-github-square fa-2x",
          "https://github.com/johnhartmann26"
        )}
        {contactBox(
          "LinkedIn",
          "fab fa-linkedin fa-2x",
          "https://www.linkedin.com/in/john-hartmann-a64794159/"
        )}
      </div>
    </div>
  );
}

export default ContactMe;
