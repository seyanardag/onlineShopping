import React, { useState } from 'react'


export default function Product({ product, basket, setBasket, totalPrice, money, setAnimateBasket }) {


  const basketItem = basket.find(item => item.id === product.id)
  const isMoneySufficient = money - totalPrice - product.price < 0

  const addBasket = (paramID) => {
    setAnimateBasket(true) //basket animasyonu için class ekleme
    const checkBasket = basket.find(item => item.id === product.id)

    if (isMoneySufficient) { //para yetmiyorsa ekleme yapmasın return olsun
      return
    }

    if (checkBasket) {
      // console.log('ürün baskette var')
      checkBasket.amount += 1
      setBasket([...basket.filter(item => item.id !== paramID), checkBasket])
    } else {
      // console.log('ürün baskette yok')
      setBasket([...basket, {
        id: product.id,
        name: product.name,
        price: product.price,
        amount: 1
      }])
    }
  }

  const removeBasket = (paramID) => {
    setAnimateBasket(true)//basket animasyonu için class ekleme
    const checkBasket = basket.find(item => item.id === product.id)
    if (checkBasket) {
      console.log('ürün baskette var')
      if (checkBasket.amount > 0) {
        checkBasket.amount -= 1
        setBasket([...basket.filter(item => item.id !== paramID), checkBasket])
      }
    }
  }



  return (
    <div className='min-w-[250px] h-auto p-4 bg-slate-100 rounded-2xl '>
      <div className='text-center font-bold'>

        {product.name}
      </div>

      <div>
        <div className='product-img w-full grid place-items-center'>
          <img src={product.img} alt="" height="170px" />
        </div>
        <p className='text-center'> Birim fiyat: {product.price} TL</p>
        <div className='addRemoveBtnContainer py-2 px-3 flex items-center justify-center border border-zinc-500  rounded-lg '>
          <button onClick={() => removeBasket(product.id)} type="button" class="w-full active:translate-x-[2px] active:translate-y-[1px] text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm text-center px-5  py-2.5 ">- </button>
          <span className='min-w-[3rem] text-center'>{(basketItem && basketItem.amount) || 0}</span>
          <button onClick={() => addBasket(product.id)} type="button" class="w-full active:translate-x-[2px] active:translate-y-[1px] text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center ">+</button>
        </div>

      </div>

    </div>
  )
}
