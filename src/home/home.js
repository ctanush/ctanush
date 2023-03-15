import classes from './home.module.css';
import Intro from '../intro/intro';
import Journey from '../Journey/journey';
const Home = () => {
return(
<div className={classes.main}>
    <Intro/>
    <Journey/>
</div>
);
}


export default Home;