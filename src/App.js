import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddInventory from './Pages/AddInventory/AddInventory';
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Register/Register';
import RequiredAuth from './Pages/Auth/RequiredAuth/RequiredAuth';
import ResetPass from './Pages/Auth/ResetPass/ResetPass';
import Blogs from './Pages/Blogs/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Survey from './Pages/Survey/Survey';
import Inventory from './Pages/Inventory/Inventory';
import MyItems from './Pages/MyItems/MyItems';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import AllItems from './Pages/AllItems/AllItems';

function App() {
  return (
    <div className='bg-black bg-opacity-90 h-full'>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Header />
      <div className='px-4 md:px-8'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/resetPassword' element={<ResetPass />}></Route>
          <Route path='/all-items' element={<RequiredAuth>
            <AllItems />
          </RequiredAuth>}></Route>
          <Route path='/inventory/:id' element={<RequiredAuth>
            <Inventory />
          </RequiredAuth>}></Route>
          <Route path='/addInventory' element={<RequiredAuth>
            <AddInventory />
          </RequiredAuth>}></Route>
          <Route path='/myItems' element={<RequiredAuth>
            <MyItems />
          </RequiredAuth>}></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/survey' element={<Survey />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
