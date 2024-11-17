import './index.css';
import Navbar from './components/NavBar/navbar';
import Introduction from './components/Intro/Introduction';
import Skill from './components/Skills/Skill';
import Project from './components/Projects/Project';
import Aboutme from './components/About/Aboutme';
import Footers from './components/Footer/Footers';
let name="Gagan Sai"
let role="Frontend Web Developer"
function App() {
  return (
    <>
      <Navbar />
      <Introduction name={name} role={role}/>
      <Aboutme></Aboutme>
      <Skill />
      <Project></Project>
      <Footers></Footers>
    </>
  );
}

export default App;
