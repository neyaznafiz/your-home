import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './Components/CheckOut/CheckOut';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Rooms from './Components/Rooms/Rooms';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/rooms' element={<Rooms></Rooms>}></Route>
        <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
