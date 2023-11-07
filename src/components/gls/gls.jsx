import React from "react";
import "./gls.css";

const cardData = [
  {
    name: "Dr. A.P.J Abdul Kalam",
    category: "Former President, Rocket Scientist",
    imageUrl: "https://www.technovanza.org/gls/pastgls/apj.jpg",
    link: "https://vjtitechnovanza.wordpress.com/2015/10/14/dr-apj-abdul-kalams-speech-at-vjti-technovanza/"
  },
  {
    name: "Mr. Ratan Tata",
    category: "Former Chairman of Tata Group, Philanthropist",
    imageUrl: "https://www.technovanza.org/gls/pastgls/tata.jpg",
    link: "https://en.wikipedia.org/wiki/Ratan_Tata"
  },
  {
    name: "Mrs. Kiran Bedi",
    category: "Former IPS Officer, Activist",
    imageUrl: "https://www.technovanza.org/gls/pastgls/kiranbedi.jpg",
    link: "https://en.wikipedia.org/wiki/Kiran_Bedi"
  },
  {
    name: "Lieutenant General Satish Dua",
    category: "PVSM, UYSM, SM, VSM,Planned and Executed the URI SURGICAL STRIKE",
    imageUrl: "https://www.technovanza.org/gls/GLS2022_23/satish.jpg",
    link: "https://en.wikipedia.org/wiki/Satish_Dua"
  },
  {
    name: "Lt. Gen. Madhuri Kanitkar",
    category: "Lieutenant General, PVSM, AVSM, VSM, Retired General Officer in the Indian Army",
    imageUrl: "https://www.technovanza.org/gls/upcomingGLS/madhurimam.png",
    link: "https://en.wikipedia.org/wiki/Madhuri_Kanitkar"
  },
  {
    name: "Ridhima Pathak",
    category: "Indian model, actor, voice artist, TV presenter, and anchor",
    imageUrl: "https://www.technovanza.org/gls/upcomingGLS/ridhima.png",
    link: "https://starsunfolded.com/ridhima-pathak/"
  },
  {
    name: "Mr. Atul Rane",
    category: "Scientist & Director General,BrahMos Aerospace, DRDO",
    imageUrl: "https://www.technovanza.org/gls/GLS2022_23/AtulRane/AtulRane.jpg",
    link: "https://www.brahmos.com/team.php"
  },
  {
    name: "Dr. Rajeev Raje",
    category: "Associate Dean in School of Science at Indiana-Purdue University",
    imageUrl: "https://www.technovanza.org/gls/GLS2022_23/RajeevRaje.jpg",
    link: "https://science.iupui.edu/people-directory/people/raje-rajeev.html"
  },
  {
    name: "Dr. Raghunath Mashelkar",
    category: "Former- DG,CSIR Chairman- National Innovation Foundation",
    imageUrl: "https://www.technovanza.org/gls/GLS2022_23/RaghunathMashelkar.jpg",
    link: "https://en.wikipedia.org/wiki/Raghunath_Anant_Mashelkar"
  },
  {
    name: "Mr. Narayan Murthy",
    category: "Chairman and founder of Infosys",
    imageUrl: "https://www.technovanza.org/gls/pastgls/murthy.jpg",
    link: "https://en.wikipedia.org/wiki/N._R._Narayana_Murty"
  },
  {
    name: "Gaur Gopal Das",
    category: "International Life Coach and Motivational Speaker",
    imageUrl: "https://www.technovanza.org/gls/pastgls/gaurgopal.jpg",
    link: "https://en.wikipedia.org/wiki/Gaur_Gopal_Das"
  },
  {

    name: "Dr. A.S. Kiran Kumar",
    category: "Former IPS Officer, Activist",
    imageUrl: "https://www.technovanza.org/gls/pastgls/kirankumar.jpg",
    link: "https://en.wikipedia.org/wiki/A._S._Kiran_Kumar"
  },
  {
    name: "Padmashree Nana Patekar",
    category: "Veteran Actor, Social Activist",
    imageUrl: "https://www.technovanza.org/gls/pastgls/nana.jpg",
    link: "https://en.wikipedia.org/wiki/Nana_Patekar"
  },
  {
    name: "Vincent Cerf",
    category: "Father of the internet",
    imageUrl: "https://www.technovanza.org/gls/pastgls/vintcerf.jpg",
    link: "https://en.wikipedia.org/wiki/Vint_Cerf"
  },
  {
    name: "Dr. Niranjan Hiranandani",
    category: "Co-Founder, and Managing Director, at Hiranandani Group",
    imageUrl: "https://www.technovanza.org/gls/pastgls/hiranandini.png",
    link: "https://www.youtube.com/watch?v=RJEs1pCPK3w"
  },
  {
    name: "Mr. Simon Taufel",
    category: "Umpire and Member of ICC Elite Umpires Panel",
    imageUrl: "https://www.technovanza.org/gls/pastgls/Taufel.jpg",
    link: "https://en.wikipedia.org/wiki/Simon_Taufel"
  },
  {
    name: "Mr. Sonam Wangchuk",
    category: "Education Reformist and Innovator",
    imageUrl: "https://www.technovanza.org/gls/pastgls/wangchuk.jpg",
    link: "https://en.wikipedia.org/wiki/Sonam_Wangchuk_(engineer)"
  }
];

function Gls() {
  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
      <h1 className="text-8xl">Our Past Speakers</h1>
      <section className="hero-section">
        <div className="card-grid">
          {cardData.map((card, index) => (
            <a className={`card ${card.name.toLowerCase()}`} href={card.link} key={index}>
              <div className="card__background" style={{ backgroundImage: `url(${card.imageUrl})` }}></div>
              <div className="card__content">
                <h3 className="card__heading">{card.name}</h3>
                <p className="card__category">{card.category}</p>
                <button className="card__url" role="link" onClick={() => (window.location.href = card.link)}>
                  More info
                </button>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Gls;
