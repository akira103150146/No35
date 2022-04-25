import React from 'react';
import './Header.scss'

function Header() {
    return (
        <div className='header'>
            <div className='logo-wrap'>
                <a href='#0' className='logo'>35號Logo Here</a>
            </div>
            <nav className='navigation'>
                <input type="checkbox" id="nav-button"></input>
                <label htmlFor="nav-button"></label>
                <ul className='nav-container'>
                    <li><a href='#home'>35號工坊</a></li>
                    <li><a href='#news'>最新消息</a></li>
                    <li><a href='#blog'>部落格</a></li>
                    <li><a href='#contact'>聯絡方式</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
