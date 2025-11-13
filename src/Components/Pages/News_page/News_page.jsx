import React from "react";
import classes from './News_page.module.css';

function News_page({ children, ...props }) {
    return (
        <div className={classes.new}>
            <div className={classes.centerNew}>
                <div className={classes.newLeft}>
                    <div className={classes.breadcrumbs}><a href="/">Главная</a> / <a href="/news">Новости</a> / Текущая новость</div>

                    <div className={classes.newTitle}>«Краснодар» победил «Спартак» и выиграл четвёртый матч подряд</div>
                    <div className={classes.newShortDesc}>Голы краснодарцев в Winline Матче тура забили Черников и Кордоба</div>
                    <div className={classes.newDateLinks}>
                        <div className={classes.newDateLinks_date}>Вс, 02.11.2025, 18:29</div>
                        <div className={classes.newDateLinks_links}>
                            <div className={classes.newDateLinks_links_item}><img src="/vk_new.png" alt="" /></div>
                            <div className={classes.newDateLinks_links_item}><img src="/export_new.png" alt="" /></div>
                        </div>
                    </div>
                    <div className={classes.newDateImg}>
                        <img src="/new_img.png" alt="" />
                    </div>
                    <div className={classes.newDateDesc}>
                        <p>
                            Winline Матч тура между «Краснодаром» и «Спартаком» в 14-м туре Мир РПЛ завершился победой
                            краснодарцев со счётом 2:1.
                        </p>
                        <p>
                            «Краснодар» вышел вперёд после гола Александра Черникова на 18-й минуте, а автором второго мяча
                            команды стал Джон Кордоба на 59-й минуте. Черников впервые отличился в сезоне, Кордоба – лучший
                            бомбардир краснодарцев с шестью голами. В конце второго тайма Кордоба оставил «Краснодар» вдесятером:
                            нападающий получил две жёлтые карточки за четыре минуты (84-я и 88-я). В большинстве «Спартак» сократил
                            отставание благодаря голу Ливая Гарсии на 90-й минуте (четвёртый мяч нападающего в сезоне). До
                            финального свистка ещё одно удаление у «Краснодара» получил Дуглас Аугусто, заработавший два
                            предупреждения в одном моменте (90+5).
                        </p>
                        <p>
                            Забивший первый гол «Краснодара» Черников – лучший игрок матча по версии эксперта МАТЧ ПРЕМЬЕР.
                        </p>
                        <p>
                            «Краснодар» продлил победную серию до четырёх туров и расположился на первом месте турнирной
                            таблицы, имея в активе 32 очка. «Спартак» остался шестым с 22 очками.
                        </p>
                        <p>
                            9 ноября в матчах 15-го тура Мир РПЛ «Спартак» сыграет против «Ахмата» в Грозном, «Краснодар» проведёт с
                            «Балтикой» Winline Матч тура в Калининграде.
                        </p>

                    </div>
                    <div className={classes.newDatePhotoAuthor}>Фото: Андрей Шрамко / «Краснодар»</div>

                </div>
                <div className={classes.newRight}>
                    <div className={classes.newTitle}>Смотрите также</div>
                    <div className={classes.newRight_sameNews}>
                        <div className={classes.newRight_sameNews_new}>
                            <div className={classes.newRight_sameNews_new_img}>
                                <img src="/same_news.png" alt="" />
                            </div>
                            <div className={classes.newRight_sameNews_new_info}>
                                <div className={classes.newRight_sameNews_new_info_date}>Пн, 03.11.2025</div>
                                <div className={classes.newRight_sameNews_new_info_name}>
                                    Winline Матч тура. Краснодар
                                    2-1 Спартак-Москва
                                </div>
                            </div>
                        </div>
                        <div className={classes.newRight_sameNews_new}>
                            <div className={classes.newRight_sameNews_new_img}>
                                <img src="/same_news.png" alt="" />
                            </div>
                            <div className={classes.newRight_sameNews_new_info}>
                                <div className={classes.newRight_sameNews_new_info_date}>Пн, 03.11.2025</div>
                                <div className={classes.newRight_sameNews_new_info_name}>
                                    Winline Матч тура. Краснодар
                                    2-1 Спартак-Москва
                                </div>
                            </div>
                        </div>
                        <div className={classes.newRight_sameNews_new}>
                            <div className={classes.newRight_sameNews_new_img}>
                                <img src="/same_news.png" alt="" />
                            </div>
                            <div className={classes.newRight_sameNews_new_info}>
                                <div className={classes.newRight_sameNews_new_info_date}>Пн, 03.11.2025</div>
                                <div className={classes.newRight_sameNews_new_info_name}>
                                    Winline Матч тура. Краснодар
                                    2-1 Спартак-Москва
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News_page;