import React from 'react';
import MoodButtonOption from './MoodButtonOption';
import PropTypes from "prop-types";
import styles from "./MoodButton.module.css";


const MoodButtons = ({list, onRadioChange}) => {
    return ( 
        <div>
        <div className ={styles.formItem}>
        <label className={styles.title} htmlFor="mood" > Hoe voel je je:</label>
           {list.map(item => 
                <MoodButtonOption key={item.index} label={item.label} url={item.url} index={item.label} description={item.description} onRadioChange={onRadioChange}/>

            )}
        
        </div>
        </div>
    );
}
MoodButtons.propTypes = {
    list : PropTypes.array.isRequired,
    onRadioChange : PropTypes.func.isRequired
}
export default MoodButtons;