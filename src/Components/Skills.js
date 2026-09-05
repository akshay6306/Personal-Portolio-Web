import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaGitAlt, FaGithub, FaNpm} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiVercel} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        'C++': <CgCPlusPlus/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Vercel : <SiVercel/>,
        Npm : <FaNpm/>,
    }

    const iconElement = icon[skill];
    if (!iconElement) return null;
    
  return (
    <div title={skill} className='SkillBox'>
      {iconElement}
    </div>
  )
}

export default Skills
