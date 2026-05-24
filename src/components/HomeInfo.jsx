import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link } className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center
        neo-brutalism-blue py-4 px-6 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Eleriin</span> 👋 
            <br />
            A Software Developer from Estonia.
            </h1>
    ),
    2: (
        <InfoBox
            text="I'm eager to prove myself 
            in the tech field, 
            grow through experience, 
            and turn determination into 
            real-world skills and projects."
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="Each project has been an opportunity 
            to learn, grow, and better understand how 
            real-world development works."
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox
            text="Looking for a motivated junior developer
             or internship candidate who is ready to learn,
              adapt quickly, and grow through real-world 
              experience?"
            link="/contact"
            btnText="Let's talk"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo