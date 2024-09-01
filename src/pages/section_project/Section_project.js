import React from 'react'
import './Section_project.css'
import moi from '../../assets/icon/wail-removebg-preview.png'

import img_projet1 from '../../assets/img/Computer_3D_Animated_Mockup__1__pizza-removebg-preview.png'
import img_projet2 from '../../assets/img/Computer_3D_Animated_Mockup__2_promotion-removebg-preview.png'
import img_projet3 from '../../assets/img/Computer_3D_Animated_Mockup_calculatrice-removebg-preview.png'
import img_projet4 from '../../assets/img/Computer_3D_Animated_Mockup__3_-removebg-preview.png'
import { Link } from "react-router-dom";
function Section_project() {
  return (
    <>
    <header>
      <div className="navbar">
        <img src={moi} alt="moi" />
        <button>
          <Link to="Page_2">
            <p>______<br />______</p>
          </Link>
        </button>
      </div>
    </header>
   <div class="section1">
    <h1>Projects section.</h1>
      <h2>A Guy-who-loves-coding.jsx</h2> 
    <h3>
      Throughout my career, I have had the opportunity to contribute to a
      <br />
      wide range of STRONG and SUCCESSFUL projects throughout my <br />
      professional journey.
    </h3>
  </div>
  <div class="container">
      <Link target="_blank" to="vitrine_1.html">
        <div class="projet1">
          <div class="titre">
            <h1>My Project 1</h1>
            <p>
              This pizza website is an interactive application designed to
              showcase different pizzas, promotions, and allow users to place
              orders online. It was developed using HTML for structure and CSS
              for styling.
            </p>
          </div>
          <div class="projet_img">
            <img
              src= {img_projet1}
              alt=""
            />
          </div>
        </div>
      </Link>
      <Link target="_blank" to="vitrine_2.html">
        <div class="projet1">
          <div class="titre">
            <h1>My Project 2</h1>
            <p>
              This real estate promotion website is an interactive application
              designed to present real estate properties and projects. It was
              developed using HTML for the structure and CSS for the style
            </p>
          </div>
          <div class="projet_img">
            <img
              src= {img_projet2}
              alt=""
            />
          </div>
        </div>
      </Link>
      <Link target="_blank" to="calculatrice.html">
        <div class="projet1">
          <div class="titre">
            <h1>My Project 3</h1>
            <p>
              This web calculator is an interactive application designed to
              perform basic arithmetic operations. It was developed using HTML
              for structure, CSS for styling, and JavaScript for calculation
              logic.
            </p>
          </div>
          <div class="projet_img">
            <img
              src={img_projet3}
              alt=""
            />
          </div>
        </div>
      </Link>
      <Link target="_blank" to="vitrine_3.html">
        <div class="projet1">
          <div class="titre">
            <h1>My Project 4</h1>
            <p>
              This pizza website is an interactive application designed to
              showcase different pizzas, promotions, and allow users to place
              orders online. It was developed using HTML for structure and CSS
              for styling.
            </p>
          </div>
          <div class="projet_img">
            <img
              src={img_projet4}
              alt=""
            />
          </div>
        </div>
      </Link>
    </div>
  </>
  )
}

export default Section_project