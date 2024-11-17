import React from 'react'
import './intro.css'
import {Link} from 'react-scroll'
import bag from './pictures/bag.png'
import me from './pictures/me.png'
const Introduction = (props) => {
  return (
    <section id="intro">
      <div className="introContent">
       
          <span className="introText"> I'm <span className="introName">{props.name}</span>,<br />a <span className="universityName">{props.role}</span></span>
          <p className='introPara'>I am passionate in creating responsive, userfriendly and dynamic websites using HTML, CSS, Bootstrap, Tailwind CSS and JavaScript.</p>
      </div>
      <img src="https://i.postimg.cc/k5BTj7MW/me.png" alt="" className="bg" />
    </section>
  )
}

export default Introduction
