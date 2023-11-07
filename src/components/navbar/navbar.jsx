import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-border">
      <svg width="100%" height="60" viewBox="0 0 1392 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 59H175.25H262.875H306.688L350.5 1L701 1H1440" stroke="url(#paint0_linear_8_41)" />
        <defs>
          <linearGradient id="paint0_linear_8_41" x1="0.000183096" y1="0.500297" x2="1440" y2="0.500285" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0" />
            <stop offset="0.503125" stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="navbar-hover-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#6A11CB', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#2575FC', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        <image x="-40" y="10" width="120" height="60" href={require('../../img/techno_img.png')} />
        <text x="60" y="40" font-size="30" font-family="Orbitron" font-weight="bold" fill="white" href>Technovanza</text>

        <a href="/login">
          <text x="1200" y="40" font-size="18" font-family="Orbitron" fill="white" className="navbar-link">Login</text>
        </a>
        <a href="/team">
          <text x="1075" y="40" font-size="18" font-family="Orbitron" fill="white" className="navbar-link">Team</text>
        </a>
        <a href="/gallery">
          <text x="950" y="40" font-size="18" font-family="Orbitron" fill="white" className="navbar-link">Gallery</text>
        </a>
        <a href="/gls">
          <text x="850" y="40" font-size="18" font-family="Orbitron" fill="white" className="navbar-link">GLS</text>
        </a>
        <a href="/events">
          <text x="715" y="40" font-size="18" font-family="Orbitron" fill="white" className="navbar-link">Events</text>
        </a>
        <a href="/">
          <text x="590" y="40" font-size="18" font-family="Orbitron" fill="white" className="navbar-link">Home</text>
        </a>
      </svg>
    </div>
  )
}
