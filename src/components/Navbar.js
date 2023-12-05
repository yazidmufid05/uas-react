import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <NavbarStyle>
      <h1>Qur'an Pro</h1>
      
      <Link to="/doa" className="nav-item">
        Doa
      </Link>
      <Link to="/waktu" className="nav-item">
        Jadwal
      </Link>
      <Link to="/asmaulhusna" className="nav-item">
        Asmaul Husna
      </Link>
      <Link to="/about" className="nav-item">
        About Us
      </Link>
    </NavbarStyle>
  );
};

const NavbarStyle = styled.nav`

  display: flex;
  justify-content: center;
  padding: 10px;

  h1 {
    color: teal;
  }

  .nav-item {
        display: flex;
        width: 1.rem;
        margin-top: 5px;
        text-decoration: none;
        background-color: darkcyan;
        color: white;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        text-align: center;

    &:hover {
      background-color: #006666;
    }
  }
`;

export default Navbar;
