import "./fotter.css";

export default function Fotter({ position }) {
  return (
    <>
      <div id="Fotter" className={position+" py-10"}>
        <div className="fotter-content flex flex-col md:flex-row items-center justify-center my-4 gap-2 md:gap-0">
          <div className="flex flex-row main-left-fotter pt-1">
            <div className="fotter-left hidden  xl:flex flex-row px-2 md:px-4 lg:px-8">
              <a href="/">
              <img src={require("../../img/techno_img.png")} alt="Logo" className="logo" />
              </a>
              <span className="technovanza">Technovanza</span>
            </div>
            <div className="rules-div flex flex-col text-xs md:text-md justify-center items-center pt-2 lg:pt-0">
              <div className="flex flex-row">
                <p>©Technovanza 2023.All rights reserved.</p>
              </div>
              <div className="flex flex-row rules-div-link">
                <p><a href="/terms">Terms of Service </a> and <a href="privacy">Privacy Policy</a></p>
              </div>
              <div className="flex flex-row rules-div-link">
               <p><a target="_blank" href="https://drive.google.com/drive/folders/1NOoWM1So-5mQTHzlui3EKSyAiq6cxkk3">media kit</a></p>

              </div>
            </div>
          </div>
          <div className="dia-fotter-div hidden md:flex flex-row justify-center">
            <p></p>
          </div>
          <div className="flex flex-row gap-4 md:gap-6 lg:gap-12 fotter-items md:px-8 justify-center pb-1">
            <div className="item">
              <a href="https://www.instagram.com/technovanza/" className=" w-8 h-8 md:w-11 md:h-11">
                <i className="fa-brands fa-instagram icon"></i>
              </a>
            </div>
            <div className="item">
              <a href="https://in.linkedin.com/company/technovanza-vjti" className=" w-8 h-8 md:w-11 md:h-11">
                <i className="fa-brands fa-linkedin icon"></i>
              </a>
            </div>
            <div className="item">
              <a href="https://www.youtube.com/user/technovanzaVJTI" className=" w-8 h-8 md:w-11 md:h-11">
                <i className="fa-brands fa-youtube icon"></i>
              </a>
            </div>
            <div className="item">
              <a href="https://twitter.com/technovanza?lang=en" className=" w-8 h-8 md:w-11 md:h-11">
                <i className="fa-brands fa-x-twitter icon"></i>
              </a>
            </div>
            <div className="item">
              <a href="https://www.facebook.com/technovanza/" className=" w-8 h-8 md:w-11 md:h-11">
                <i className="fab fa-facebook-f icon-fb"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
