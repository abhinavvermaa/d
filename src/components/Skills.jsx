import React from 'react'
import htmlIcon from "../assets/skills/html.png";
import cssIcon from "../assets/skills/css.png";
import reactIcon from "../assets/skills/react.png";
import nodeIcon from "../assets/skills/node.png";
import figmaIcon from "../assets/skills/figma.png";
import mongodbIcon from "../assets/skills/mongodb.png";
const Skills = () => {
  return (
    <div className='border-transparent rounded-3xl md:mx-40 m-10 mx-4 p-4 '>
      <h1 className='text-4xl font-bold m-10'>SKILLS</h1>
      <div className='md:flex flex-wrap justify-around'>
        <div >
          <img className='w-20' src={htmlIcon} alt="html" />
          <h1 className='text-xl font-semibold flex justify-center'>HTML</h1>
        </div>
        <div >
          <img className='w-20' src={cssIcon} alt="" />
          <h1 className='text-xl font-semibold flex justify-center'>CSS</h1>
        </div>
        <div >
          <img className='w-20' src={reactIcon} alt="" />
          <h1 className='text-xl font-semibold flex justify-center'>REACT</h1>
        </div>
        <div >
          <img className='w-20' src={nodeIcon} alt="" />
          <h1 className='text-xl font-semibold flex justify-center'>NODEJS</h1>
        </div>
        <div >
          <img className='w-20' src={mongodbIcon} alt="" />
          <h1 className='text-xl font-semibold flex justify-center'>MONGODB</h1>
        </div>
        <div >
          <img className='w-20' src={figmaIcon} alt="" />
          <h1 className='text-xl font-semibold flex justify-center'>FIGMA</h1>
        </div>
        </div>
    </div>
  )
}

export default Skills
