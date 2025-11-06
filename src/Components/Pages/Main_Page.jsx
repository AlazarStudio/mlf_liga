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

                                <div className={classes.stats_block_more}>Подробнее <img src="arrowRight.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.centerBlock} style={{backgroundColor: '#2A0054'}}>
                <div className={classes.sponsors}>
                    <img src="s1.png" alt="" />
                    <img src="s2.png" alt="" />
                    <img src="s3.png" alt="" />
                    <img src="s4.png" alt="" />
                    <img src="s5.png" alt="" />
                </div>
            </div>
        </>
    );
}

export default Main_Page;