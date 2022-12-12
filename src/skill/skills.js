import './skills.css';
import Card from '../card/card';
function Skills(){
       return (
        <div className='skill'>
            <div className='rand'>
                <p>Technologies Used:</p>
            </div>
            <div className='crd'>
            <Card  name='Javascript' cls='fa-brands fa-square-js fa-8x' />
            <Card  name='CSS' cls='fa-brands fa-css3 fa-8x' />
            <Card  name ='HTML' cls='fa-brands fa-html5 fa-8x'/>
            <Card  name ='React.js' cls='fa-brands fa-react fa-8x'/>
            </div>
        </div>
       );

}

export default Skills;