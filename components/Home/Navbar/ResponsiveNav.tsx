"use client"

import React, { useState } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';

const ResponsiveNav = () => {
    const [showNav, setShownNav] = useState(false);
    const showNavHandler = () => setShownNav(true);
    const hideNavHandler = () => setShownNav(false);

    return (
        <div>
           <Nav openNav={showNavHandler}></Nav>
           <MobileNav showNav={showNav} closeNav={hideNavHandler}></MobileNav>
        </div>
    );
};

export default ResponsiveNav;