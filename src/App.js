import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './Components/CheckOut/CheckOut';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Regester from './Components/Regester/Regester';
import Rooms from './Components/Rooms/Rooms';

function App() {
  return (
    <div className="">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/rooms' element={<Rooms></Rooms>}></Route>
        <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/regester' element={<Regester></Regester>}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
