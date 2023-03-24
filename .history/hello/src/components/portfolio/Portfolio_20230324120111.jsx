import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data =[
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard and Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribble.com/shots/16673715-Crypto-currency'
  }
]
const Portfolio = () => {
  return (
    < section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio_container"> 
    <article className='portfolio_item'>
      <div className='portfolio_item-image'>
        <img src={IMG1} alt=""/>
      </div>
      jnklfguy,,,,,,,'6,,;[,,,,,,,,,,,,,,,,,,,,,,,,f6,,,f,,,,,,,,,ucv6                                                                                                                                                                                                                                                                                                                                                                                             ,k.' jk<h3>This is a portfolio item title</h3>
      <div className="portoflio_item-cta">
      <a href="https://github.com" className='btn' target='blank'>Github</a>
      <a href="https://dribble.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
      </div>
    </article> 
      <article className='portfolio_item'>
      <div className='portfolio_item-image'>
        <img src={IMG2} alt=""/>
      </div>
      <h3>This is a portfolio item title</h3>
      <div className="portoflio_item-cta">
        <a href="https://github.com" className='btn' target='blank'>Github</a>
        <a href="https://dribble.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
      </div>
    </article> 
      <article className='portfolio_item'>
      <div className='portfolio_item-image'>
        <img src={IMG3} alt=""/>
      </div>
      <h3>This is a portfolio item title</h3>
      <div className="portoflio_item-cta">
        <a href="https://github.com" className='btn' target='blank'>Github</a>
        <a href="https://dribble.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
      </div>
      </article> 
      <article className='portfolio_item'>
      <div className='portfolio_item-image'>
        <img src={IMG4} alt=""/>
      </div>
      <h3>This is a portfolio item title</h3>
      <div className="portoflio_item-cta">
        <a href="https://github.com" className='btn' target='blank'>Github</a>
        <a href="https://dribble.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
      </div>
      </article> 
      <article className='portfolio_item'>
      <div className='portfolio_item-image'>
        <img src={IMG5} alt=""/>
      </div>
      <h3>This is a portfolio item title</h3>
      <div className="portoflio_item-cta">
        <a href="https://github.com" className='btn' target='blank'>Github</a>
        <a href="https://dribble.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
      </div>
      </article> 
      <article className='portfolio_item'>
      <div className='portfolio_item-image'>
        <img src={IMG6} alt=""/>
      </div>
      <h3>This is a portfolio item title</h3>
      <div className="portoflio_item-cta">
        <a href="https://github.com" className='btn' target='blank'>Github</a>
        <a href="https://dribble.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
      </div>
      </article> 

    </div>
  </section>
  )
}

export default Portfolio