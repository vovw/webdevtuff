import "./fotter.css";

export default function Fotter(){
    return(
      <>

    <fotter>
      <svg width="100%" height="35px" viewBox="0 0 1440 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1440 1H1264.75H1177.13H1133.31L1089.5 33H739H-2.28881e-05" stroke="url(#paint0_linear_9_80)"/>
        <defs>
            <linearGradient id="paint0_linear_9_80" x1="1440" y1="33.4997" x2="0.000160226" y2="33.4997" gradientUnits="userSpaceOnUse">
                <stop stop-color="white" stop-opacity="0"/>
                <stop offset="0.503125" stop-color="white"/>
                <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
        </defs>
    </svg>
    
    
        
    
        
        
      <div className="footer-content">
        <div className="footer-left">
          <img src={require("../../img/techno_img.png")} alt="Logo" className="logo" />
          <span className="technovanza">Technovanza</span>
        </div> 
        
        <ul>
          <li className="item">
            <a href="#">
              <i className="fa-brands fa-instagram icon"></i>
            </a>
          </li>
          <li className="item">
            <a href="#">
              <i className="fa-brands fa-linkedin icon"></i>
            </a>
          </li>
          <li className="item">
            <a href="#">
              <i className="fa-brands fa-youtube icon"></i>
            </a>
          </li>
          <li className="item">
            <a href="#">
              <i className="fa-brands fa-x-twitter icon"></i>
            </a>
          </li>
          <li className="item">
            <a href="#">
              <i className="fab fa-facebook-f icon-fb"></i>
            </a>
          </li>
          {/* <li className="item">
            <a href="#">
              <i className="fas fa-phone icon-phone"></i>
            </a>
          </li> */}
          
        </ul>

      </div>
    </fotter>
    </>
    )
}
