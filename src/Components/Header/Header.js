import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="flex">

            {/* logo section start */}
            <div className="logo">
                <img src="./images/logo.png" alt="" />
                <div>
                    <h2>Sam</h2>
                    <p>Medicare</p>
                </div>
            </div>
            {/* logo section end */}

            {/* navbar section start */}
            <div className="navbar">
                <ul>
                    <li><a id="active" href="/home">home</a></li>
                    <li><a href="/shop">doctors</a></li>
                    <li><a href="/blog">hospitals</a></li>
                    <li><a href="/pages">blog</a></li>
                    <li><a href="/contact">contact</a></li>
                </ul>
            </div>
            {/* navbar section end */}
        </div>
    );
};

export default Header;