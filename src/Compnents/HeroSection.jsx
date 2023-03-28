import React from 'react'

export default function HeroSection() {
  return (
    <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner hero-height">
          <div className="carousel-item active">
            <img src="Images/klara-kulikova-WcV2YkM3Dls-unsplash.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="Images/raoul-croes-9C6w4-DMNGU-unsplash.jpg" className="d-block w-100" alt="..."/>
          </div>
         </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
