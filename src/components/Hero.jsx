import React from 'react'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">

        <p className="featured">FEATURED MOVIE</p>

        <h1>BAAHUBALI</h1>

        <div className="movie-info">
          <span>⭐ 8.0</span>
          <span>2015</span>
          <span>Action</span>
          <span>2h 39m</span>
        </div>

        <p className="hero-description">
          A young man discovers his extraordinary past and his connection
          to the legendary kingdom of Mahishmati.
        </p>

        <div className="hero-buttons">
          <button className="watch-btn">▶ Watch Now</button>
          <button className="info-btn">More Info</button>
        </div>

      </div>
    </section>
  )
}

export default Hero