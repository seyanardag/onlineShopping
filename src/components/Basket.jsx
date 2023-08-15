import React, { useState, useEffect } from 'react'

import { PiShoppingCartLight } from "react-icons/pi";
import emptyBasket from '../img/emptyBasket.png'

export default function Basket({ basket,setBasket, basketItem, totalPrice, animateBasket,setAnimateBasket }) {
  const [basketWide, setBasketWide] = useState(false)

  useEffect(() => {
    if(animateBasket) {
     var timer = setTimeout(() => {
        setAnimateBasket(false)
      }, 200);
    }
  
    return () => clearTimeout(timer)
  },[animateBasket] )
  

  const handleBasketWide = () => {
    setBasketWide(!basketWide)
    console.log(22)
  }

  const handleEmptyBasket = (e) => {
    e.stopPropagation()
    setBasket([])
  }

  return (
    <div className='basketOutherContainer z-10 fixed bottom-7 right-7 p-4 bg-amber-400 rounded-3xl grid place-items-center cursor-pointer opacity-90 hover:opacity-100' >
      <div onClick={handleBasketWide} className={basketWide ? 'basketContainer basketWide' : 'basketContainer'}  >
        <div className={animateBasket? 'ziplat':''}>

          <h2 className='grid place-items-center text-5xl text-gray-700 p-2 '><PiShoppingCartLight/></h2>

        </div>

        <div className={basketWide ? 'basketDetails text-gray-700 font-bold' : 'basketHidden text-gray-700 font-bold'}>
          {basket.length < 1 && <div className='text-red-500'>Sepetinize ürün eklemediniz</div>}
          {basket.map(basketItem => { return basketItem.amount > 0 && <p className='text-gray-700 font-bold' key={basketItem.id}> <span  className='text-right inline-block w-[30px]'> {basketItem.amount}</span> x  <span className='text-left  inline-block w-[150px]'> {basketItem.name} </span>   </p> })}
          <hr className='border-gray-700 border mb-2' />
          <span className='inline-block w-[150px]'> TOPLAM ÜCRET </span>:{totalPrice}
          <button className='float-right ' onClick={handleEmptyBasket}><img className='h-[35px] w-[35px] hover:scale-110' src={emptyBasket} alt="get basket empty" srcset="" /></button>
        </div>
      </div>

    </div>
  )
}
