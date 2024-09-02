import React from 'react'
import './Sections.css'

import moi2 from '../../../../assets/icon/moi2.jpg'
function Avis() {
  return (
    <div class="avis">
      <div class="p1">
        <div class="identité">
          <img src= {moi2} alt="moi2" />

          <div class="info_p1">
            <h1>adel chibah</h1>
            <h4>Developer app</h4>
          </div>
        </div>
        <p>
          "wail is a great person, we worked together on some <br />
          projects . We met in the first module and kept <br />
          our connection since then, he's fun, energetic, and always <br />
          eager to learn more and do the best. I strongly recommend <br />
          working with"
        </p>
      </div>
      <div class="p2">
        <div class="identité">
          <img src= {moi2} alt="moi2" />

          <div class="info_p1">
            <h1>Nicolas Dupont</h1>
            <h4>backend developer</h4>
          </div>
        </div>
        <p>
          "wail is an exceptional professional, we have collaborated <br />
          on several projects. Since our first meeting, he has always <br />
          shown himself to be passionate, knowledgeable and ready <br />
          to take on complex challenges. His expertise in HTML, CSS, <br />
          C, MATLAB, and GitHub, as well as his ability to solve <br />
          problems and communicate effectively, make him a valuable asset.
          <br />
          I highly recommend working with wail."
        </p>
      </div>
    </div>
  )
}

export default Avis