    import React from 'react'
    import './Vitrines.css'
    function VItrine4() {
      return (
        <div className='section' style={{ backgroundColor: '#ec6090' }}>

            <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="image projets/site-react/Capture d’écran 2024-08-07 170536.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="image projets/site-react/Capture d’écran 2024-08-07 170701.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="image projets/site-react/Capture d’écran 2024-08-07 170846.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="image projets/site-react/Capture d’écran 2024-08-07 170940.jpg"
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
        <h3>Description of the React Game Website</h3>
        <p>
          This game website is an interactive application designed to provide an immersive and engaging gaming experience.<br />
          It was developed using React for the dynamic user interface and CSS for styling.
        </p>
        <div class="foncyionalité">
          <h3>Features</h3>
          <ul>
            <li>
              <h3>User Interface:</h3>
            </li>
            <p>
              An elegant and intuitive interface with dedicated sections for games, game details, personalized recommendations, and user profile customization options.<br />
            </p>
            <li>
              <h3>Responsive Design:</h3>
            </li>
            <p>
              The site is fully responsive, ensuring an optimal user experience across all types of devices, including desktops, tablets, and smartphones.<br />
            </p>
            <li>
              <h3>Game Catalog:</h3>
            </li>
            <p>
              A rich catalog of games allowing users to browse titles by genre, popularity, and new releases, with detailed descriptions and images for each game.<br />
            </p>
            <li>
              <h3>Social Features:</h3>
            </li>
            <p>
              Integration of social features such as account creation, favorite games tracking, achievement sharing, and interaction with other players through forums and comments.<br />
            </p>
          </ul>
        </div>
        <div class="tech">
          <h3>Technologies Used</h3>
          <ul>
            <li>
              <h3>React:</h3>
            </li>
            <p>
              Used to develop the dynamic and interactive user interface of the site, enabling smooth transitions and efficient state management.<br />
            </p>
            <li>
              <h3>CSS:</h3>
            </li>
            <p>
              Used to style the entire site, ensuring an attractive visual presentation and modern design. Advanced CSS techniques, such as Flexbox and Grid, were employed to create an adaptable and responsive layout.<br />
            </p>
          </ul>
        </div>
      </div>

        </div>
      )
    }
    
    export default VItrine4