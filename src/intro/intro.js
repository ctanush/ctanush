import './intro.css';
import Blk_cont from '../block';
function Intro(){
   return (
     <div className="main-intro">
         <Blk_cont cls = "cont-01" txt="Hello ,I am C Tanush" ></Blk_cont>
         <Blk_cont cls='cont-02' txt="I am a Frontend Developer"></Blk_cont>
     </div>

   );

}

export default Intro;