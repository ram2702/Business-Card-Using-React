import React from "react";
import "../style.css";
import Twitter from "../Images/twitter.svg";
import Facebook from "../Images/facebook.svg";
import Instagram from "../Images/instagram.svg";
import Github from "../Images/g2.svg";
export default function About() {
  return (
    <>
      <div className="background">
        <div className="footerbg">
          <a href="https://twitter.com/Ram27022001" target="blank">
            <img src={Twitter} width="40px" alt="Twitter" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100055004676991"
            target="blank"
          >
            <img src={Facebook} width="40px" alt="Facebook" />
          </a>

          <a href="https://www.instagram.com/ram._.shankar/" target="blank">
            <img src={Instagram} width="40px" alt="Instagram" />
          </a>

          <a href="https://github.com/ram2702" target="blank">
            <img src={Github} width="40px" alt="Github" />
          </a>
        </div>
      </div>
    </>
  );
}
