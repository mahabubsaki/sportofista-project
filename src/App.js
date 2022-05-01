import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import { ToastContainer } from 'react-toastify';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import RequireAuth from './components/utilities/RequireAuth';
import Manage from './components/pages/Manage';
import Add from './components/pages/Add';
import MyItems from './components/pages/MyItems';
import Blogs from './components/pages/Blogs';
import ManageSingle from './components/pages/ManageSingle';


function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/manage' element={<RequireAuth>
          <Manage>
          </Manage>
        </RequireAuth>}></Route>
        <Route path="manage/:id" element={<RequireAuth>
          <ManageSingle></ManageSingle>
        </RequireAuth>}></Route>
        <Route path='/add' element={<RequireAuth>
          <Add></Add>
        </RequireAuth>}></Route>
        <Route path='/my-items' element={<RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer></Footer>
    </div >
  );
}

export default App;
