import React, { useState } from 'react';
import style from './Header.module.scss';
import styleMenu from './Menu/Menu.module.scss';
import Menu from './Menu/Menu';
import logo from '../image/logo.svg';
import '../index.scss';

const Header = () => {
  const [addClass, setAddClass] = useState(false);
  const menuBurgerClassActive = addClass ? style.menuBurgerActive : style.menuBurger;
  const menuActive = addClass ? styleMenu.menuActive : styleMenu.menu;
  const toggleBurgerMenu = () => {
    setAddClass(!addClass);
  };
  if (addClass) {
    document.querySelector('body').classList.add('lock');
  } else {
    document.querySelector('body').classList.remove('lock');
  }
  return (
    <header>
      <div className={style.wrapperBlock}>
        <div className={style.headerBody}>
          <div className={style.logo}>
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className={menuBurgerClassActive} onClick={toggleBurgerMenu}>
            <span />
          </div>
          <Menu menu={menuActive} />
        </div>
      </div>
    </header>
  );
};

export default Header;
