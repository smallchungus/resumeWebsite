import React from 'react'
import './portfolio.css'
import './portfolio.css'
import IMG1 from '../../assests/portfolio.jpg'
import IMG2 from '../../assests/portfolio.jpg'
import IMG3 from '../../assests/portfolio.jpg'
import IMG4 from '../../assests/portfolio.jpg'
import IMG5 from '../../assests/portfolio.png'
import IMG6 from '../../assests/portfolio.jpg'


const Portfolio = () => {
  return (
    < section id='portfolio'>Portfolio
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio_container"> 
    <article className='portfolio_item'>
      <div className='portfolio_item-image'>
      </div>
      <h3>This is a portfolio item title</h3>
      <a href="https://github.com" className='btn' target='blank'>Github</a>
      <a href="https://dribble.com/"
      </article> 
    </div>
    </section>
  )
}

export default Portfolio