import classes from './info_card.module.css';
const Info_Card = (props) => {
   
return(

<div className={classes.main} >
    <div className={classes.image}>
        <img src={props.lnk} alt={props.txt}></img>
    </div>
    <div className={classes.content}>
         <div className={classes.title}>
               <p>{props.title}</p>
               <hl></hl>
         </div>
         <div className={classes.body}>
             <p>{props.body}</p>
         </div>
    </div>
</div>
);
}
export default Info_Card;

