import './App.css';
import Nav from './navbar/nav';
import Intro from './intro/intro';
import Skills from './skill/skills';
import { Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route exact path='/'></Route>
        <Route  path='/skill/skills' element={<Skills/>}></Route>
      </Routes>
      <Intro/>
      <Skills/>
      
    </div>
  );
}

export default App;
