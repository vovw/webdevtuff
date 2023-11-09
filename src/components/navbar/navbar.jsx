import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";
export default function Navbar() {
  let [toggle, setToggle] = useState(false);
  return (
    <>
      <section id="Navbar">
        <div className="navbar flex flex-row justify-center py-2">
          <div className="nav-logo flex flex-row md:px-0 lg:px-5 xl:px-20 items-center">
            <img src={require('../../img/techno_img.png')} />
            <p className="text-2xl sm:text-xl md:text-3xl">Technovanza</p>
          </div>
          <div className="diagonal-div flex flex-row justify-center items-center">
            <p></p>
          </div>
          <div className="nav-items flex flex-row">
            <div className="nav-elements hidden sm:flex flex-row justify-center items-center gap-4 md:gap-6 lg:gap-14 xl:gap-20 ">
              <a href="/"><p>Home</p></a>
              <a href="/events"><p>Events</p></a>
              <a href="/gls"><p>GLS</p></a>
              <a href="/gallery"><p>Gallery</p></a>
              <a href="/team"><p>Team</p></a>
              <a href="/login"><p>Login</p></a>
            </div>
            <div className="flex flex-row justify-center items-center sm:hidden px-6">
              <GiHamburgerMenu size={'1.3rem'} onClick={() => setToggle(!toggle)} className={toggle ? "hidden" : ""} />
              <AiOutlineClose size={'1.3rem'} onClick={() => setToggle(!toggle)} className={toggle ? "" : "hidden"} />
            </div>
          </div>
        </div>
      </section>
      <div style={{
          zIndex:toggle?10:-10
        }} className="nav-toggle flex flex-col items-end mt-2">
        <div className={toggle?" nav-toggle-vis flex flex-col items-start gap-2 mx-6 w-36 sm:hidden ":" inner-nav-toggle flex flex-col items-start gap-2 mx-6 w-36 sm:hidden "}>
          <a className="flex flex-row justify-around w-36 py-1" href="/"><p>Home</p><AiOutlineArrowRight size={'1.2rem'} /></a>
          <a className="flex flex-row justify-around w-36 py-1" href="/events"><p>Events</p><AiOutlineArrowRight size={'1.2rem'}/></a>
          <a className="flex flex-row justify-around w-36 py-1" href="/gls"><p>GLS</p><AiOutlineArrowRight size={'1.2rem'}/></a>
          <a className="flex flex-row justify-around w-36 py-1" href="/gallery"><p>Gallery</p><AiOutlineArrowRight size={'1.2rem'}/></a>
          <a className="flex flex-row justify-around w-36 py-1" href="/team"><p>Team</p><AiOutlineArrowRight size={'1.2rem'}/></a>
          <a className="flex flex-row justify-around w-36 py-1" href="/login"><p>Login</p><AiOutlineArrowRight size={'1.2rem'}/></a>
        </div>
      </div>
    </>
  )
}
