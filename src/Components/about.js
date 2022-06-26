import React from "react";
import "../style.css";
function About() {
  return (
    <>
      <div className="background">
        <div className="cardtext1">
          <h3 className="abouttitle">About</h3>
          <p className="abouttext">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
          <h3 className="interesttitle">Interests</h3>
          <p className="interesttext">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
    </>
  );
}
export default About;
