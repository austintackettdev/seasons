import './seasonDisplay.css';
import React from 'react';

 const getSeason = (lat, month) => {
    
    //northern hemisphere
    if (lat >= 0){
       return month >= 3 && month <= 8 ?  'summer' : 'winter'
        } 
    

    //southern Hemisphere
    if (lat < 0){
        return month <= 2 && month >= 9  ?  'summer' : 'winter'
     }
}

const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: 'sun'
    },

    winter: {
        text: "Brr, it's chilly!",
        iconName: 'snowflake'
    }
}


const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )
};

export default SeasonDisplay;