import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiFillDribbbleSquare} from 'react-icons/ai'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/willchenn/" target="_blank"><BsLinkedin></BsLinkedin></a>
        <a href="https://github.com/smallchungus" target="_blank"><BsGithub></BsGithub></a>
        <a href="https://dribble.com/" target="_blank"><AiFillDribbbleSquare></AiFillDribbbleSquare></a>
        </div>
  )
}

export default HeaderSocials