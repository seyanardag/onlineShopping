import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { useState } from 'react';
import Navbar from './pages/Navbar';
import {Outlet} from 'react-router-dom'

function App() {
  
  const [money, setMoney] = useState(5000)
  const [totalPrice, setTotalPrice] = useState(0)

  return (
    <div className="App bg-slate-500">
        {/* <Navbar/> */}
        {/* <Header money={money} totalPrice={totalPrice}/> */}
        <Body money={money} totalPrice={totalPrice} setTotalPrice={setTotalPrice}  />
        <Outlet/>
    </div>
  );
}

export default App;
