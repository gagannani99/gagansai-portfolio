import './Skill.css'
let programmingLanguages=["Python","Java","C Language"]
let databases=['SQL',"MySQL","SQLite","MongoDB"]
let frontend=["HTML","CSS","Bootstrap","Tailwind CSS","JavaScript","ReactJS"]
let backend=["JavaScript","NodeJS","ExpressJS"]
const Skill = () => {
  return (
    <>
      <div id='skills'>
        <h1 className='main-heading'>Skills</h1>
        <div className="fields-skills">
          <div className="field">
              <h2>Programming Languages</h2>
              <ul className='techList'>
            {programmingLanguages.map((language, index) => (
                <li key={index} className="techItems">{language}</li>
            ))}
        </ul>
          </div>
          <div className="field">
              <h2>Databases</h2>
              
              <ul className='techList'>
            {databases.map((database, index) => (
                <li key={index} className="techItems">{database}</li>
            ))}
        </ul>
          </div>
          <div className="field">
              <h2>Frontend Languages or Frameworks</h2>
              <ul className='techList'>
            {frontend.map((tech, index) => (
                <li key={index} className="techItems">{tech}</li>
            ))}
        </ul>
          </div>
          <div className="field">
              <h2>Backend Languages or Frameworks</h2>
              <ul className='techList'>
            {backend.map((tech, index) => (
                <li key={index} className="techItems">{tech}</li>
            ))}
        </ul>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Skill
