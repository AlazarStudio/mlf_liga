import React from "react";
import classes from './New.module.css';
import { Link } from "react-router-dom";

function New({ children, width, height,...props }) {
    return (
        <Link to={'/news/fwegewrgrtew'} className={classes.news_items_elem} style={{ width: width }}>
            <div className={classes.news_items_elem_img} style={{ height: height }}>
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
        </Link>
    );
}

export default New;