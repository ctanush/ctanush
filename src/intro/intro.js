import './intro.css';
import Blk_cont from '../block';
function Intro(){
   return (
     <div className="main-intro">
         <Blk_cont cls = "cont-01"  ><p style={{"fontStyle":"'Monsterrat',san-seriff"}}>Hello<br/>I am  C Tanush</p></Blk_cont>
         <Blk_cont cls='cont-02'>I am a <br/>Frontend Developer<br/>And<br/>Data Scientist</Blk_cont>
     </div>

   );

}

export default Intro;