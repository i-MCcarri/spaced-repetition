import React from 'react';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

function Footer() {
    return (
        <footer className='footer'>
            <span>Adyceum Magna Ccarri | © 2020</span>
            <a href='https://github.com/i-MCcarri'>
                <FaGithubSquare className='icon' />
            </a>
            <a href='https://www.linkedin.com/in/adymagnaccarri'>
                <FaLinkedin className='icon' />
            </a>
        </footer>
    )
}

export default Footer