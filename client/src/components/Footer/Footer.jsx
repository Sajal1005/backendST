import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <footer class="footer mt-8">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="menu">

      <div className='text-5xl font-bold text-white'>
        <span>BookSnap</span>
        </div>

    </ul>
    <p className='uppercase'>&copy;2023 A place of wonderful books | All Rights Reserved</p>
  </footer>
  )
}

export default Footer