import React from "react";
import classes from './Footer.module.css';

function Footer({ children, ...props }) {
    return (
        <div className={classes.footerBack}>
            <div className={classes.footerCenter}>
                <div className={classes.footerBack_top}>
                    <div className={classes.footerBack_top_item}>
                        <div className={classes.footerBack_top_item_line}>
                            <div className={classes.footerBack_top_item_line_title}>МИР РПЛ</div>
                            <div className={classes.footerBack_top_item_line_link}>Таблица</div>
                            <div className={classes.footerBack_top_item_line_link}>Матчи </div>
                            <div className={classes.footerBack_top_item_line_link}>Новости </div>
                            <div className={classes.footerBack_top_item_line_link}>Видео </div>
                            <div className={classes.footerBack_top_item_line_link}>Клубы </div>
                            <div className={classes.footerBack_top_item_line_link}>Игроки </div>
                            <div className={classes.footerBack_top_item_line_link}>Статистика </div>
                            <div className={classes.footerBack_top_item_line_link}>Трансляции </div>
                        </div>
                        <div className={classes.footerBack_top_item_line}>
                            <div className={classes.footerBack_top_item_line_title}>Российская Премьер-Лига</div>
                            <div className={classes.footerBack_top_item_line_link}>О лиге</div>
                            <div className={classes.footerBack_top_item_line_link}>Арбитры </div>
                            <div className={classes.footerBack_top_item_line_link}>Главные тренеры </div>
                            <div className={classes.footerBack_top_item_line_link}>Спонсоры и партнеры </div>
                            <div className={classes.footerBack_top_item_line_link}>Билеты </div>
                            <div className={classes.footerBack_top_item_line_link}>Карта болельщика </div>
                            <div className={classes.footerBack_top_item_line_link}>Контакты </div>
                            <div className={classes.footerBack_top_item_line_link}>Антидопинг </div>
                            <div className={classes.footerBack_top_item_line_link}>Медицина </div>
                        </div>
                        <div className={classes.footerBack_top_item_line}>
                            <div className={classes.footerBack_top_item_line_title}>Документы</div>
                            <div className={classes.footerBack_top_item_line_link}>Регламенты</div>
                            <div className={classes.footerBack_top_item_line_link}>Информация </div>
                            <div className={classes.footerBack_top_item_line_link}>Антидопинг </div>
                        </div>
                    </div>
                    <div className={classes.footerBack_top_item}>
                        <div className={classes.footerBack_top_item_line}>
                            <div className={classes.footerBack_top_item_line_title}>Социальные сети</div>
                            <div className={classes.footerBack_top_item_line_soc}>
                                <div className={classes.footerBack_top_item_line_soc_block}><img src="/tg.png" alt="" /></div>
                                <div className={classes.footerBack_top_item_line_soc_block}><img src="/yt.png" alt="" /></div>
                                <div className={classes.footerBack_top_item_line_soc_block}><img src="/vk.png" alt="" /></div>
                                <div className={classes.footerBack_top_item_line_soc_block}><img src="/tt.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.footerBack_bottom}>
                    <div className={classes.footerBack_bottom_elem}>© 2001-2025 Молодежная любительская футбольная лига</div>
                    <div className={classes.footerBack_bottom_elem}>Политика обработки персональных данных</div>
                    <div className={classes.footerBack_bottom_elem}><img src="/ru.png" alt="" /></div>
                </div>
            </div>
        </div>
    );
}

export default Footer;