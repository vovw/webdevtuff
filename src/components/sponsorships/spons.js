import React, { useEffect, useState, useRef } from "react";
import "./spons.css";
import Fotter from "../fotter/fotter";

const sponsors = [
  { name: "Main Sponsor", description: "Exclusive benefits for our main sponsor...", image: "main-sponsor.png" },
  { name: "Main Sponsor", description: "Exclusive benefits for our main sponsor...", image: "main-sponsor.png" },
  { name: "Silver Sponsor", description: "Special perks for silver sponsors..." },
  { name: "Bronze Sponsor", description: "Great opportunities for bronze sponsors..." },
  { name: "Platinum Sponsor", description: "Premium advantages for platinum sponsors...", image: "platinum-sponsor.png" },
  { name: "Diamond Sponsor", description: "Top-tier benefits for diamond sponsors...", image: "diamond-sponsor.png" },
  { name: "Gold Sponsor", description: "Exceptional benefits for gold sponsors..." },
  { name: "Corporate Sponsor", description: "Corporate benefits for our sponsors..." },
  { name: "Supporter Sponsor", description: "Supporter benefits for our sponsors..." },
  { name: "Elite Sponsor", description: "Elite benefits for our sponsors..." },
  { name: "Innovator Sponsor", description: "Innovator benefits for our sponsors..." },
  { name: "Tech Sponsor", description: "Tech benefits for our sponsors..." },
  { name: "Media Sponsor", description: "Media benefits for our sponsors..." },
  { name: "Community Sponsor", description: "Community benefits for our sponsors..." },
  { name: "Event Sponsor", description: "Event benefits for our sponsors..." },
];

const Appp = () => {
 const [lastScrollPosition, setLastScrollPosition] = useState(0);
 const sponsorshipSectionRef = useRef(null);

 useEffect(() => {
   window.addEventListener("scroll", handleScroll);

   return () => {
     window.removeEventListener("scroll", handleScroll);
   };
 }, []);

 const createSponsorElement = (sponsor) => {
   return (
     <div className="sponsor" key={sponsor.name}>
       {sponsor.image && <img src={sponsor.image} alt={sponsor.name} />}
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
       {sponsors.map(createSponsorElement)}
     </section>
     <Fotter position="static" />
   </div>
   
 );
};

export default Appp;
