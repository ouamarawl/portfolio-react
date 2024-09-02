import React from 'react'
import './Sections.css'
import moi from '../../../../assets/icon/wail-removebg-preview.png'

function Section2() {
  return (
    <div className="section2">
      <div className="discrip">
        <h2>hello again</h2>

        <p>
          I'm Passionate Frontend Developer,<br />
          Experienced in building exceptional <br />
          websites using Html, Css, and other <br />
          web development technologies.
        </p>
      </div>

      <div class="icon">
      <img src={moi} alt="moi" />
      </div>
    </div>
  )
}

export default Section2

