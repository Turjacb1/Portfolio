// import React from 'react';
// import './Header.css'

// const Header = () => (
//   <header>
//     <nav>
//       {/* <ul>
//         <li>About</li>
//         <li>Portfolio</li>
//         <li>Contact</li>
//       </ul> */}
//       <input type="text" placeholder="Search" />
//     </nav>
//   </header>
// );

// export default Header;


import React from 'react';
import './Header.css';
import { FaFacebookMessenger } from 'react-icons/fa'; // Import specific icon

const Header = () => (
  <header>
    <nav>
      <input type="text" placeholder="Search" />
    </nav>
    {/* Messenger icon for Contact */}
    <a href="https://l.messenger.com/l.php?u=https%3A%2F%2Fm.me%2Fturja.chakraborty.52%3Fhash%3DAbYCY5csRyQJKA-Q%26source%3Dqr_link_share&h=AT2LNPi8-9IUelRrf7MqDnMFz3LfKAzIq9O2T3lRcLciQiTa-B0h2I68C72Z_Vou7EhH3ev_QnexZRGiKP9sDUJgiBlxNlDj2keq5rxLW51xzi0nZVHHFXJwp96fmVXKF3JbZQ" className="messenger-icon" target="_blank" rel="noopener noreferrer">
      <FaFacebookMessenger size={40} color="#0078ff" /> {/* Use React Icon */}
    </a>
  </header>
);

export default Header;
