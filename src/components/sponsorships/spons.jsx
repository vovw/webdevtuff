import React, { useEffect, useState, useRef } from "react";
import "./spons.css";
import Fotter from "../fotter/fotter";

const sponsors = [
  { name: "HP", description: "Exclusive benefits for our main sponsor...", Image: require("./sponsor-logo/HP.png") },
  { name: "Burger King", description: "Exclusive benefits for our main sponsor...", Image: require("./sponsor-logo/Burger-king.png") },
  { name: "Pioneer", description: "Exclusive benefits for our main sponsor...", Image: require("./sponsor-logo/Pioneer.png") },
  { name: "Jumboking", description: "Exclusive benefits for our main sponsor...", Image: require("./sponsor-logo/Jumbo_King.webp") },
  { name: "Bright", description: "Exclusive benefits for our main sponsor...", Image: require("./sponsor-logo/Bright.png") },
  { name: "Reliance", description: "Exclusive benefits for our main sponsor...", Image: require("./sponsor-logo/reliance-digital.png") },
  { name: "Frontage", description: "Exclusive benefits for our main sponsor...", Image: require("./sponsor-logo/frontage.png") },
  { name: "Fireboltt", description: "Exclusive benefits for our main sponsor...", Image: require("./sponsor-logo/fireboltt.png") },
  { name: "Calton Paints", description: "Exclusive benefits for our main sponsor...", Image: require("./sponsor-logo/calton.png") }
];

const Appp = () => {
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const sponsorshipSectionRef = useRef(null);
  useEffect(() => {
    animateSponsorsUp();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const createSponsorElement = (sponsor) => {
    return (
      <div className="sponsor" key={sponsor.name}>
        {sponsor.Image && <img src={sponsor.Image} alt={sponsor.name} style={{ width: '100%' }} />}
        <h2>{sponsor.name}</h2>
        <p>{sponsor.description}</p>
      </div>
    );
  };

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
      animateSponsors();
    } else {
      animateSponsorsUp();
    }

    setLastScrollPosition(currentScrollPosition);
  };

  const animateSponsorsUp = () => {
    const sponsorElements = document.querySelectorAll(".sponsor");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
        }
      });
    }, {
      threshold: 0.5
    });

    sponsorElements.forEach(sponsor => {
      observer.observe(sponsor);
      sponsor.classList.remove("appear");
    });
  };

  const animateSponsors = () => {
    const sponsorElements = document.querySelectorAll(".sponsor");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
        }
      });
    }, {
      threshold: 0.5
    });

    sponsorElements.forEach(sponsor => {
      observer.observe(sponsor);
    });
  };

  return (
    <div className="App">
      <header>
        <h1 className="main-title">Sponsorship</h1>
      </header>
      <section className="sponsorship-section" ref={sponsorshipSectionRef}>
        <div className="center-container">
          {sponsors.map(createSponsorElement)}
        </div>
      </section>
      <Fotter position="static" />
    </div>
  );
};

export default Appp;
