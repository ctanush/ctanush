/* eslint-disable react/jsx-pascal-case */
import  classes  from './journey.module.css';
import Info_Card from '../info card/info_card';
const Journey = () => {
    return(
        <div className={classes.main}>
            <div className={classes.head}>
                <p style={{"font-size":"3rem"}}>---Journey---</p>
            </div>
       
            <Info_Card lnk="https://upload.wikimedia.org/wikipedia/en/6/6a/AIT_Pune_logo.gif" alt="ait-logo" title="Engineering" body="
            From 2020 to 2024
            "/>
        </div>
    );
}

export default Journey;

