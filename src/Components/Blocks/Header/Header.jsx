import React, { useEffect, useState } from "react";
import classes from './Header.module.css';
import { Link, useLocation } from "react-router-dom";

function Header({ children, ...props }) {
    let name = useLocation()
    const [isActive, setIsActive] = useState(name.pathname);

    useEffect(() => {
        setIsActive(name.pathname)
    }, [name]);

    return (
        <>
            <div className={classes.headerBanner}>
                <img src="/headerBanner.png" alt="" />
            </div>
            <div className={classes.header}>
                <div className={classes.header_menu}>
                    <div className={classes.header_menu_links}>
                        <Link to={'/'} className={classes.header_menu_links_logo}>
                            <img src="/headerLogo.png" alt="" />
                        </Link>
                        <ul className={classes.header_menu_links_items}>
                            <li><Link to={'#'} className={isActive == "Таблица" ? classes.active : ""}>Таблица</Link></li>
                            <li><Link to={'#'} className={isActive == "Матчи" ? classes.active : ""}>Матчи</Link></li>
                            <li><Link to={'#'} className={isActive == "Клубы" ? classes.active : ""}>Клубы</Link></li>
                            <li><Link to={'#'} className={isActive == "Игроки" ? classes.active : ""}>Игроки</Link></li>
                            <li><Link to={'#'} className={isActive == "Турниры" ? classes.active : ""}>Турниры</Link></li>
                            <li><Link to={'news'} className={isActive == "/news" ? classes.active : ""}>Новости</Link></li>
                            <li><Link to={'#'} className={isActive == "Медия" ? classes.active : ""}>Медия</Link></li>
                            <li><Link to={'#'} className={isActive == "МЛФ Лига" ? classes.active : ""}>МЛФ Лига</Link></li>
                        </ul>
                    </div>
                    <Link to={"#"} className={classes.header_menu_signIn}>Вход / Регистрация</Link>
                </div>
            </div>
        </>
    );
}

export default Header;