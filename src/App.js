import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap'
import Header from './Header';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AddProdut from './AddProduct';
import UpdateProdut from './UpdateProduct';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
