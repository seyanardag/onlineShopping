import React, { useState, useEffect } from 'react'
import data from '../data'
import Product from './Product'
import Basket from './Basket'
import FilterProducts from './FilterProducts'

export default function Body({ totalPrice, setTotalPrice, money }) {

  const [minPriceFilter, setMinPriceFilter] = useState(0)
  const [maxPriceFilter, setMaxPriceFilter] = useState(Infinity)
  const [animateBasket, setAnimateBasket] = useState(false)


  const [basket, setBasket] = useState([])

  useEffect(() => {
    if (basket.length > 0) {
      setTotalPrice(basket.map(item => item.amount * item.price).reduce((acc, current) => acc + current))
    }
  }, [basket, setTotalPrice])

  const filteredData=data.filter((product=>product.price>=minPriceFilter && product.price<=maxPriceFilter ))
  console.log(data)
  console.log(filteredData)

  return (
    <div className='flex bg-slate-200'  >

        <FilterProducts 
        minPriceFilter={minPriceFilter} 
        setMinPriceFilter={setMinPriceFilter} 
        maxPriceFilter={maxPriceFilter}
        setMaxPriceFilter={setMaxPriceFilter}
        />

      <div className='basis-5/6 mt-16 ml-4 flex flex-wrap content-start justify-start justify-items-start gap-5'>
        {filteredData.length>0 ? filteredData.map((product) => {
          return (
            <Product key={product.id}
              product={product}
              basket={basket}
              setBasket={setBasket}
              totalPrice={totalPrice}
              money={money}
              setAnimateBasket={setAnimateBasket}
              ></Product>
              )
            }) :  <p className='text-red-500 mx-auto'>Ürün Aradığnız kriterlerde ürün bununamadı.</p> }
      </div>

      <Basket basket={basket} totalPrice={totalPrice} animateBasket={animateBasket} setAnimateBasket={setAnimateBasket} setBasket={setBasket} />

    </div>
  )
}
