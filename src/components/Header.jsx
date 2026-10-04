import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">🎬 MOVIEFLIX</div>

      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">Movies</a>
        <a href="#">Popular</a>
        <a href="#">New Releases</a>
      </nav>

      <div className="search-box">
        <input type="text" placeholder="Search movies..." />
        <button>Search</button>
      </div>
    </header>
  )
}

export default Header