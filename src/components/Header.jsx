import React, { useRef, useEffect } from 'react'

export default function Header({money, totalPrice}) {

  return (
    <div className='fixed top-0 left-0 right-96 bg-sky-400 p-3 text-center z-10 text-gray-800 font-bold tracking-widest' >
       <div> Kalan Bakiyeniz: {money - totalPrice} TL</div>

    </div>
  )
}
