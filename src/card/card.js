import  classes  from  './card.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Card(props){
   return(
    <div className={classes.card}>
        <i class={props.cls}></i>
      <div className={classes.rand}>
      <p>{props.name}</p>
      </div>
    </div>
   );

}


export default Card;