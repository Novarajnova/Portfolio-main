import React from 'react'
import './ProjectContainer.css'
import bm from '../assets/bm.png'
import ca from '../assets/ca.png'
import { Element } from 'react-scroll'
import Project from './project/Project'

function ProjectContainer() {
  const my_projects=[{
    img:bm,
    title:"Bank Management System",
    desc:"we can manage work with time",
  },
  {
    img:ca,
    title:"College Alert Application",
    desc:"we can safe and securely",
  },
  
];
  return (
    <Element className="projectcontainer" id="projects">
        <h1>Projects</h1>
        <div className='project_container_projects'>
         {
            my_projects.map((project,index)=>{
                return(
                    <Project key={index} img={project.img} title={project.title} desc={project.desc}/>
                )
         }
            )
            }
        </div>
    </Element>
            
  )
}

export default ProjectContainer