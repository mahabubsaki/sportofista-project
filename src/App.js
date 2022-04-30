import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
