import React from 'react'
import './Sections.css'
import moi from '../../../../assets/icon/wail-removebg-preview.png'
function Formulaire() {
  return (
    <div class="form">
      <div class="logo">
        <h1>
          I have got just what <br />
          you need, lets Talk !
        </h1>
        <img src= {moi} alt="moi" />
      </div>
      <div class="formulaire" id="order">
        <h1>Registration Form</h1>
        <form class="order-form">
          <label for="name">nom:</label>
          <input type="text" id="name" name="name" required />
          <label for="first name">prénom:</label>
          <input type="text" id=" first name" name="first name" />
          <label for="email">email:</label>
          <input type="email" id="email" name="email" required />
          <label for="number">numéro</label>
          <input type="number" id="number" name="number" />
          <label for="message">message:</label>
          <textarea name="message" id="message" rows="4" required></textarea>
          <button type="submit" onclick="sendOrder">send order</button>
        </form>
      </div>
    </div>
  )
}

export default Formulaire