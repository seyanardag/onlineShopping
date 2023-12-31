import React, { useRef } from 'react'

export default function FilterProducts({ setMinPriceFilter, setMaxPriceFilter }) {

    const minPriceRef = useRef('')
    const maxPriceRef = useRef('')

    const handleUygula = () => {
        if (minPriceRef.current.value < 0) {
            minPriceRef.current.value = 0
        }
        setMinPriceFilter(minPriceRef.current.value)

        if (maxPriceRef.current.value <= 0) {
            maxPriceRef.current.value = 0
            setMaxPriceFilter(Infinity)
        } else {
            setMaxPriceFilter(maxPriceRef.current.value)
        }
    }

    return (
        <div className='myShadow1İPTAL basis-1/6 min-w-[250px] sticky top-0 h-screen bg-gray-900 text-slate-50' >

            <div className='filterInputs font-bold'>
                <h3>ÜCRET</h3>
                <div className='m-2'>
                    <label htmlFor="minPrice">Min</label>
                    <input type="number" name='minPrice'
                        ref={minPriceRef}
                        className='ps-2 py-1 rounded text-gray-800'
                        min={0}
                    />
                </div>
                <div className='m-2'>
                    <label htmlFor="maxPrice">Max</label>
                    <input type="number" name='maxPrice'
                        className='ps-2 py-1 rounded text-gray-800'
                        ref={maxPriceRef}
                        min={0} />

                </div>
                <button onClick={handleUygula} className='rounded-sm bg-green-400     text-gray-900 hover:text-slate-700 active:translate-x-[1px] active:translate-y-[1px] py-2 w-full tracking-widest'>UYGULA</button>

            </div>
        </div>
    )
}
