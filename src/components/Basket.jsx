import React, { useState, useEffect } from 'react'

import { PiShoppingCartLight } from "react-icons/pi";

export default function Basket({ basket, basketItem, totalPrice, animateBasket,setAnimateBasket }) {
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

  return (
    <div className='basketOutherContainer z-10 fixed top-7 right-7 p-4 bg-amber-400 rounded-3xl grid place-items-center cursor-pointer' >
      <div onClick={handleBasketWide} className={basketWide ? 'basketContainer basketWide' : 'basketContainer'}  >
        <div className={animateBasket? 'ziplat':''}>

          <h2 className='grid place-items-center text-5xl text-gray-700 p-2 '><PiShoppingCartLight/></h2>

        </div>

        <div className={basketWide ? 'basketDetails text-gray-700 font-bold' : 'basketHidden text-gray-700 font-bold'}>
          {basket.length < 1 && <div className=''>Sepetinize ürün eklemediniz</div>}
          {basket.map(basketItem => { return basketItem.amount > 0 && <p className='text-gray-700 font-bold' key={basketItem.id}>{basketItem.name} x {basketItem.amount} </p> })}
          <hr className='border-gray-700 border' />
          TOPLAM ÜCRET:{totalPrice}
        </div>
      </div>

    </div>
  )
}
