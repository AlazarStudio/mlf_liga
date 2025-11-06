import React from "react";
import classes from './Header.module.css';

function Header({ children, ...props }) {
    let isActive = "Главная"
    return (
        <>
            <div className={classes.headerBanner}>
                <img src="headerBanner.png" alt="" />
            </div>
            <div className={classes.header}>
                <div className={classes.header_menu}>
                    <div className={classes.header_menu_links}>
                        <div className={classes.header_menu_links_logo}>
                            <img src="headerLogo.png" alt="" />
                        </div>
                        <ul className={classes.header_menu_links_items}>
                            <li><a href="#" className={isActive == "Таблица" ? classes.active : ""}>Таблица</a></li>
                            <li><a href="#" className={isActive == "Матчи" ? classes.active : ""}>Матчи</a></li>
                            <li><a href="#" className={isActive == "Клубы" ? classes.active : ""}>Клубы</a></li>
                            <li><a href="#" className={isActive == "Игроки" ? classes.active : ""}>Игроки</a></li>
                            <li><a href="#" className={isActive == "Турниры" ? classes.active : ""}>Турниры</a></li>
                            <li><a href="#" className={isActive == "Новости" ? classes.active : ""}>Новости</a></li>
                            <li><a href="#" className={isActive == "Медия" ? classes.active : ""}>Медия</a></li>
                            <li><a href="#" className={isActive == "МЛФ Лига" ? classes.active : ""}>МЛФ Лига</a></li>
                        </ul>
                    </div>
                    <a href="#" className={classes.header_menu_signIn}>Вход / Регистрация</a>
                </div>
            </div>
        </>
    );
}

export default Header;