import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { rating } from '../Redux/Action/action';

const Filter = () => {
    let [check, setCheck] = useState();
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(rating(check))
    },check)

    return (<>
        <div className="FILTER p-4 my-3 w-4/12 h-screen ">
            <span className='text-2xl font-bold font-serif text-indigo-50'>Filter Products</span>
            <ul className='list-disc bg-emerald-700 list-inside p-6 w-56 text-indigo-300 cursor-pointer shadow-gray-800 shadow-xl rounded-xl'>
                <li className='my-3 bg-gray-900 text-orange-50 font-bold rounded-full p-2'>Accesnding</li>
                <li className='my-3 bg-gray-900 text-orange-50 font-bold rounded-full p-2'>Deccending</li>
                <li className='my-3 bg-gray-900 text-orange-50 font-bold rounded-full p-2 text-sm'>Include Out Of Stock</li>
                <li className='my-3 bg-gray-900 text-orange-50 font-bold rounded-full p-2'>Fast Delivery Only</li>
                <li className='my-3 bg-gray-900 text-orange-50 font-bold rounded-full p-2 flex justify-center'>
                    {
                        [...Array(5)].map((_, i) => {
                            return <span onClick={() => { setCheck(i + 1) }}>
                                {
                                    check > i ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>
                                    )
                                }

                            </span>
                        })
                    }
                </li>
            </ul>
            <button className='rounded-lg mx-3 my-3 px-14 py-1 bg-red-500 text-indigo-50'>Clear Filters</button>
        </div>
    </>)
}

export default Filter;