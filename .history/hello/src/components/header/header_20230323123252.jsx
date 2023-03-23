import React from 'react'
import '../header/header.css'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>William Chen</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
      </div>
    </header>
  )
}

export default Header