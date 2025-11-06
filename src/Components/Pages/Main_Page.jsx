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
        </>
    );
}

export default Main_Page;