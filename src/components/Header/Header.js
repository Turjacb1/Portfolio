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
import { FaWhatsapp } from 'react-icons/fa';


const Header = () => (
  <header>
    <nav>
      <input type="text" placeholder="Search" />
    </nav>
    {/* Messenger icon for Contact */}
    <a href="https://wa.me/8801306570337
" className="messenger-icon" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp size={40} color="#0078ff" /> {/* Use React Icon */}
    </a>
  </header>
);

export default Header;
