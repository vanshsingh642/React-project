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
      <h1>React Project</h1>
      <Routes>
      <Route path='/login' />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
