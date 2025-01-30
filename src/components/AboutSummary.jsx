import React from 'react'
import aboutImage from "../assets/about/aboutImage.png";
import cI from "../assets/about/cursorIcon.png";
import sI from "../assets/about/serverIcon.png";
import uI from "../assets/about/uiIcon.png";

const AboutSummary = () => {
  return (
    <div className='flex justify-center scroll-smooth ' id='abouts'>
    <div className="md:flex justify-center border-transparent rounded-3xl md:mx-40 mx-4 p-4 bg-slate-900/60">
        <div>
          <h1 className="text-4xl font-bold text-gray-100 m-5">About</h1>
        <div className='hidden md:flex'><img className="" src={aboutImage} alt="" /></div>
        </div>
        <div>
          <div className="flex items-center border-transparent rounded-2xl  hover:bg-white/15 m-5 ">
          <div>
            <img  src={cI} alt="" />
          </div>
          <div className="m-2">
            <h1 className="text-2xl font-semibold ">Frontend Developer</h1>
            <p className="text-xl">
              I'm a frontend developer with experience in building responsive
              and optimized sites
            </p>
          </div>
        </div>
        <div className="flex items-center border-transparent rounded-2xl  hover:bg-white/15 m-5">
          <div >
            <img  src={sI} alt="" />
          </div>
          <div className="m-2">
            <h1 className="text-2xl font-semibold ">Backend Developer</h1>
            <p className="text-xl">
            I have experience developing fast and optimised back-end systems and APIs
            </p>
          </div>
        </div>
        <div className="flex items-center border-transparent rounded-2xl hover:bg-white/15 m-5">
          <div >
            <img  src={uI} alt="" />
          </div>
          <div className="m-2">
            <h1 className="text-2xl font-semibold ">UI Designer</h1>
            <p className="text-xl">
            I have designed multiple landing pages and have created design systems as well
            </p>
          </div>
        </div>
        <div className="flex items-center border-transparent rounded-2xl hover:bg-white/15 m-5">
          <div >
            <img  src={sI} alt="" />
          </div>
          <div className="m-2">
            <h1 className="text-2xl font-semibold ">Database</h1>
            <p className="text-xl">
            I have designed multiple landing pages and have created design systems as well
            </p>
          </div>
        </div>
        </div>
      </div>
      </div>
  )
}

export default AboutSummary
