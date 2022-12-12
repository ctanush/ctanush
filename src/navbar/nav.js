import classes from './nav.module.css';
import {Link}  from 'react-router-dom';



function Nav(){
   return(
    <div className={classes.nav_main}>
          <div className={classes.main}>
          <Link className={classes.lnk} to="/"> Home</Link>
           <Link to="./skill/skills" className={classes.lnk}> Skills</Link>
          </div>
          <div className={classes.contacts}>
              <div className={classes.icon}>
              <a href='https://github.com/ctanush'><i class='fa-brands fa-inverse fa-square-github fa-3x ' ></i></a>
              </div>
              <div className={classes.icon}>
              <i class='fa-brands fa-inverse  fa-linkedin  fa-3x'></i>
              </div>
              
          </div>
    </div>
   );
}

export default Nav;