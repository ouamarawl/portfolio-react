import React from 'react';
import './Vitrines.css';
import pizza1 from '../../image projets/pizza/Capture d’écran 2024-07-24 185522.jpg';
import pizza2 from '../../image projets/pizza/Capture d’écran 2024-07-24 185610.jpg';
import pizza3 from '../../image projets/pizza/Capture d’écran 2024-07-24 185708.jpg';

function Vitrine1() {
  return (
    <>
      <div className='section'>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={pizza1}
                className="d-block w-100"
                alt="Pizza 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src={pizza2}
                className="d-block w-100"
                alt="Pizza 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src={pizza3}
                className="d-block w-100"
                alt="Pizza 3"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="description">
          <h3>Description of the Pizza Website</h3>
          <p>
            This pizza website is an interactive application designed to showcase
            different pizzas, promotions, and allow users to place orders online.
            It was developed using HTML for structure and CSS for styling.
          </p>
          <div className="functionality">
            <h3>Features</h3>
            <ul>
              <li>
                <h3>User Interface:</h3>
                <p>
                  An attractive and intuitive interface with dedicated sections for
                  menus, promotions, customer testimonials, and contact information.
                </p>
              </li>
              <li>
                <h3>Responsive Design:</h3>
                <p>
                  The site is fully responsive, offering an optimal user experience
                  on all types of devices, including desktops, tablets, and
                  smartphones.
                </p>
              </li>
              <li>
                <h3>Image Gallery:</h3>
                <p>
                  An appetizing image gallery allowing users to view pizzas from
                  different angles.
                </p>
              </li>
            </ul>
          </div>
          <div className="tech">
            <h3>Technologies Used</h3>
            <ul>
              <li>
                <h3>HTML:</h3>
                <p>
                  Used to structure the different sections of the site, including
                  headers, image galleries, pizza descriptions, and order forms.
                </p>
              </li>
              <li>
                <h3>CSS:</h3>
                <p>
                  Used to style the entire site, ensuring an attractive visual
                  presentation and a consistent layout. Advanced CSS techniques,
                  such as grids and flexbox, were employed to create a modern and
                  adaptable design.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vitrine1;
