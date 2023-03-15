import classes from './nav.module.css';
import {Link}  from 'react-router-dom';
import  {useState}  from 'react';


function Nav(){
   const [isActive,setIsActive] = useState(false)
   return(
    <div className={classes.nav_main}>
          <div className={classes.main}>

          <Link className={classes.lnk} to="/"> Home</Link>
           <Link to="/skills" className={classes.lnk}> Skills</Link>
           <Link to="/contact" className={classes.lnk}> Contact Me</Link>
           
          </div>
          <div className={classes.contacts}>
              <div className={classes.icon}>
              <a href='https://github.com/ctanush'><i class='fa-brands fa-inverse fa-square-github fa-3x ' ></i></a>
              </div>
              <div className={classes.icon}>
              <a href="https://www.linkedin.com/in/tanush-c-92348b203"><i class='fa-brands fa-inverse  fa-linkedin  fa-3x'></i></a>
              </div>
              
          </div>
          <div className={classes.srt_main}>
          <Link className={classes.lnk1} to="/"> Home</Link>

          </div>
          <div className={classes.btn}>

                <button onClick={()=> {setIsActive(!isActive)}}>
                    <i class="fa-solid fa-bars fa-2x"></i>
                </button>
          </div>
          {isActive && 
                    <div className={classes.blk}> 
                    <div className={classes.lnks}>
                    <Link to="/skill/skills" className={classes.lnk}> Skills</Link>
                    </div>
                <div className={classes.lnks}>
                    <a href='https://github.com/ctanush'>Github<i class='fa-brands fa-inverse fa-square-github fa-3x ' ></i></a>
                </div>
                <div className={classes.lnks}>
                    <a href="https://www.linkedin.com/in/tanush-c-92348b203">linkedin<i class='fa-brands fa-inverse  fa-linkedin  fa-3x'></i></a>
                </div>
                </div>
                    }
          
    </div>
   );
}

export default Nav;