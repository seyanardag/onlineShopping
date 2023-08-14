import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { useState } from 'react';

function App() {
  
  const [money, setMoney] = useState(5000)
  const [totalPrice, setTotalPrice] = useState(0)

  return (
    <div className="App bg-slate-500">
        <Header money={money} totalPrice={totalPrice}/>
        <Body money={money} totalPrice={totalPrice} setTotalPrice={setTotalPrice}  />
    </div>
  );
}

export default App;