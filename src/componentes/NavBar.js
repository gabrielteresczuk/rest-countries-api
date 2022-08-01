import React from 'react'
import './NavBar.css'

function NavBar({changeTheme,dark}) {
  return (
    <div className={dark ?'NavBar NavBar-dark' : 'NavBar' }>
        <h2>Where in the World?</h2>
        <button onClick={changeTheme}>
            <span className="material-symbols-outlined darkmode">dark_mode</span>
            Dark Mode
        </button>
    </div>
  )
}

export default NavBar