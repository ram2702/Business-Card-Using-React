import React from "react";
import ProfilePic from "../Images/Ponmudi_Selfie.jpg";
import "../style.css";
import Emailicon from "../Images/icons8-mail-90.png";
import Socialicon from "../Images/linkedin.svg";
function Info() {
  return (
    <>
      <div className="background">
        <img src={ProfilePic} alt="profilepic" className="profilepic" />
        <div className="cardtext">
          <h1 className="name">Ramsankar I</h1>
          <h3 className="designation">Front-End Developer</h3>
          <h4 className="website">
            <a href="https://github.com/ram2702"> github.com/ram2702</a>
          </h4>
          <a
            href="mailto:ramiyyanath@gmail.com?subject = Feedback body = Message"
            target="blank"
          >
            <button className="emailbutton" type="button">
              <img src={Emailicon} width="20px" alt="email" />
              Email
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/ram-sankar-59464b1a5/"
            target="blank"
          >
            <button className="socialbutton" type="button">
              <img src={Socialicon} width="20px" alt="social" />
              Linkedin
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
export default Info;
