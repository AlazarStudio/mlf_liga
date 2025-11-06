import React from "react";
import classes from './MatchSlide.module.css';

function MatchSlide({ children, season, tour, date, team1, team2, ...props }) {
    return (
        <>
            <div className={classes.matchlide}>
                <div className={classes.matchlide_top}>
                    <div className={classes.matchlide_top_info}>{season}</div>
                    <div className={classes.matchlide_top_info}>{tour}</div>
                    <div className={classes.matchlide_top_info}>{date}</div>
                </div>
                <div className={classes.matchlide_bottom}>
                    <div className={classes.matchlide_team}>
                        <div className={classes.matchlide_team_logo}><img src={`${team1.logo}`} alt="" /></div>
                        <div className={classes.matchlide_team_name}>{team1.name}</div>
                    </div>
                    <div className={classes.matchlide_score}>
                        {team1.score} : {team2.score}
                    </div>
                    <div className={classes.matchlide_team}>
                        <div className={classes.matchlide_team_logo}><img src={`${team2.logo}`} alt="" /></div>
                        <div className={classes.matchlide_team_name}>{team2.name}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MatchSlide;