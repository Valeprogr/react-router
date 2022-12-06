import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="nav">
                <a href="/" className="site-tile">Site Name</a>
                <ul>
                    <li>
                        <a href="/pricing">Pricing</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>

                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
