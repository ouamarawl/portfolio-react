import React from 'react'
import './Vitrines.css'
import promo1 from '../../image projets/promotion/Capture d’écran 2024-07-24 185008.jpg'
import promo2 from '../../image projets/promotion/Capture d’écran 2024-07-24 185138.jpg'
import promo3 from '../../image projets/promotion/Capture d’écran 2024-07-24 185234.jpg'
function Vitrine2() {
  return (
    <div className='section'>
    <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src= {promo1}
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src={promo2}
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src={promo3}
          class="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div class="discription">
    <h3>Description of the Real Estate Promotion Website</h3>
    <p>
      This real estate promotion website is an interactive application
      designed to showcase properties and real estate projects.<br />
      It was developed using HTML for structure and CSS for styling.
    </p>
    <div class="foncyionalité">
      <h3>Features</h3>
      <ul>
        <li>
          <h3>User Interface:</h3>
        </li>
        <p>
          An elegant and intuitive interface with dedicated sections for
          properties, project details, client testimonials, and contact
          information.<br />
        </p>
        <li>
          <h3>Responsive Design:</h3>
        </li>
        <p>
          The site is fully responsive, offering an optimal user experience
          on all types of devices, including desktops, tablets, and
          smartphones.<br />
        </p>
        <li>
          <h3>Image Gallery:</h3>
        </li>
        <p>
          A rich image gallery allowing users to view properties from
          different angles.<br />
        </p>
      </ul>
    </div>
    <div class="tech">
      <h3>Technologies Used</h3>
      <ul>
        <li>
          <h3>HTML:</h3>
        </li>
        <p>
          Used to structure the different sections of the site, including
          headers, image galleries, property descriptions, and contact
          forms.<br />
        </p>
        <li>
          <h3>CSS:</h3>
        </li>
        <p>
          Used to style the entire site, ensuring an attractive visual
          presentation and a consistent layout. Advanced CSS techniques,
          such as grids and flexbox, were employed to create a modern and
          adaptable design.<br />
        </p>
      </ul>
    </div>
  </div>
     
    </div>
  )
}

export default Vitrine2