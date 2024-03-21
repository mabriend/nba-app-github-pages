import './App.css';
import Teams from './components/Teams/Teams';
import Games from './components/Games/Games';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';

const App = () => {

  return (

    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/teams' element={<Teams></Teams>}></Route>
          <Route path='/teams/games/:teamId' element={<Games title="Team Games" key={Math.random()}></Games>}></Route>
          <Route path='/games' element={<Games title="Today Games" key={Math.random()}></Games>}></Route>
        </Routes>
      </Router>

    </div>

  );

}

export default App;
