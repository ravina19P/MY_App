import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import styles from './Navbar.module.css';


const Navbar = () => {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
                <Link className="navbar-brand mr-5" to="#"><img src={logo} alt='logo' style={{ width: '18%' }} /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className={`nav-link ${styles.navText}`} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${styles.navText}`} to="/Features">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${styles.navText}`} to="/Contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${styles.navText}`} to="/Pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Pricing"><button className='btn btn-primary'>Get Started</button></Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={`${styles.content}`}>
                
            </div>
        </div>
    );
};

export default Navbar;
