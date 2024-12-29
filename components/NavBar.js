import React from "react"
import "./style.css"
import image from "./mylogo.jpg"
import video from "./myvideo.mp4"

const NavBar = () => {

    return(
        <section className="hero-section">
             <video className="background-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>

        <nav className="navbar">
          <div className="navbar-logo">
            <img
              src={image}
              alt="myimage"
              className="logo"
            />
            <span>Christowonder Fashion House</span>
          </div>
          <ul className="navbar-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About</a></li>
          </ul>
          <button className="get-started-btn">Get Started</button>
        </nav>
        <div className="hero-content">
          <h1>Dress Up</h1>
          <p>Unleash Your Inner Fashionista with Our Tailored Creations!</p>
          <button className="shop-now-btn">Shop Now</button>
      </div>
    </section>
    )
}
export default  NavBar