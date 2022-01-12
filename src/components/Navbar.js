import React, { useDebugValue } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove_To_Card } from '../Redux/Action/action';
import Home from './Home';
const Navbar = () => {
    const cart = useSelector(state => state.cartReducer.cart);
    const dispatch=useDispatch();
    cart.map((val)=>{
        return console.log(val.name);
    })
    return (<>
        <nav className='p-3 bg-gray-900'>
            <div className="flex justify-between mx-32">
                <span className='text-2xl font-bold text-red-600'>Shopping Cart</span>
                <input type="text" className='p-0.5 rounded-full outline-none text-amber-400 text-center bg-zinc-700' placeholder="Search a product" />
                <div className="font-bold text-xl text-amber-400 flex relative mr-32">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <details className='absolute left-7 w-60 bg-green-900 mx-3'>
                        <summary className='bg-green-900 text-white font-bold mx-7'>{cart.length}</summary>
                        <ul className='p-3'>
                            {
                                cart.map((val) => {
                                 return <li className='my-2'>
                                            <div className="box flex justify-between text-center">
                                                <img className='w-8 h-8 rounded-full' src={val.image} alt="default-img" />
                                                <div className="flex flex-col">
                                                    <span className='text-sm'>{val.name}</span>
                                                    <span className='text-sm'>₹ {val.price}</span>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8"
                                                onClick={()=>{dispatch(remove_To_Card(val.id))}}
                                                 viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                                                    <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <hr className='text-white my-2' />
                                        </li>
                                
                                })
                            }
                        </ul>
                        <div className="btn mb-3">
                        <Link to='/bag'>
                        <button 
                            className='bg-yellow-400 rounded-full p-0.5 px-4 text-slate-900 font-bold mx-14'
                            >show card</button>
                        </Link>
                        </div>
                    </details>
                </div>
            </div>
        </nav>
        
    </>)
}

export default Navbar;