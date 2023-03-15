import './block.css';

function Blk_cont(props){
return(
    <div className= {props.cls}>
    <div className="cont-sml">
    <p>{props.children}</p>
    </div>
    </div>
);
}

export default Blk_cont;