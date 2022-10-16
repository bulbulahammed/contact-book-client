import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddContact from './pages/AddContact/AddContact';
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
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
