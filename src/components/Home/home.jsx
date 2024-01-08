import "./home.css";
import Key_high from "../key_highlightssec/key_high";
import Fotter from "../fotter/fotter";
export default function Navbar() {
  return (
    <>
      <section className="landing h-screen text-white bg-black flex items-center justify-start w-screen">
        <div className="title-container h-1/2 mx-16 max-md:mt-20 mx-16 max-sm:mt-40">
          <h1 className="text-8xl text-left" data-aos="fade-down">
            Technovanza
          </h1>
          <h2 className="text-4xl text-left" data-aos="fade-down">
            Warp drive into the Far Future
          </h2>
        </div>
        <div className="button-container">
          <a href="/Home">
            <button className="btn-gradient btn-gradient--color__1">
              Sponsors
            </button>
          </a>
          <a href="/accommodation">
            <button className="btn-gradient btn-gradient--color__2">
              Accommodation
            </button>
          </a>
        </div>
      </section>

      <Key_high />
      <Fotter position="static" />
    </>
  );
}
