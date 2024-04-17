import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { ToastContainer } from 'react-toastify';
import store from './redux/store';
import { Provider } from 'react-redux'
import Checkout from './components/Checkout';
import PasswordGenerator from './components/PasswordGenerator';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToastContainer theme='colored'></ToastContainer>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/checkout' element={<Checkout />}></Route>
            <Route path='/passwordgenerator' element={<PasswordGenerator />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
