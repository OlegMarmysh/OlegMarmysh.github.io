import React, {useState} from 'react'
import style from './Header.module.scss'
import styleMenu from './Menu/Menu.module.scss'
import Menu from "./Menu/Menu"
import logo from "../image/logo.svg"

const Header = () => {
    const [addClass, setAddClass] = useState(false);
    const menuBurgerClassActive = addClass ? style.menuBurgerActive : style.menuBurger;
    const menuActive = addClass ? styleMenu.menuActive : styleMenu.menu;
    return (
        <header>
            <div className={style.wrapperBlock}>
                <div className={style.headerBody}>
                    <div className={style.logo}>
                        <a href="#">
                            <img src={logo} alt="logo"/>
                        </a>
                    </div>
                    <div className={menuBurgerClassActive} onClick={()=>{setAddClass(!addClass)}}>
                        <span></span>
                    </div>
                    <Menu menu={menuActive}/>
                </div>
            </div>
        </header>
    )
};

export default Header;