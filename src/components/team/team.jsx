// import React from 'react';
import ProfileCard from './ProfileCard';
import ProfileCard1 from './ProfileCard1';
import ProfileCard2 from './ProfileCard2';
import './team.css';
import Fotter from '../fotter/fotter';
const cardData = [
  {
    name: "Aditya Chakraborty",
    title: "Secretary",
    linkedin: "https://www.linkedin.com/in/jenifer",
    gmail: "jenifer@gmail.com",
    img: "https://www.technovanza.org/team/secretary/yash1.jpg",
  },
  {
    name: "Samruddhi Dutta",
    title: "Secretary",
    linkedin: "https://www.linkedin.com/in/johndoe",
    gmail: "john@gmail.com",
    img: "https://www.technovanza.org/team/secretary/yash1.jpg",
  },
  {
    name: "Viraj Shah",
    title: "Secretary",
    linkedin: "https://www.linkedin.com/in/johndoe",
    gmail: "john@gmail.com",
    img: "https://www.technovanza.org/team/secretary/yash1.jpg",
  }
];


const officerData1 = [
  {
    name: "Shashwat Baghel",
    title: "Chief Financial Officer",
    linkedin: "https://www.linkedin.com/in/alicesmith",
    gmail: "alice@gmail.com",
    img: "https://www.technovanza.org/team/secretary/yash1.jpg",
  },
  {
    name: "Gaurav Manuja",
    title: "Chief Financial Officer",
    linkedin: "https://www.linkedin.com/in/alicesmith",
    gmail: "alice@gmail.com",
    img: "https://www.technovanza.org/team/secretary/yash1.jpg",
  },
  {
    name: "Vedant Berde",
    title: "Operations Officer",
    linkedin: "https://www.linkedin.com/in/alicesmith",
    gmail: "alice@gmail.com",
    img: "person-image32222.webp",
  },
  {
    name: "Aryan Pawaskar",
    title: "Operations Officer",
    linkedin: "https://www.linkedin.com/in/alicesmith",
    gmail: "alice@gmail.com",
    img: "person-image32222.webp",
  },
  {
    name: "Tanmay Dikev",
    title: "Sponsorship Officer",
    linkedin: "https://www.linkedin.com/in/alicesmith",
    gmail: "alice@gmail.com",
    img: "person-image32222.webp",
  },
  {
    name: "Ankita Daine",
    title: "Marketing Officer",
    linkedin: "https://www.linkedin.com/in/alicesmith",
    gmail: "alice@gmail.com",
    img: "person-image32222.webp",
  },
  {
    name: "Adwait Shastri",
    title: "Public Relations Officer",
    linkedin: "https://www.linkedin.com/in/alicesmith",
    gmail: "alice@gmail.com",
    img: "person-image32222.webp",
  },
];

const officerData2 = [
  {
    name: "Tejasvi Gharat",
    title: "Design Officer",
    linkedin: "https://www.linkedin.com/in/alicesmith",
    gmail: "alice@gmail.com",
    img: "person-image32222.webp",
  },
  {
    name: "Lajari Sawant",
    title: "Internal Publicity Officer",
    linkedin: "https://www.linkedin.com/in/alicesmith",
    gmail: "alice@gmail.com",
    img: "person-image32222.webp",
  },
  {
    name: "Sagar Sakhalkar",
    title: "Execution Officer",
    linkedin: "https://www.linkedin.com/in/alicesmith",
    gmail: "alice@gmail.com",
    img: "person-image32222.webp",
  },
  {
    name: "Devyani Shende",
    title: "Fine Arts & Photography Officer",
    linkedin: "https://www.linkedin.com/in/alicesmith",
    gmail: "alice@gmail.com",
    img: "person-image32222.webp",
  },
  {
    name: "Yashovardhan Joshi",
    title: "VJTI Mumbai Cube Open Officer",
    linkedin: "https://www.linkedin.com/in/alicesmith",
    gmail: "alice@gmail.com",
    img: "person-image32222.webp",
  },
  {
    name: "Pranali Sethna",
    title: "VJTI Mumbai Cube Open Officer",
    linkedin: "https://www.linkedin.com/in/alicesmith",
    gmail: "alice@gmail.com",
    img: "person-image32222.webp",
  },
  {
    name: "Disha Shete",
    title: "Web Development Officer",
    linkedin: "https://www.linkedin.com/in/alicesmith",
    gmail: "alice@gmail.com",
    img: "person-image32222.webp",
  }
];

const adminData1 = [
  {
    name: "Shakira Shaikh",
    title: "Admin",
    linkedin: "https://www.linkedin.com/in/admin1",
    gmail: "admin1@gmail.com",
    img: "admin-image1.png",
  },
  {
    name: "Mayuri Kumkar",
    title: "Admin",
    linkedin: "https://www.linkedin.com/in/admin2",
    gmail: "admin2@gmail.com",
    img: "admin-image2.png",
  },
  {
    name: "Kartik Kolte",
    title: "Admin",
    linkedin: "https://www.linkedin.com/in/admin2",
    gmail: "admin2@gmail.com",
    img: "admin-image2.png",
  },
  {
    name: "Ritesh Wadhavane",
    title: "Admin",
    linkedin: "https://www.linkedin.com/in/admin2",
    gmail: "admin2@gmail.com",
    img: "admin-image2.png",
  },
  {
    name: "Krushna Chavan",
    title: "Admin",
    linkedin: "https://www.linkedin.com/in/admin2",
    gmail: "admin2@gmail.com",
    img: "admin-image2.png",
  },
  {
    name: "Sneha Patil",
    title: "Admin",
    linkedin: "https://www.linkedin.com/in/admin2",
    gmail: "admin2@gmail.com",
    img: "admin-image2.png",
  }
];

const adminData = [
  {
    name: "Saniya Chimte",
    title: "Admin",
    linkedin: "https://www.linkedin.com/in/admin1",
    gmail: "admin1@gmail.com",
    img: "admin-image1.png",
  },
  {
    name: "Rucha Bndekar",
    title: "Admin",
    linkedin: "https://www.linkedin.com/in/admin2",
    gmail: "admin2@gmail.com",
    img: "admin-image2.png",
  },
  {
    name: "Rohit Kadam",
    title: "Admin",
    linkedin: "https://www.linkedin.com/in/admin2",
    gmail: "admin2@gmail.com",
    img: "admin-image2.png",
  },
  {
    name: "Vukta Kocharekar",
    title: "Admin",
    linkedin: "https://www.linkedin.com/in/admin2",
    gmail: "admin2@gmail.com",
    img: "admin-image2.png",
  },
  {
    name: "Sanika Kathe",
    title: "Admin",
    linkedin: "https://www.linkedin.com/in/admin2",
    gmail: "admin2@gmail.com",
    img: "admin-image2.png",
  },
  {
    name: "Gaurav Chudasama",
    title: "Admin",
    linkedin: "https://www.linkedin.com/in/admin2",
    gmail: "admin2@gmail.com",
    img: "admin-image2.png",
  }
];

const adminData2 = [
  {
    name: "Saniya Chimte",
    title: "Admin",
    linkedin: "https://www.linkedin.com/in/admin1",
    gmail: "admin1@gmail.com",
    img: "admin-image1.png",
  },
  {
    name: "Rucha Bndekar",
    title: "Admin",
    linkedin: "https://www.linkedin.com/in/admin2",
    gmail: "admin2@gmail.com",
    img: "admin-image2.png",
  },
  {
    name: "Rohit Kadam",
    title: "Admin",
    linkedin: "https://www.linkedin.com/in/admin2",
    gmail: "admin2@gmail.com",
    img: "admin-image2.png",
  },
  {
    name: "Vukta Kocharekar",
    title: "Admin",
    linkedin: "https://www.linkedin.com/in/admin2",
    gmail: "admin2@gmail.com",
    img: "admin-image2.png",
  },
  {
    name: "Sanika Kathe",
    title: "Admin",
    linkedin: "https://www.linkedin.com/in/admin2",
    gmail: "admin2@gmail.com",
    img: "admin-image2.png",
  },
  {
    name: "Gaurav Chudasama",
    title: "Admin",
    linkedin: "https://www.linkedin.com/in/admin2",
    gmail: "admin2@gmail.com",
    img: "admin-image2.png",
  }
];


function Team() {
  return (
    <>
    <div className="App">
      <br /><br /><h2>Secretaries</h2><br /><br /><br /><br />
      <div className="card-container">
        {cardData.map((data, index) => (
          <ProfileCard
            key={index}
            name={data.name}
            title={data.title}
            linkedin={data.linkedin}
            gmail={data.gmail}
            img={data.img}
          />
        ))}
      </div>
      <br /><br />
      <h2>Officers</h2><br /><br /><br />
      <div className="card-container1">
        {officerData1.map((data, index) => (
          <ProfileCard1
            key={index}
            name={data.name}
            title={data.title}
            linkedin={data.linkedin}
            gmail={data.gmail}
            img={data.img}
          />
        ))}
      </div>
      <h2> </h2><br /><br /><br />
      <div className="card-container1">
        {officerData2.map((data, index) => (
          <ProfileCard1
            key={index}
            name={data.name}
            title={data.title}
            linkedin={data.linkedin}
            gmail={data.gmail}
            img={data.img}
          />
        ))}
      </div>
      <br /><br />
      <h2>Admins</h2><br /><br /><br />
      <div className="card-container1">
        {adminData.map((data, index) => (
          <ProfileCard2
            key={index}
            name={data.name}
            title={data.title}
            linkedin={data.linkedin}
            gmail={data.gmail}
            img={data.img}
          />
        ))}
      </div>

      {/* <br/><br/> */}
      <h2> </h2><br /><br /><br />
      <div className="card-container1">
        {adminData1.map((data, index) => (
          <ProfileCard2
            key={index}
            name={data.name}
            title={data.title}
            linkedin={data.linkedin}
            gmail={data.gmail}
            img={data.img}
          />
        ))}
      </div>

      <h2> </h2><br /><br /><br />
      <div className="card-container1">
        {adminData2.map((data, index) => (
          <ProfileCard2
            key={index}
            name={data.name}
            title={data.title}
            linkedin={data.linkedin}
            gmail={data.gmail}
            img={data.img}
          />
        ))}
      </div>

    </div>
    <Fotter position="static" />
    </>
  );

}

export default Team;
