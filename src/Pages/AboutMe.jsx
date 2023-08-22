import React from "react";
import aboutme from "../Pages/Home/images/aboutme.png"
import MyPortfolio from "./Home/MyPortfolio"; 
import { Link, NavLink } from "react-router-dom";

export default function AboutMe() {

    var myport = <MyPortfolio/>

    return (

      <section id="AboutMe" className="about--section">

        <div className="about--section--img">
          <img src={aboutme} alt="About Me" />
        </div>

        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">

            <p className="section--title">Know more</p>

            <h1 className="skills-section--heading">About Me</h1>

            <p className="hero--section-description">
            I'm a <span style={{fontWeight:"bold"}}> Frontend Web Developer </span>  building the Front-end of Websites
             and Web Applications that leads to the success of the overall product. 
             Check out some of my work in the <span style={{fontWeight:"bold"}}>Portfolio</span> section.
            </p>
        
            <p className="hero--section-description">
            I also like sharing content related to the stuff that I have learned over the years in Web Development 
            so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <span><a style={{textDecoration:"none", fontWeight:"bold", color:"blue"}} href="https://l.instagram.com/?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fprabhat-mishra-4b2a2326b&e=AT3xhrDECZSl0GAzFcgUC5jVzrtv9Q6BR5qESRIcSY0q1GLXhkrK4ovwbhYMM-2XGI7QEy-dt3kSiyFhrBnAg0VgU6hPDPZgw5Kw7vbdeywT9J-lDph3Uc5uoIPcl7ITC9q6TFIeeOPYbBFgivQIig3Me3ctyw">Linkedin</a></span> where 
            I post useful content related to Web Development and Programming.
            </p>

            <p className="hero--section-description">
            I'm open to Job opportunities where I can contribute, learn and grow.
             If you have a good opportunity that matches my skills and experience 
             then don't hesitate to contact me.
            </p>

          </div>
        </div>
      </section>

    );
  }