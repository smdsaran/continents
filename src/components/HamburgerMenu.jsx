import { useState } from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = ({navRegions, onClickHandler}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <div className="hamburger-wrapper">
      <button className="hamburger-toggle" onClick={toggleMenu}>
        {isOpen ? '✕' : '☰'}
      </button>

      <div className={`menu-content ${isOpen ? 'open' : ''}`}>
        <ul>
            { navRegions?.map((region , i) => {
                 return (
                    <li key={`${region}-${i}`} onClick={onClickHandler}>{region}</li>
                )
                })
            }  
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
