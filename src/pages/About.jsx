import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const About = () => {
  return (
    <AboutStyle>
      <Link to="/" className="tombol-kembali">
        Kembali
      </Link>
      <h1>Introduce Elang Team</h1>
      <p></p>
      
      <div className="team-list-container">
        <div className="team-card">

        <Link to={'https://www.linkedin.com/in/yazid-mufid-08b174290/'} className='link__card'>
          <img src="https://media-cgk1-1.cdn.whatsapp.net/v/t61.24694-24/394785055_1754800395034067_823950723764549442_n.jpg?ccb=11-4&oh=01_AdSzs14XKWoZ-fHO1lKr4PNgLvZ8qVGhtsm9QuY92RwaVA&oe=6576712E&_nc_sid=e6ed6c&_nc_cat=105" alt="Person 1" />
          <div>
            <h2>Yazid Mufid</h2>
            <p>Surabaya</p>
            <p>Member</p>
            <p>Si Paling UI Designer</p>
          </div>
          </Link>
        </div>
        
        <div className="team-card">
        <Link to={'https://www.instagram.com/abilsyri_/'} className='link__card'>
          <img src="https://avatars.githubusercontent.com/u/144302495?v=4e" alt="Person 2" />
          <div>
            <h2>Abil Sayuri</h2>
            <p>Bitung</p>
            <p>Member</p>
            <p>Si paling Frontend</p>
          </div>
          </Link>
        </div>
        <div className="team-card">
        <Link to={'https://www.linkedin.com/in/ka-rusnanto-19ab8328b/'} className='link__card'>
          <img src="https://avatars.githubusercontent.com/u/148330242?v=4" alt="Person 3" />
          <div>
            <h2>Rusnanto</h2>
            <p>Indramayu</p>
            <p>Leader</p>
            <p>Si Paling Backend</p>
          </div>
         </Link> 
        </div>
      </div>
    </AboutStyle>
  );
};

const AboutStyle = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    height: 150vh;

    

  .tombol-kembali {
    text-decoration: none;
    background-color: darkcyan;
    color: white;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    margin-bottom: 20px;
    align-self: flex-start; /* Pindahkan tombol ke kiri */
  }

  .link__card {
    text-decoration: none;
    color: teal;
  }

  h1 {
    color: teal;
    margin-bottom: 20px;
  }

  .team-list-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
  }

  .team-card {
    text-align: center;
    padding: 20px;
    border: 3px solid teal;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    width: 200px;

    &:hover {
      transform: scale(1.05);
    }

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 10px;
    }

    h2 {
      color: teal;
      margin-bottom: 10px;
    }

    p {
      line-height: 1.6;
    }

    @media (min-width: 768px){

    }

    @media (min-width: 992px) {

    }
`;

export default About;
