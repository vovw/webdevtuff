import React from 'react';
import "./exhibition.css";
import Fotter from "../fotter/fotter";
const Exhibition = () => {
  return (
    <>
    <div id="Exibition" className='flex flex-col justify-center mt-36 text-white gap-8 mx-4'>
      <div className='inline-flex flex-row justify-center mx-4'>
        <div className='attend-exh flex flex-row justify-center gap-8 sm:gap-24 p-8 rounded-3xl flex-wrap'>
          <div className='flex flex-row justify-center w-80'>
            <img src={require("../../img/attend-exh.jpg")} alt="attend-exh" className='' />
          </div>
          <div className='h-full flex flex-col gap-8'>
            <p className='text-4xl'>For Attendees</p>
            <p className='text-base exh-des'>Embark on a journey of innovation and exploration at Technovanza's exhibition! Immerse yourself in a showcase of cutting-edge projects, revolutionary technologies, and ingenious ideas. Join us to witness the convergence of creativity and expertise, as talented minds from across the country display their innovations. Gain insights from the brilliant minds behind the projects, and be a part of the excitement at Technovanza. Don't miss this opportunity to experience the forefront of technological advancement!</p>
            <button className='attende-btn  rounded-3xl py-2'>Register</button>
          </div>
        </div>
      </div>
      <div className='inline-flex flex-row justify-center mx-4'>
        <div className='attend-exh flex flex-row justify-center gap-8 sm:gap-24 p-8 rounded-3xl flex-wrap'>
          <div className='flex flex-row justify-center w-80'>
            <img src={require("../../img/setup-exh.jpg")} alt="attend-exh" className='' />
          </div>
          <div className='h-full flex flex-col gap-8'>
            <p className='text-4xl'>For Exhibitors</p>
            <p className='text-base exh-des'>Calling all innovators and creators! Showcase your groundbreaking projects and ideas at Technovanza's exhibition. This is your chance to spotlight your technological marvels, share your passion for innovation, and connect with a diverse audience of tech enthusiasts. Whether you're a student, a startup, or an established tech wizard, this is the platform to exhibit your prowess. Set up your project, demonstrate its potential, and leave a lasting impression on the vibrant tech community.</p>
            <button className='exhibi-btn rounded-3xl py-2'>Fill the form</button>
          </div>
        </div>
      </div>
    </div>
    <Fotter position="static"  />
    </>
  );
};

export default Exhibition;

