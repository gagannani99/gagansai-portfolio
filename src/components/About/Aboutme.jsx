import './About.css'
let softSkills=["Hardworking","Leadership Qualities","Team Management","Problem Solving Ability"]
const Aboutme = () => {
  return (
    <div id='about'>
      <h1 className='text-center'>About</h1>
      <p className='about-para'>My name is Gagan Sai Alasapuri. I am from Hyderabad, Telangana. I graduated from CVR College of Engineering and am passionate about problem-solving with Python and developing responsive webpages using HTML, CSS, Bootstrap, Tailwind CSS, JavaScript and ReactJS.</p>
      <p className='about-para'>I possess qualities that include:</p>
      <ul className='about-list'>
        {softSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default Aboutme
