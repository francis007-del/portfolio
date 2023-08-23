import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Naveed</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/in/naveed-bhat-88054623a/">
          <LinkedInIcon />
          </a>
          <a href="https://github.com/francis007-del">
          <GithubIcon />
          </a>
          <a href="https://drive.google.com/file/d/1eT1BOToUpkFzt7BWXu7tJirOePEzLIBn/view?usp=drive_link">
          <EmailIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM,
               BootStrap, MaterialUI, Yarn, TailwindCSS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS,
              MySQL, MongoDB, FireBase
            </span>
          </li>
          <li className="item">
            <h2>Commpetitive Programming</h2>
            <span>
              Rated  1770+ On Codeforces (ALL INDIA RANK:500)
            </span>
            <br/>
            <span>
              Rated 2400+(Gold) on HackrRank
            </span>
            <br/>
            <span>
              Global Rank 44 in Newton School CodeCrush
            </span>
            <br/>
            <span>
              Global Rank 496 in Google Kickstart-G(2022)
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, C, C++</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
