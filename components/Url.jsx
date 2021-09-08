import styles from "./Layout.module.css"
import Footer from "./Footer"
import Navbar from "./Navbar"
import PropTypes from 'prop-types';

const Url = ({myuuid, showLink}) => {
    return ( 
        
         <div className={styles.container}>
           
        {showLink ? <>
        <div>{myuuid}</div>
        </>
        :
        <div>Nothing to show</div>
        }
        </div>
    
     );
}


Url.propTypes = {
    myuuid : PropTypes.string.isRequired

}

export default Url;