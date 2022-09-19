import React, {useState} from 'react';
import { Link} from 'react-router-dom';

function Navbar() {
    const[click , setClick] = useState(true)
  return (
    <>
        <nav className='Navbar'></nav>
            <div className='navbar-container'>
                <Link to="/" className="navar-logo">
                    TRVL <i className='fab fa-typo3' />
                </Link>
                <div className='menu-icon'>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
            </div>
    </>
  )
}

export default Navbar