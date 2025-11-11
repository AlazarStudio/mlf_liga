import React from "react";
import classes from './News_page.module.css';

function News_page({ children, ...props }) {
    return (
        <div className="new">
            <div className="centerNew">
                <div className="newLeft">
                    <div className="breadcrumbs">Главная / Новости / Текущая новость</div>

                    <div className="newTitle"></div>
                    <div className="newShortDesc"></div>
                    <div className="newDateLinks">
                        <div className="newDateLinks_date"></div>
                        <div className="newDateLinks_links"></div>
                    </div>
                    <div className="newDateImg"></div>
                    <div className="newDateDesc"></div>
                    <div className="newDatePhotoAuthor"></div>

                </div>
                <div className="newRight">
                    <div className="newRight_title"></div>
                    <div className="newRight_sameNews">
                        <div className="newRight_sameNews_new">
                            <div className="newRight_sameNews_new_img"></div>
                            <div className="newRight_sameNews_new_info">
                                <div className="newRight_sameNews_new_info_date"></div>
                                <div className="newRight_sameNews_new_info_name"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News_page;