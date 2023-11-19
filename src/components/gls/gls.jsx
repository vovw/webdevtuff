import React from "react";
import "./gls.css";
import Fotter from "../fotter/fotter";
const cardData = [
  {
    name: "Dr. A.P.J Abdul Kalam",
    category: "Former President, Rocket Scientist",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/A._P._J._Abdul_Kalam.jpg/330px-A._P._J._Abdul_Kalam.jpg",
    link: "https://vjtitechnovanza.wordpress.com/2015/10/14/dr-apj-abdul-kalams-speech-at-vjti-technovanza/",
  },
  {
    name: "Mr. Ratan Tata",
    category: "Former Chairman of Tata Group, Philanthropist",
    imageUrl: "https://www.tatatrusts.org/images/Ratan_N_Tata_sm.jpg",
    link: "https://en.wikipedia.org/wiki/Ratan_Tata",
  },
  {
    name: "Mrs. Kiran Bedi",
    category: "Former IPS Officer, Activist",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Dr._Kiran_Bedi_in_2017_%28cropped%29.jpg/330px-Dr._Kiran_Bedi_in_2017_%28cropped%29.jpg",
    link: "https://en.wikipedia.org/wiki/Kiran_Bedi",
  },
  {
    name: "Boman Irani",
    category:
      "PVSM, UYSM, SM, VSM,Planned and Executed the URI SURGICAL STRIKE",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/IIFA_2017_Green_Carpet_%2836349841166%29_%28cropped%29.jpg/800px-IIFA_2017_Green_Carpet_%2836349841166%29_%28cropped%29.jpg",
    link: "https://en.wikipedia.org/wiki/Satish_Dua",
  },
  {
    name: "Ratna Pathak",
    category:
      "Lieutenant General, PVSM, AVSM, VSM, Retired General Officer in the Indian Army",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Ratna_Pathak_at_DIFF_2016.jpg/330px-Ratna_Pathak_at_DIFF_2016.jpg",
    link: "https://en.wikipedia.org/wiki/Madhuri_Kanitkar",
  },
  {
    name: "Harsha Bhogle",
    category: "Indian model, actor, voice artist, TV presenter, and anchor",
    imageUrl: "https://www.harshabhogle.com/wp-content/uploads/2023/08/harsha-bhogle-03.jpg",
    link: "https://starsunfolded.com/ridhima-pathak/",
  },
  {
    name: "Bjarne Stroustrup",
    category: "Scientist & Director General,BrahMos Aerospace, DRDO",
    imageUrl:
      "https://ieeecs-media.computer.org/wp-media/2018/08/28174850/Bjarne-Stroustrup-250x300.jpg",
    link: "https://www.brahmos.com/team.php",
  },
  {
    name: "Jayant Narlikar",
    category:
      "Associate Dean in School of Science at Indiana-Purdue University",
    imageUrl: "https://4.bp.blogspot.com/_5n8HkLi-osg/TUombTBGKlI/AAAAAAAAANQ/hpXdiLqsrKs/s320/Narlikar.jpg",
    link: "https://science.iupui.edu/people-directory/people/raje-rajeev.html",
  },
  {
    name: "Javagal Srinath",
    category: "Former- DG,CSIR Chairman- National Innovation Foundation",
    imageUrl:
      "https://images.news9live.com/wp-content/uploads/2023/09/New-Project-2023-09-03T214327.116.jpg?w=1200&enlarge=true",
    link: "https://en.wikipedia.org/wiki/Raghunath_Anant_Mashelkar",
  },
  {
    name: "Mr. Narayan Murthy",
    category: "Chairman and founder of Infosys",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Narayana_Murthy_CIF_%28cropped%29.JPG/330px-Narayana_Murthy_CIF_%28cropped%29.JPG",
    link: "https://en.wikipedia.org/wiki/N._R._Narayana_Murty",
  },
  {
    name: "Gaur Gopal Das",
    category: "International Life Coach and Motivational Speaker",
    imageUrl: "https://outstandingspeakersbureau.in/wp-content/uploads/2019/04/Gaur-Gopal-644.png",
    link: "https://en.wikipedia.org/wiki/Gaur_Gopal_Das",
  },
  {
    name: "Dr. A.S. Kiran Kumar",
    category: "Former IPS Officer, Activist",
    imageUrl: "https://www.isro.gov.in/media_isro/image/chairmanimages/kiran.jpg.webp",
    link: "https://en.wikipedia.org/wiki/A._S._Kiran_Kumar",
  },
  {
    name: "Padmashree Nana Patekar",
    category: "Veteran Actor, Social Activist",
    imageUrl: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202311/nana-patekar-has-reacted-to-viral-video-of-him-slapping-a-man-165031152-16x9_0.jpg?VersionId=Q1WfllnLiUKeFTVkTukyB8xVjCCnMkGO&size=690:388",
    link: "https://en.wikipedia.org/wiki/Nana_Patekar",
  },
  {
    name: "Rajendra Singh",
    category: "Father of the internet",
    imageUrl: "https://indiacsr.in/wp-content/uploads/2022/11/RAJENDRA-SINGH-WATER-MAN-286x300.jpg",
    link: "https://en.wikipedia.org/wiki/Vint_Cerf",
  },
  
  {
    name: "Mr. Simon Taufel",
    category: "Umpire and Member of ICC Elite Umpires Panel",
    imageUrl: "https://content.api.news/v3/images/bin/43f40258fe49758e64e0bf82cca010de?width=768",
    link: "https://en.wikipedia.org/wiki/Simon_Taufel",
  },
  {
    name: "Mr. Sonam Wangchuk",
    category: "Education Reformist and Innovator",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Sonam_Wangchuk%2C_2017_%28cropped%29.jpg/330px-Sonam_Wangchuk%2C_2017_%28cropped%29.jpg",
    link: "https://en.wikipedia.org/wiki/Sonam_Wangchuk_(engineer)",
  },
];
function Gls() {
  return (
    <>
      <div>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
          rel="stylesheet"
        />
        <h1 className="text-8xl">Our Past Speakers</h1>
        <section className="hero-section">
          <div className="card-grid">
            {cardData.map((card, index) => (
              <a
                className={`card ${card.name.toLowerCase()}`}
                href={card.link}
                key={index}
              >
                <div
                  className="card__background"
                  style={{ backgroundImage: `url(${card.imageUrl})` }}
                ></div>
                <div className="card__content">
                  <h3 className="card__heading">{card.name}</h3>
                  <p className="card__category">{card.category}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
      <Fotter position="static" />
    </>
  );
}
export default Gls;
