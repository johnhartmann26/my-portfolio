import React from "react";

function Skills() {
  function skillBox(skill, fa) {
    return (
      <div className="skillBox">
        <i class={fa}></i>
        <p>{skill}</p>
      </div>
    );
  }
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skillBoxContainer">
        {skillBox("HTML5", "fab fa-html5 fa-5x")}
        {skillBox("CSS3", "fab fa-css3-alt fa-5x")}
        {skillBox("JS&ES6", "fab fa-js-square fa-5x")}
        {skillBox("React.js", "fab fa-react fa-5x")}
        {skillBox("Git/GitHub", "fab fa-git-alt fa-5x")}
        {skillBox("NPM", "fab fa-npm fa-5x")}
        {skillBox("Bootstrap", "fab fa-bootstrap fa-5x")}
        {skillBox("Fast learner", "fas fa-plus-circle fa-5x")}
      </div>
    </div>
  );
}

export default Skills;
