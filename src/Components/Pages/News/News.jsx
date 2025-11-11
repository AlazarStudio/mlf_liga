import React from "react";
import classes from './News.module.css';
import New from "../../Blocks/New/New";

function News({ children, ...props }) {
    return (
        <div className={classes.centerBlock}>
            <div className={classes.news}>
                <div className={classes.newsTitle}>Новости</div>
                <div className={classes.newsList}>
                    <New width={'32%'} height={'250px'} />
                    <New width={'32%'} height={'250px'} />
                    <New width={'32%'} height={'250px'} />
                    <New width={'32%'} height={'250px'} />
                    <New width={'32%'} height={'250px'} />
                    <New width={'32%'} height={'250px'} />
                    <New width={'32%'} height={'250px'} />
                    <New width={'32%'} height={'250px'} />
                    <New width={'32%'} height={'250px'} />
                    <New width={'32%'} height={'250px'} />
                    <New width={'32%'} height={'250px'} />
                    <New width={'32%'} height={'250px'} />
                    <New width={'32%'} height={'250px'} />
                </div>
            </div>
        </div>
    );
}

export default News;