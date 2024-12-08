import './intro.css'
import bag from './pictures/mypic.jpeg'
const Introduction = (props) => {
  return (
    <section id="intro">
      
      <div className="container d-flex flex-column justify-content-center">
        <div className="row d-flex flex-row justify-content-center">
          <div className="col-md-7 col-12 introContent order-md-0 order-1 text-center text-md-start">
          <span className="introText"> I'm <span className="introName">{props.name}</span>,<br />a <span className="universityName">{props.role}</span></span>
          <p className='introPara'>I am passionate in creating responsive, userfriendly and dynamic websites using HTML, CSS, Bootstrap, Tailwind CSS and JavaScript.</p>
          </div>
          <div className='col-12 col-md-5 d-flex flex-column justify-content-center order-md-1 order-0 align-self-center'>
            <div className="imgContainer">
              <img src="https://i.postimg.cc/C1YrSdSm/mypic.jpg" alt="" className="bg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction
