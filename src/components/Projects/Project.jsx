import './Project.css';

let projects=[
    {
        imgLink:"https://i.postimg.cc/zfGG6P4C/handgesture.jpg",
        title:"Wireless-Volume-Control",
        description:"A hands free volume control system using OpenCV, MediaPipe and Python to adjust volume with hand gestures.",
        projectLink:"https://github.com/gagannani99/Wireless-Volume-Control-Final.git"
    },
    {
        imgLink:"https://i.postimg.cc/pdWZm86W/bluetooth.png",
        title:"Bluetooth Messaging App",
        description:"An android application enabling seamless file sharing between devices using Bluetooth.",
        projectLink:"https://github.com/gagannani99/Bluetooth-Messaging-and-File-Sharing.git"
    },
    {
        imgLink:"https://i.postimg.cc/rF25dxDB/Techno-AI.jpg",
        title:"Techno AI Frontend Web Application",
        description:"Techno AI is a responsive front-end web application built with React JS and Tailwind CSS, designed for a seamless and modern user experience.",
        projectLink:"https://visionary-stardust-c099bd.netlify.app/"
    },
    {
        imgLink:"https://i.postimg.cc/Qt5HsYJH/todo.png",
        title:"Todo Application",
        description:"A responsive to-do application built with HTML, CSS, and JavaScript, designed to manage tasks efficiently.",
        projectLink:"https://tinyurl.com/gagantodoapp"
    },
    {
        imgLink:"https://i.postimg.cc/fWfRK92n/foodmunch.png",
        title:"Foodmunch Responsive Website",
        description:"A responsive food themed webpage design with HTML, CSS and Bootstrap, optimized for seamless viewing across devices.",
        projectLink:"https://tinyurl.com/foodcrunch"
    },

]
const Project = () => {
  return (
    <div id="project">
        <h1 className="projectHeading">Portfolio</h1>
        
        <div className="container">
            <div className="row">
                {projects.map((project, index) => (
                    <div key={index} className="col-md-4 d-flex justify-content-center mb-4">
                        <div className="carde card" style={{ width: "18rem" }}>
                            <img src={project.imgLink} className="card-img-top" alt={project.title} />
                            <div className="card-body">
                                <h6>{project.title}</h6>
                                <p className="card-text fw-light">{project.description}</p>
                                {project.projectLink && (
                                    <a href={project.projectLink} target='_blank' rel="noopener noreferrer" className="projectLink">
                                        Link <span>&#8594;</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Project;
