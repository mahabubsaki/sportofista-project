import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import { ToastContainer } from 'react-toastify';
import Login from './components/pages/Login';
import Register from './components/pages/Register';


function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
