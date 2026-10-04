import React from 'react'

import baahubali2 from '../Images/baahubali2.jpg'
import rrr from '../Images/rrr.jpg'
import pushpa from '../Images/pushpa.jpg'
import kgf2 from '../Images/kgf2.jpg'

const Movies = () => {
  return (
    <section className="movies-section">

      <h2>🔥 Popular Movies</h2>

      <div className="movies-container">

        <div className="movie-card">
          <img src={baahubali2} alt="Baahubali 2" />
          <h3>Baahubali 2</h3>
          <p>⭐ 8.2</p>
        </div>

        <div className="movie-card">
          <img src={rrr} alt="RRR" />
          <h3>RRR</h3>
          <p>⭐ 7.8</p>
        </div>

        <div className="movie-card">
          <img src={pushpa} alt="Pushpa" />
          <h3>Pushpa</h3>
          <p>⭐ 7.6</p>
        </div>

        <div className="movie-card">
          <img src={kgf2} alt="KGF Chapter 2" />
          <h3>KGF Chapter 2</h3>
          <p>⭐ 8.3</p>
        </div>

      </div>

    </section>
  )
}

export default Movies