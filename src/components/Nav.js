import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Mini Owners</Link></li>
                <li><Link to="/guides">Guides</Link></li>
                <li><Link to="/specialists">Specialists</Link></li>
            </ul>
        </nav>
    )
}
export default Nav;