import React from 'react';
import PropTypes from "prop-types";
import styles from "./MoodButton.module.css";
import Image from 'next/image';

const MoodButtonOption = ({onRadioChange, index, url}) => {
    return (  
        <>
            <input className={styles.radioButton} type="radio" id={index} name="mood" value={index} onChange={(e) => onRadioChange(e.target.value) }/>
            <label className ={styles.radioLabel} htmlFor={index}>
            <Image className={styles.radioImg} src={url} width="800" height="400"/>
            {console.log(url)}
            </label><br/>
        </>
    );
}
 
MoodButtonOption.propTypes = {
    description : PropTypes.string.isRequired,
    onRadioChange : PropTypes.func.isRequired,
    index : PropTypes.string.isRequired
}
export default MoodButtonOption;