import React from 'react'
import style from './Footer.module.scss'
import FooterLeft from "./FooterLeft/FooterLeft";
import FooterRight from "./FooterRight/FooterRight";

const Footer = () => {
    return (
        <div className={style.wrapperBlock}>
            <div className={style.springFooter}>
                <FooterLeft/>
                <FooterRight/>
            </div>
        </div>
    )
};

export default Footer;