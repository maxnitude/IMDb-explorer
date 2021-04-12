import React from 'react';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import './header.scss';

const Header = () => {

    return (
        <header className="header">
            <div className="header__logo">FILMS</div>
            <HeaderSearch />
        </header>
    )
};

export default Header;