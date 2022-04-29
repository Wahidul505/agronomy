import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Register/Register';
import Home from './Pages/Home/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className='bg-black bg-opacity-90 h-full'>
      <Header />
      <div className='px-4 md:px-8'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/inventory/:id' element={<Inventory />}></Route>
        {/* <Route path='/home' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route> */}
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
