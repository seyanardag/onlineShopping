import React from 'react'


export default function Navbar() {
  return (
    <div>
        <ul className='bg-gray-700 flex justify-around items-center h-[5rem]'>
            <li className='hover:scale-110 transition-all hover:bg-slate-800 hover:text-slate-100 hover:cursor-pointer active:text-red-300 active:scale-95 font-bold text-sky-100 p-5 rounded whitespace-nowrap' ><a href="#"  ></a>Anasayfa</li>
            <li className='hover:scale-110 transition-all hover:bg-slate-800 hover:text-slate-100 hover:cursor-pointer active:text-red-300 active:scale-95 font-bold text-sky-100 p-5 rounded whitespace-nowrap' ><a href="#"  ></a>Kategoriler</li>
            <li className='hover:scale-110 transition-all hover:bg-slate-800 hover:text-slate-100 hover:cursor-pointer active:text-red-300 active:scale-95 font-bold text-sky-100 p-5 rounded whitespace-nowrap' ><a href="#"  ></a>Çok satanlar</li>
            <li className='hover:scale-110 transition-all hover:bg-slate-800 hover:text-slate-100 hover:cursor-pointer active:text-red-300 active:scale-95 font-bold text-sky-100 p-5 rounded whitespace-nowrap' ><a href="#"  ></a>Kampanyalarımız</li>
            <li className='hover:scale-110 transition-all hover:bg-slate-800 hover:text-slate-100 hover:cursor-pointer active:text-red-300 active:scale-95 font-bold text-sky-100 p-5 rounded whitespace-nowrap' ><a href="#"  ></a>Hakkımızda</li>
            <li className='hover:scale-110 transition-all hover:bg-slate-800 hover:text-slate-100 hover:cursor-pointer active:text-red-300 active:scale-95 font-bold text-sky-100 p-5 rounded whitespace-nowrap' ><a href="#"  ></a>Bize Ulaşın</li>
        </ul>
            

    </div>
  )
}
