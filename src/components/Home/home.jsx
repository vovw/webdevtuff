import "./home.css";
import Key_high from "../key_highlightssec/key_high"
import Fotter from "../fotter/fotter";
export default function Navbar() {
  return (
    <>
    <section className="landing h-screen text-white bg-black flex items-center justify-start w-screen">
 <div className="title-container h-1/2 mx-16">
   <h1 className="text-8xl" data-aos="fade-down">
     <span className="txgradient">Technovanza</span>
   </h1>
   <h2 className="text-4xl" data-aos="fade-down">
     Warp drive into the Far Future
   </h2>
 </div>
 <div className="button-container">
  <a href="/sponsorships">
   <button className="btn-gradient btn-gradient--color__1">Sponsors</button>
   </a>
   <a href="/Hospitality"><button className="btn-gradient btn-gradient--color__2">Hospitality</button></a>
 </div>
</section>

    <Key_high />
    <Fotter position="static" />
</>
  );
  }
