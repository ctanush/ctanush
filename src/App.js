import './App.css';
import Nav from './navbar/nav';
import Home from './home/home';
import Skills from './skill/skills';
import ContactForm from './contact/contact';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route  path='/' element={<Home/>}></Route>
        <Route exact path='/ctanush' element={<Home/>}></Route>
        <Route  path='/skills' element={<Skills/>}></Route>
        <Route  path='/contact' element={<ContactForm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
