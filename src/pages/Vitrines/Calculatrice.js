import React, { useState } from 'react';
import './Calculatrice.css'

function Calculatrice() {
  const [display, setDisplay] = useState("");

  const saisie = (value) => {
    setDisplay((prevDisplay) => (prevDisplay === "" ? value.toString() : prevDisplay + value.toString()));
  };

  const efface = () => {
    setDisplay("0");
  };

  const efface_1 = () => {
    setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
  };

  const calcule = () => {
    try {
      setDisplay((prevDisplay) => eval(prevDisplay.replace('x', '*')).toString());
    } catch (e) {
      setDisplay("erreure");
    }
  };

  return (
    <div className='section_calc'>
      <div className="calculatrice">
        <div className="display">
          <h1 id="j">{display}</h1>
        </div>

        <div className="buttons">
          <button onClick={() => saisie(7)}>7</button>
          <button onClick={() => saisie(8)}>8</button>
          <button onClick={() => saisie(9)}>9</button>
          <button onClick={efface_1} id="del">DEL</button>
          <button onClick={() => saisie(4)}>4</button>
          <button onClick={() => saisie(5)}>5</button>
          <button onClick={() => saisie(6)}>6</button>
          <button onClick={() => saisie('+')}>+</button>
          <button onClick={() => saisie(1)}>1</button>
          <button onClick={() => saisie(2)}>2</button>
          <button onClick={() => saisie(3)}>3</button>
          <button onClick={() => saisie('-')}>-</button>
          <button onClick={() => saisie('.')}>.</button>
          <button onClick={() => saisie(0)}>0</button>
          <button onClick={() => saisie('/')}>/</button>
          <button onClick={() => saisie('x')}>x</button>
        </div>

        <div className="last">
          <button onClick={efface} id="b1">c</button>
          <button onClick={calcule} id="b2">=</button>
        </div>
      </div>

      <div className="discription">
        <h3>Description of the Web Calculator</h3>
        <p>
            This web calculator is an interactive application designed to perform basic arithmetic operations.<br />
            It was developed using HTML for structure, CSS for styling, and JavaScript for calculation logic.
        </p>
        <div className="foncyionalité">
            <h3>Features</h3>
            <ul>
                <li>
                    <h3>User Interface:</h3>
                </li>
                <p>
                    An intuitive and user-friendly interface with buttons for digits and basic arithmetic operations.<br />
                    The display screen shows the current input and results.
                </p>
                <li>
                    <h3>Responsive Design:</h3>
                </li>
                <p>
                    The calculator is fully responsive, offering an optimal user experience on all types of devices,<br />
                    including desktops, tablets, and smartphones.
                </p>
                <li>
                    <h3>Calculation Logic:</h3>
                </li>
                <p>
                    JavaScript is used to handle the calculation logic, ensuring accurate and fast results for all basic operations.<br />
                </p>
            </ul>
        </div>
        <div className="tech">
            <h3>Technologies Used</h3>
            <ul>
                <li>
                    <h3>HTML:</h3>
                </li>
                <p>
                    Used to structure the different parts of the calculator, including the display screen and buttons.<br />
                </p>
                <li>
                    <h3>CSS:</h3>
                </li>
                <p>
                    Used to style the calculator, ensuring an attractive visual presentation and a consistent layout.<br />
                    Advanced CSS techniques, such as flexbox, were employed to create a modern and adaptable design.
                </p>
                <li>
                    <h3>JavaScript:</h3>
                </li>
                <p>
                    Used to implement the calculation logic, ensuring the functionality of the calculator's arithmetic operations.<br />
                </p>
            </ul>
        </div>
      </div>
      
    </div>
  );
}

export default Calculatrice;
