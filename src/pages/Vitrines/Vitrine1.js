import React from 'react'
import './Vitrines.css'

function Vitrine1() {
    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"
  />
  return (
  <>
    <div className='section'>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="image projets/pizza/Capture d’écran 2024-07-24 185522.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="image projets/pizza/Capture d’écran 2024-07-24 185610.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="image projets/pizza/Capture d’écran 2024-07-24 185708.jpg"
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
        <h3>Description of the Pizza Website</h3>
        <p>
          This pizza website is an interactive application designed to showcase
          different pizzas, promotions, and allow users to place orders online.
          It was developed using HTML for structure and CSS for styling.
        </p>
        <div class="foncyionalité">
          <h3>Features</h3>
          <ul>
            <li>
              <h3>User Interface:</h3>
            </li>
            <p>
              An attractive and intuitive interface with dedicated sections for
              menus, promotions, customer testimonials, and contact information.
            </p>
            <li>
              <h3>Responsive Design:</h3>
            </li>
            <p>
              The site is fully responsive, offering an optimal user experience
              on all types of devices, including desktops, tablets, and
              smartphones.
            </p>
            <li>
              <h3>Image Gallery:</h3>
            </li>
            <p>
              An appetizing image gallery allowing users to view pizzas from
              different angles.
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
              headers, image galleries, pizza descriptions, and order forms.
            </p>
            <li>
              <h3>CSS:</h3>
            </li>
            <p>
              Used to style the entire site, ensuring an attractive visual
              presentation and a consistent layout. Advanced CSS techniques,
              such as grids and flexbox, were employed to create a modern and
              adaptable design.
            </p>
          </ul>
        </div>
      </div>
    </div>
  </>


  )
}

export default Vitrine1