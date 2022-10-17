import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddContact from './pages/AddContact/AddContact';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Home/Home';
import Footer from './pages/Shared/Footer';
import Navbar from './pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route  path="/" element={<Home></Home>}/>
        <Route path='/add' element={<AddContact></AddContact>}/>
        <Route path='/signup' element={<SignUp></SignUp>}/>
        <Route path='/login' element={<Login></Login>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
