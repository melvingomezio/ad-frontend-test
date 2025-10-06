'use client';

import React from 'react';
import { Heading } from '../../atoms/heading/Heading';
import { Icon } from '../../atoms/icon/Icon';
import { NavbarProps } from './resources/navbar.config';

export const Navbar: React.FC<NavbarProps> = ({
  text,  
  iconAlt = 'Icon',
  onTextClick,
  onIconClick,
}) => {
  return (
    <nav className="navbar flex justify-between items-center px-32 py-5">
      <div className="cursor-pointer" onClick={onTextClick}>
        <Heading variant="h2" color="primary600" fontWeight="bold">
          {text}
        </Heading>
      </div>
      <div className="cursor-pointer" onClick={onIconClick}>
        <Icon src="icons/shop-cart.svg" alt={iconAlt} />
      </div>
    </nav>
  );
};