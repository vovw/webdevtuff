import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-border">
      <svg
        width="100%"
        height={60}
        viewBox="0 0 1392 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 59H175.25H262.875H306.688L350.5 1L701 1H1440"
          stroke="url(#paint0_linear_8_41)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_8_41"
            x1="0.000183096"
            y1="0.500297"
            x2={1440}
            y2="0.500285"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity={0} />
            <stop offset="0.503125" stopColor="white" />
            <stop offset={1} stopColor="white" stopOpacity={0} />
          </linearGradient>
          {/* Define the gradient for the hover effect */}
          <linearGradient
            id="navbar-hover-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#6A11CB", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#2575FC", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        {/* Add space for a logo */}
        <image
          x={-40}
          y={10}
          width={120}
          height={60}
          xlinkHref="./assets/techno_logo.png"
        />
        {/* Add "Technovanza" in bold with space to the right of the logo, without hover effect */}
        <text
          x={60}
          y={40}
          fontSize={30}
          fontFamily="Orbitron"
          fontWeight="bold"
          fill="white"
        >
          Technovanza
        </text>
        {/* Add menu items on the right side with larger font size and Playfair Display font family */}
        <a href="#">
          <text
            x={1300}
            y={40}
            fontSize={18}
            fontFamily="Orbitron"
            fill="white"
            className="navbar-link"
          >
            Login
          </text>
        </a>
        <a href="#">
          <text
            x={1210}
            y={40}
            fontSize={18}
            fontFamily="Orbitron"
            fill="white"
            className="navbar-link"
          >
            Team
          </text>
        </a>
        <a href="#">
          <text
            x={1100}
            y={40}
            fontSize={18}
            fontFamily="Orbitron"
            fill="white"
            className="navbar-link"
          >
            Gallery
          </text>
        </a>
        <a href="#">
          <text
            x={1015}
            y={40}
            fontSize={18}
            fontFamily="Orbitron"
            fill="white"
            className="navbar-link"
          >
            GLS
          </text>
        </a>
        <a href="#">
          <text
            x={900}
            y={40}
            fontSize={18}
            fontFamily="Orbitron"
            fill="white"
            className="navbar-link"
          >
            Events
          </text>
        </a>
        <a href="#">
          <text
            x={800}
            y={40}
            fontSize={18}
            fontFamily="Orbitron"
            fill="white"
            className="navbar-link"
          >
            Home
          </text>
        </a>
      </svg>
    </div>
  );
}
