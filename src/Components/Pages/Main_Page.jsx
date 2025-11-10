import React, { useState } from "react";
import classes from './Main_Page.module.css';
import MatchSlide from "../Blocks/MatchSlide/MatchSlide";

function Main_Page({ children, ...props }) {
    let matches = [
        {
            season: "Сезон 25/26",
            tour: 'Тур 14',
            date: '11 ноябрь',
            team1: {
                logo: "team1.png",
                name: 'Интер',
                score: '0'
            },
            team2: {
                logo: "team2.png",
                name: 'ФК Къумуш',
                score: '2'
            },
            isFinished: true
        },
        {
            season: "Сезон 25/26",
            tour: 'Тур 14',
            date: '11 ноябрь',
            team1: {
                logo: "team1.png",
                name: 'Интер',
                score: '0'
            },
            team2: {
                logo: "team2.png",
                name: 'ФК Къумуш',
                score: '2'
            },
            isFinished: true
        },
        {
            season: "Сезон 25/26",
            tour: 'Тур 14',
            date: '11 ноябрь',
            team1: {
                logo: "team1.png",
                name: 'Интер',
                score: '0'
            },
            team2: {
                logo: "team2.png",
                name: 'ФК Къумуш',
                score: '2'
            },
            isFinished: true
        },
        {
            season: "Сезон 25/26",
            tour: 'Тур 14',
            date: '11 ноябрь',
            team1: {
                logo: "team1.png",
                name: 'Интер',
                score: '0'
            },
            team2: {
                logo: "team2.png",
                name: 'ФК Къумуш',
                score: '2'
            },
            isFinished: true
        },
        {
            season: "Сезон 25/26",
            tour: 'Тур 14',
            date: '11 ноябрь',
            team1: {
                logo: "team1.png",
                name: 'Интер',
                score: '0'
            },
            team2: {
                logo: "team2.png",
                name: 'ФК Къумуш',
                score: '2'
            },
            isFinished: false
        },
        {
            season: "Сезон 25/26",
            tour: 'Тур 14',
            date: '11 ноябрь',
            team1: {
                logo: "team1.png",
                name: 'Интер',
                score: '0'
            },
            team2: {
                logo: "team2.png",
                name: 'ФК Къумуш',
                score: '2'
            },
            isFinished: false
        },
        {
            season: "Сезон 25/26",
            tour: 'Тур 14',
            date: '11 ноябрь',
            team1: {
                logo: "team1.png",
                name: 'Интер',
                score: '0'
            },
            team2: {
                logo: "team2.png",
                name: 'ФК Къумуш',
                score: '2'
            },
            isFinished: true
        },
    ]

    const [isActive, setIsActive] = useState(true);
    const [isActivePoint, setIsActivePoint] = useState("Бомбардиры");

    return (
        <>
            {/* Прошедшие / будущие матчи */}
            <div className={classes.match}>
                <div className={classes.matchBtns}>
                    <div className={`${classes.matchBtns_item} ${isActive == true ? classes.activBtn : ''}`}
                        onClick={() => setIsActive(true)}>
                        ПРОШЕДШИЕ
                    </div>
                    <div className={`${classes.matchBtns_item} ${isActive == false ? classes.activBtn : ''}`}
                        onClick={() => setIsActive(false)}>
                        БУДУЩИЕ
                    </div>
                </div>
                <div className={classes.matchSlider}>
                    {matches.map((match) => (
                        match.isFinished == isActive &&
                        <MatchSlide
                            season={match.season}
                            tour={match.tour}
                            date={match.date}
                            team1={match.team1}
                            team2={match.team2}
                        />
                    ))}
                </div>
            </div>

            {/* Новости */}
            <div className={classes.centerBlock}>
                <div className={classes.news_and_stats}>

                    <div className={classes.news}>
                        <div className={classes.title_block}>Последние новости</div>
                        <div className={classes.news_items}>
                            <div className={classes.news_items_elem}>
                                <div className={classes.news_items_elem_img}>
                                    <img src="new_bg.png" alt="" />
                                    <div className={classes.news_items_elem_newInfo}>
                                        <img src="new_info.png" alt="" />
                                        Новость РПЛ
                                    </div>
                                </div>
                                <div className={classes.news_items_elem_date}>Вс, 02.11.2025</div>
                                <div className={classes.news_items_elem_title}>
                                    Гол и результативный пас Максима Петрова принесли «Балтике» победу над «Ахматом»
                                </div>
                                <div className={classes.news_items_elem_desc}>
                                    Балтийцы дома обыграли грозненцев со счётом 2:0
                                </div>
                            </div>

                            <div className={classes.news_items_elem}>
                                <div className={classes.news_items_elem_img}>
                                    <img src="new_bg.png" alt="" />
                                    <div className={classes.news_items_elem_newInfo}>
                                        <img src="new_info.png" alt="" />
                                        Новость РПЛ
                                    </div>
                                </div>
                                <div className={classes.news_items_elem_date}>Вс, 02.11.2025</div>
                                <div className={classes.news_items_elem_title}>
                                    Гол и результативный пас Максима Петрова принесли «Балтике» победу над «Ахматом»
                                </div>
                                <div className={classes.news_items_elem_desc}>
                                    Балтийцы дома обыграли грозненцев со счётом 2:0
                                </div>
                            </div>

                            <div className={classes.news_items_elem}>
                                <div className={classes.news_items_elem_img}>
                                    <img src="new_bg.png" alt="" />
                                    <div className={classes.news_items_elem_newInfo}>
                                        <img src="new_info.png" alt="" />
                                        Новость РПЛ
                                    </div>
                                </div>
                                <div className={classes.news_items_elem_date}>Вс, 02.11.2025</div>
                                <div className={classes.news_items_elem_title}>
                                    Гол и результативный пас Максима Петрова принесли «Балтике» победу над «Ахматом»
                                </div>
                                <div className={classes.news_items_elem_desc}>
                                    Балтийцы дома обыграли грозненцев со счётом 2:0
                                </div>
                            </div>

                            <div className={classes.news_items_elem}>
                                <div className={classes.news_items_elem_img}>
                                    <img src="new_bg.png" alt="" />
                                    <div className={classes.news_items_elem_newInfo}>
                                        <img src="new_info.png" alt="" />
                                        Новость РПЛ
                                    </div>
                                </div>
                                <div className={classes.news_items_elem_date}>Вс, 02.11.2025</div>
                                <div className={classes.news_items_elem_title}>
                                    Гол и результативный пас Максима Петрова принесли «Балтике» победу над «Ахматом»
                                </div>
                                <div className={classes.news_items_elem_desc}>
                                    Балтийцы дома обыграли грозненцев со счётом 2:0
                                </div>
                            </div>

                            <div className={classes.news_items_elem}>
                                <div className={classes.news_items_elem_img}>
                                    <img src="new_bg.png" alt="" />
                                    <div className={classes.news_items_elem_newInfo}>
                                        <img src="new_info.png" alt="" />
                                        Новость РПЛ
                                    </div>
                                </div>
                                <div className={classes.news_items_elem_date}>Вс, 02.11.2025</div>
                                <div className={classes.news_items_elem_title}>
                                    Гол и результативный пас Максима Петрова принесли «Балтике» победу над «Ахматом»
                                </div>
                                <div className={classes.news_items_elem_desc}>
                                    Балтийцы дома обыграли грозненцев со счётом 2:0
                                </div>
                            </div>

                            <div className={classes.news_items_elem}>
                                <div className={classes.news_items_elem_img}>
                                    <img src="new_bg.png" alt="" />
                                    <div className={classes.news_items_elem_newInfo}>
                                        <img src="new_info.png" alt="" />
                                        Новость РПЛ
                                    </div>
                                </div>
                                <div className={classes.news_items_elem_date}>Вс, 02.11.2025</div>
                                <div className={classes.news_items_elem_title}>
                                    Гол и результативный пас Максима Петрова принесли «Балтике» победу над «Ахматом»
                                </div>
                                <div className={classes.news_items_elem_desc}>
                                    Балтийцы дома обыграли грозненцев со счётом 2:0
                                </div>
                            </div>

                            <div className={classes.news_items_elem}>
                                <div className={classes.news_items_elem_img}>
                                    <img src="new_bg.png" alt="" />
                                    <div className={classes.news_items_elem_newInfo}>
                                        <img src="new_info.png" alt="" />
                                        Новость РПЛ
                                    </div>
                                </div>
                                <div className={classes.news_items_elem_date}>Вс, 02.11.2025</div>
                                <div className={classes.news_items_elem_title}>
                                    Гол и результативный пас Максима Петрова принесли «Балтике» победу над «Ахматом»
                                </div>
                                <div className={classes.news_items_elem_desc}>
                                    Балтийцы дома обыграли грозненцев со счётом 2:0
                                </div>
                            </div>

                            <div className={classes.news_items_elem}>
                                <div className={classes.news_items_elem_img}>
                                    <img src="new_bg.png" alt="" />
                                    <div className={classes.news_items_elem_newInfo}>
                                        <img src="new_info.png" alt="" />
                                        Новость РПЛ
                                    </div>
                                </div>
                                <div className={classes.news_items_elem_date}>Вс, 02.11.2025</div>
                                <div className={classes.news_items_elem_title}>
                                    Гол и результативный пас Максима Петрова принесли «Балтике» победу над «Ахматом»
                                </div>
                                <div className={classes.news_items_elem_desc}>
                                    Балтийцы дома обыграли грозненцев со счётом 2:0
                                </div>
                            </div>

                            <div className={classes.news_items_elem}>
                                <div className={classes.news_items_elem_img}>
                                    <img src="new_bg.png" alt="" />
                                    <div className={classes.news_items_elem_newInfo}>
                                        <img src="new_info.png" alt="" />
                                        Новость РПЛ
                                    </div>
                                </div>
                                <div className={classes.news_items_elem_date}>Вс, 02.11.2025</div>
                                <div className={classes.news_items_elem_title}>
                                    Гол и результативный пас Максима Петрова принесли «Балтике» победу над «Ахматом»
                                </div>
                                <div className={classes.news_items_elem_desc}>
                                    Балтийцы дома обыграли грозненцев со счётом 2:0
                                </div>
                            </div>

                            <div className={classes.news_items_elem}>
                                <div className={classes.news_items_elem_img}>
                                    <img src="new_bg.png" alt="" />
                                    <div className={classes.news_items_elem_newInfo}>
                                        <img src="new_info.png" alt="" />
                                        Новость РПЛ
                                    </div>
                                </div>
                                <div className={classes.news_items_elem_date}>Вс, 02.11.2025</div>
                                <div className={classes.news_items_elem_title}>
                                    Гол и результативный пас Максима Петрова принесли «Балтике» победу над «Ахматом»
                                </div>
                                <div className={classes.news_items_elem_desc}>
                                    Балтийцы дома обыграли грозненцев со счётом 2:0
                                </div>
                            </div>

                            <div className={classes.news_items_elem}>
                                <div className={classes.news_items_elem_img}>
                                    <img src="new_bg.png" alt="" />
                                    <div className={classes.news_items_elem_newInfo}>
                                        <img src="new_info.png" alt="" />
                                        Новость РПЛ
                                    </div>
                                </div>
                                <div className={classes.news_items_elem_date}>Вс, 02.11.2025</div>
                                <div className={classes.news_items_elem_title}>
                                    Гол и результативный пас Максима Петрова принесли «Балтике» победу над «Ахматом»
                                </div>
                                <div className={classes.news_items_elem_desc}>
                                    Балтийцы дома обыграли грозненцев со счётом 2:0
                                </div>
                            </div>

                            <div className={classes.news_items_elem}>
                                <div className={classes.news_items_elem_img}>
                                    <img src="new_bg.png" alt="" />
                                    <div className={classes.news_items_elem_newInfo}>
                                        <img src="new_info.png" alt="" />
                                        Новость РПЛ
                                    </div>
                                </div>
                                <div className={classes.news_items_elem_date}>Вс, 02.11.2025</div>
                                <div className={classes.news_items_elem_title}>
                                    Гол и результативный пас Максима Петрова принесли «Балтике» победу над «Ахматом»
                                </div>
                                <div className={classes.news_items_elem_desc}>
                                    Балтийцы дома обыграли грозненцев со счётом 2:0
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.stats}>
                        <div className={classes.stats_block}>
                            <div className={classes.stats_block_title}>Турнирная таблица</div>
                            <div className={classes.stats_block_table}>
                                <div className={classes.stats_block_tableHead}>
                                    <div className={classes.stats_block_tableHead_block}>
                                        <div className={classes.stats_block_tableHead_num}>#</div>
                                        <div className={classes.stats_block_tableHead_club}>Клуб</div>
                                    </div>

                                    <div className={classes.stats_block_tableHead_block}>
                                        <div className={classes.stats_block_tableHead_games}>И</div>
                                        <div className={classes.stats_block_tableHead_points}>О</div>
                                    </div>
                                </div>

                                <div className={classes.stats_block_tableData}>
                                    <div className={classes.stats_block_tableData_block}>
                                        <div className={classes.stats_block_tableData_num}>1</div>
                                        <div className={classes.stats_block_tableData_club}><img src="teamLogo.png" alt="" />ЦСКА</div>
                                    </div>

                                    <div className={classes.stats_block_tableData_block}>
                                        <div className={classes.stats_block_tableData_games}>12</div>
                                        <div className={classes.stats_block_tableData_points}>30</div>
                                    </div>
                                </div>
                                <div className={classes.stats_block_tableData}>
                                    <div className={classes.stats_block_tableData_block}>
                                        <div className={classes.stats_block_tableData_num}>2</div>
                                        <div className={classes.stats_block_tableData_club}><img src="teamLogo.png" alt="" />ЦСКА</div>
                                    </div>

                                    <div className={classes.stats_block_tableData_block}>
                                        <div className={classes.stats_block_tableData_games}>12</div>
                                        <div className={classes.stats_block_tableData_points}>30</div>
                                    </div>
                                </div>
                                <div className={classes.stats_block_tableData}>
                                    <div className={classes.stats_block_tableData_block}>
                                        <div className={classes.stats_block_tableData_num}>3</div>
                                        <div className={classes.stats_block_tableData_club}><img src="teamLogo.png" alt="" />ЦСКА</div>
                                    </div>

                                    <div className={classes.stats_block_tableData_block}>
                                        <div className={classes.stats_block_tableData_games}>12</div>
                                        <div className={classes.stats_block_tableData_points}>30</div>
                                    </div>
                                </div>
                                <div className={classes.stats_block_tableData}>
                                    <div className={classes.stats_block_tableData_block}>
                                        <div className={classes.stats_block_tableData_num}>4</div>
                                        <div className={classes.stats_block_tableData_club}><img src="teamLogo.png" alt="" />ЦСКА</div>
                                    </div>

                                    <div className={classes.stats_block_tableData_block}>
                                        <div className={classes.stats_block_tableData_games}>12</div>
                                        <div className={classes.stats_block_tableData_points}>30</div>
                                    </div>
                                </div>
                                <div className={classes.stats_block_tableData}>
                                    <div className={classes.stats_block_tableData_block}>
                                        <div className={classes.stats_block_tableData_num}>5</div>
                                        <div className={classes.stats_block_tableData_club}><img src="teamLogo.png" alt="" />ЦСКА</div>
                                    </div>

                                    <div className={classes.stats_block_tableData_block}>
                                        <div className={classes.stats_block_tableData_games}>12</div>
                                        <div className={classes.stats_block_tableData_points}>30</div>
                                    </div>
                                </div>
                                <div className={classes.stats_block_tableData}>
                                    <div className={classes.stats_block_tableData_block}>
                                        <div className={classes.stats_block_tableData_num}>6</div>
                                        <div className={classes.stats_block_tableData_club}><img src="teamLogo.png" alt="" />ЦСКА</div>
                                    </div>

                                    <div className={classes.stats_block_tableData_block}>
                                        <div className={classes.stats_block_tableData_games}>12</div>
                                        <div className={classes.stats_block_tableData_points}>30</div>
                                    </div>
                                </div>
                                <div className={classes.stats_block_tableData}>
                                    <div className={classes.stats_block_tableData_block}>
                                        <div className={classes.stats_block_tableData_num}>7</div>
                                        <div className={classes.stats_block_tableData_club}><img src="teamLogo.png" alt="" />ЦСКА</div>
                                    </div>

                                    <div className={classes.stats_block_tableData_block}>
                                        <div className={classes.stats_block_tableData_games}>12</div>
                                        <div className={classes.stats_block_tableData_points}>30</div>
                                    </div>
                                </div>
                                <div className={classes.stats_block_tableData}>
                                    <div className={classes.stats_block_tableData_block}>
                                        <div className={classes.stats_block_tableData_num}>8</div>
                                        <div className={classes.stats_block_tableData_club}><img src="teamLogo.png" alt="" />ЦСКА</div>
                                    </div>

                                    <div className={classes.stats_block_tableData_block}>
                                        <div className={classes.stats_block_tableData_games}>12</div>
                                        <div className={classes.stats_block_tableData_points}>30</div>
                                    </div>
                                </div>

                                <div className={classes.stats_block_more}>Подробнее <img src="arrowRight.png" alt="" /></div>
                            </div>
                        </div>
                        <div className={classes.stats_block}>
                            <div className={classes.stats_block_title}>
                                <div className={`${classes.stats_block_btn} ${isActivePoint == 'Бомбардиры' ? classes.activePoint : ''}`}
                                    onClick={() => setIsActivePoint("Бомбардиры")}>
                                    Бомбардиры
                                </div>
                                <div className={`${classes.stats_block_btn} ${isActivePoint == 'Ассистенты' ? classes.activePoint : ''}`}
                                    onClick={() => setIsActivePoint("Ассистенты")}>
                                    Ассистенты
                                </div>
                            </div>
                            <div className={classes.stats_block_table}>
                                <div className={classes.stats_block_tableHead}>
                                    <div className={classes.stats_block_tableHead_block}>
                                        <div className={classes.stats_block_tableHead_num}>#</div>
                                        <div className={classes.stats_block_tableHead_club}>Клуб</div>
                                    </div>

                                    <div className={classes.stats_block_tableHead_block}>
                                        ГОЛЫ
                                    </div>
                                </div>

                                <div className={classes.stats_block_tableData}>
                                    <div className={classes.stats_block_tableData_block}>
                                        <div className={classes.stats_block_tableData_num}>1</div>
                                        <div className={`${classes.stats_block_tableData_club} ${classes.br}`}>
                                            <img src="playerLogo.png" alt="" />Батраков
                                        </div>
                                    </div>

                                    <div className={classes.stats_block_tableData_block}>
                                        <div className={classes.stats_block_tableData_points}>30</div>
                                    </div>
                                </div>
                                <div className={classes.stats_block_tableData}>
                                    <div className={classes.stats_block_tableData_block}>
                                        <div className={classes.stats_block_tableData_num}>2</div>
                                        <div className={`${classes.stats_block_tableData_club} ${classes.br}`}>
                                            <img src="playerLogo.png" alt="" />Батраков
                                        </div>
                                    </div>

                                    <div className={classes.stats_block_tableData_block}>
                                        <div className={classes.stats_block_tableData_points}>30</div>
                                    </div>
                                </div>
                                <div className={classes.stats_block_tableData}>
                                    <div className={classes.stats_block_tableData_block}>
                                        <div className={classes.stats_block_tableData_num}>3</div>
                                        <div className={`${classes.stats_block_tableData_club} ${classes.br}`}>
                                            <img src="playerLogo.png" alt="" />Батраков
                                        </div>
                                    </div>

                                    <div className={classes.stats_block_tableData_block}>
                                        <div className={classes.stats_block_tableData_points}>30</div>
                                    </div>
                                </div>
                                <div className={classes.stats_block_tableData}>
                                    <div className={classes.stats_block_tableData_block}>
                                        <div className={classes.stats_block_tableData_num}>4</div>
                                        <div className={`${classes.stats_block_tableData_club} ${classes.br}`}>
                                            <img src="playerLogo.png" alt="" />Батраков
                                        </div>
                                    </div>

                                    <div className={classes.stats_block_tableData_block}>
                                        <div className={classes.stats_block_tableData_points}>30</div>
                                    </div>
                                </div>
                                <div className={classes.stats_block_tableData}>
                                    <div className={classes.stats_block_tableData_block}>
                                        <div className={classes.stats_block_tableData_num}>5</div>
                                        <div className={`${classes.stats_block_tableData_club} ${classes.br}`}>
                                            <img src="playerLogo.png" alt="" />Батраков
                                        </div>
                                    </div>

                                    <div className={classes.stats_block_tableData_block}>
                                        <div className={classes.stats_block_tableData_points}>30</div>
                                    </div>
                                </div>

                                <div className={classes.stats_block_more}>Полный список</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Спонсоры */}
            <div className={classes.centerBlock} style={{ backgroundColor: '#2A0054' }}>
                <div className={classes.sponsors}>
                    <img src="s1.png" alt="" />
                    <img src="s2.png" alt="" />
                    <img src="s3.png" alt="" />
                    <img src="s4.png" alt="" />
                    <img src="s5.png" alt="" />
                </div>
            </div>

            {/* Статистика */}
            <div className={classes.centerBlock}>
                <div className={classes.statistic}>
                    <div className={classes.statistic_title}>
                        <div className={classes.title_block}>Статистика МЛФ Лиги 2025/26</div>
                        <div className={classes.statistic_title_moreLink}>Больше данных <img src="/arrowRight.png" alt="" /></div>
                    </div>
                    <div className={classes.statistic_table}>
                        <div className={classes.statistic_table_item}>
                            <div className={classes.statistic_table_item_title}>
                                <div className={classes.statistic_table_item_title_img}>
                                    <img src="table1.png" alt="" />
                                </div>
                                <div className={classes.statistic_table_item_info}>
                                    <div className={classes.statistic_table_item_info_name}>Сыгранные матчи</div>
                                    <div className={classes.statistic_table_item_info_stats}>111</div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.statistic_table_item}>
                            <div className={classes.statistic_table_item_title}>
                                <div className={classes.statistic_table_item_info}>
                                    <div className={classes.statistic_table_item_info_name}>Победы</div>
                                    <div className={classes.statistic_table_item_info_stats}>77</div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.statistic_table_item}>
                            <div className={classes.statistic_table_item_title}>
                                <div className={classes.statistic_table_item_info}>
                                    <div className={classes.statistic_table_item_info_name}>Ничьи</div>
                                    <div className={classes.statistic_table_item_info_stats}>34</div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.statistic_table_item}>
                            <div className={classes.statistic_table_item_title}>
                                <div className={classes.statistic_table_item_info}>
                                    <div className={classes.statistic_table_item_info_name}>Общая посещаемость</div>
                                    <div className={classes.statistic_table_item_info_stats}>1 519 855</div>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className={classes.statistic_table_item}>
                            <div className={classes.statistic_table_item_title}>
                                <div className={classes.statistic_table_item_title_img}>
                                    <img src="tableBall.png" alt="" />
                                </div>
                                <div className={classes.statistic_table_item_info}>
                                    <div className={classes.statistic_table_item_info_name}>Голы</div>
                                    <div className={classes.statistic_table_item_info_stats}>293</div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.statistic_table_item}>
                            <div className={classes.statistic_table_item_title}>
                                <div className={classes.statistic_table_item_info}>
                                    <div className={classes.statistic_table_item_info_name}>Голы (среднее за матч)</div>
                                    <div className={classes.statistic_table_item_info_stats}>2.64</div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.statistic_table_item}>
                            <div className={classes.statistic_table_item_title}>
                                <div className={classes.statistic_table_item_info}>
                                    <div className={classes.statistic_table_item_info_name}>Пенальти</div>
                                    <div className={classes.statistic_table_item_info_stats}>45</div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.statistic_table_item}>
                            <div className={classes.statistic_table_item_title}>
                                <div className={classes.statistic_table_item_info}>
                                    <div className={classes.statistic_table_item_info_name}>Пенальти реализованные</div>
                                    <div className={classes.statistic_table_item_info_stats}>33</div>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className={classes.statistic_table_item}>
                            <div className={classes.statistic_table_item_title}>
                                <div className={classes.statistic_table_item_title_img}>
                                    <img src="tableFoals.png" alt="" />
                                </div>
                                <div className={classes.statistic_table_item_info}>
                                    <div className={classes.statistic_table_item_info_name}>Фолы (среднее за матч)</div>
                                    <div className={classes.statistic_table_item_info_stats}>29</div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.statistic_table_item}>
                            <div className={classes.statistic_table_item_title}>
                                <div className={classes.statistic_table_item_info}>
                                    <div className={classes.statistic_table_item_info_name}>Желтые карточки</div>
                                    <div className={classes.statistic_table_item_info_stats}>484 <img src="/tableYellow.png" alt="" /></div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.statistic_table_item}>
                            <div className={classes.statistic_table_item_title}>
                                <div className={classes.statistic_table_item_info}>
                                    <div className={classes.statistic_table_item_info_name}>Двойные желтые карточки</div>
                                    <div className={classes.statistic_table_item_info_stats}>16 <img src="/tableYellowRed.png" alt="" /></div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.statistic_table_item}>
                            <div className={classes.statistic_table_item_title}>
                                <div className={classes.statistic_table_item_info}>
                                    <div className={classes.statistic_table_item_info_name}>Красные карточки</div>
                                    <div className={classes.statistic_table_item_info_stats}>9 <img src="/tableRed.png" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Видео */}
            <div className={classes.centerBlock}>
                <div className={classes.videos}>
                    <div className={classes.statistic_title}>
                        <div className={classes.title_block}>Популярные видео</div>
                        <div className={classes.statistic_title_moreLink}>Все видео<img src="/arrowRight.png" alt="" /></div>
                    </div>

                    <div className={classes.videos_items}>
                        <div className={classes.videos_items_item}>
                            <div className={classes.videos_items_item_img}>
                                <img src="videoPreview.png" alt="" />
                            </div>
                            <div className={classes.videos_items_item_info}>
                                <div className={classes.videos_items_item_info_tag}>Обзоры</div>
                                <div className={classes.videos_items_item_info_date}>Пн, 18.08.2025</div>
                            </div>

                            <div className={classes.videos_items_item_info_name}>Спартак-Москва 2-2 Зенит</div>
                        </div>
                        <div className={classes.videos_items_item}>
                            <div className={classes.videos_items_item_img}>
                                <img src="videoPreview.png" alt="" />
                            </div>
                            <div className={classes.videos_items_item_info}>
                                <div className={classes.videos_items_item_info_tag}>Обзоры</div>
                                <div className={classes.videos_items_item_info_date}>Пн, 18.08.2025</div>
                            </div>

                            <div className={classes.videos_items_item_info_name}>Спартак-Москва 2-2 Зенит</div>
                        </div>
                        <div className={classes.videos_items_item}>
                            <div className={classes.videos_items_item_img}>
                                <img src="videoPreview.png" alt="" />
                            </div>
                            <div className={classes.videos_items_item_info}>
                                <div className={classes.videos_items_item_info_tag}>Обзоры</div>
                                <div className={classes.videos_items_item_info_date}>Пн, 18.08.2025</div>
                            </div>

                            <div className={classes.videos_items_item_info_name}>Спартак-Москва 2-2 Зенит</div>
                        </div>
                        <div className={classes.videos_items_item}>
                            <div className={classes.videos_items_item_img}>
                                <img src="videoPreview.png" alt="" />
                            </div>
                            <div className={classes.videos_items_item_info}>
                                <div className={classes.videos_items_item_info_tag}>Обзоры</div>
                                <div className={classes.videos_items_item_info_date}>Пн, 18.08.2025</div>
                            </div>

                            <div className={classes.videos_items_item_info_name}>Спартак-Москва 2-2 Зенит</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Фото */}
            <div className={classes.centerBlock}>
                <div className={classes.videos}>
                    <div className={classes.statistic_title}>
                        <div className={classes.title_block}>Фото</div>
                        <div className={classes.statistic_title_moreLink}>Все фото <img src="/arrowRight.png" alt="" /></div>
                    </div>

                    <div className={classes.videos_items}>
                        <div className={classes.videos_items_item}>
                            <div className={classes.videos_items_item_img}>
                                <img src="photoPreview.png" alt="" />
                                <div className={classes.news_items_elem_newInfo}>
                                    <img src="photos.png" alt="" />
                                    38 фото
                                </div>
                            </div>
                            <div className={classes.videos_items_item_info}>
                                <div className={classes.videos_items_item_info_date}>Пн, 18.08.2025</div>
                            </div>

                            <div className={classes.videos_items_item_info_name}>Зенит 2-0 Локомотив</div>
                        </div>
                        <div className={classes.videos_items_item}>
                            <div className={classes.videos_items_item_img}>
                                <img src="photoPreview.png" alt="" />
                                <div className={classes.news_items_elem_newInfo}>
                                    <img src="photos.png" alt="" />
                                    38 фото
                                </div>
                            </div>
                            <div className={classes.videos_items_item_info}>
                                <div className={classes.videos_items_item_info_date}>Пн, 18.08.2025</div>
                            </div>

                            <div className={classes.videos_items_item_info_name}>Зенит 2-0 Локомотив</div>
                        </div>
                        <div className={classes.videos_items_item}>
                            <div className={classes.videos_items_item_img}>
                                <img src="photoPreview.png" alt="" />
                                <div className={classes.news_items_elem_newInfo}>
                                    <img src="photos.png" alt="" />
                                    38 фото
                                </div>
                            </div>
                            <div className={classes.videos_items_item_info}>
                                <div className={classes.videos_items_item_info_date}>Пн, 18.08.2025</div>
                            </div>

                            <div className={classes.videos_items_item_info_name}>Зенит 2-0 Локомотив</div>
                        </div>
                        <div className={classes.videos_items_item}>
                            <div className={classes.videos_items_item_img}>
                                <img src="photoPreview.png" alt="" />
                                <div className={classes.news_items_elem_newInfo}>
                                    <img src="photos.png" alt="" />
                                    38 фото
                                </div>
                            </div>
                            <div className={classes.videos_items_item_info}>
                                <div className={classes.videos_items_item_info_date}>Пн, 18.08.2025</div>
                            </div>

                            <div className={classes.videos_items_item_info_name}>Зенит 2-0 Локомотив</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Клубы МЛФ Лиги */}
            <div className={classes.centerBlock}>
                <div className={classes.clubs}>
                    <div className={classes.title_block}>Клубы МЛФ Лиги</div>

                    <div className={classes.clubs_items}>
                        <div className={classes.clubs_items_item}><img src="club1.png" alt="" /></div>
                        <div className={classes.clubs_items_item}><img src="club2.png" alt="" /></div>
                        <div className={classes.clubs_items_item}><img src="club3.png" alt="" /></div>
                        <div className={classes.clubs_items_item}><img src="club4.png" alt="" /></div>
                        <div className={classes.clubs_items_item}><img src="club1.png" alt="" /></div>
                        <div className={classes.clubs_items_item}><img src="club2.png" alt="" /></div>
                        <div className={classes.clubs_items_item}><img src="club3.png" alt="" /></div>
                        <div className={classes.clubs_items_item}><img src="club4.png" alt="" /></div>
                        <div className={classes.clubs_items_item}><img src="club1.png" alt="" /></div>
                        <div className={classes.clubs_items_item}><img src="club2.png" alt="" /></div>
                        <div className={classes.clubs_items_item}><img src="club3.png" alt="" /></div>
                        <div className={classes.clubs_items_item}><img src="club4.png" alt="" /></div>
                        <div className={classes.clubs_items_item}><img src="club1.png" alt="" /></div>
                        <div className={classes.clubs_items_item}><img src="club2.png" alt="" /></div>
                        <div className={classes.clubs_items_item}><img src="club3.png" alt="" /></div>
                        <div className={classes.clubs_items_item}><img src="club4.png" alt="" /></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main_Page;