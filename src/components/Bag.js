import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import { change_CART_QTY, remove_To_Card } from '../Redux/Action/action';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
const Bag = () => {
    let [quntity, setQuntity] = useState(1);
    let [price, setPrice] = useState();
    // price ? alert(price):''
    let[total,setTotal]=useState();
    const cart = useSelector(state => state.cartReducer.cart);
    // const qty = useSelector(state => state.cartReducer.qty);
    
    const dispatch=useDispatch();
    useEffect(()=>{
        setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price)*quntity,0));
    },[cart,quntity])
    console.log("quntity=",quntity);
    console.log("Total=",total);
    // console.log("qty=",qty);
    
    return (<>
        <Navbar />
        <div className="w-full h-screen bg-white flex ">
            <div className="flex flex-col bg-zinc-400 p-5 w-3/4 overflow-auto">
                {
                    cart.map((item) => {
                        return (
                            <div className="box bg-gray-600 mb-3 p-3 flex justify-between items-center text-xl text-center font-bold font-serif h-fit rounded-lg">
                                <img className='h-20 w-16' src={item.image} alt="" />
                                <span className='text-xl font-bold text-lime-50'>{item.name}</span>
                                <span className='text-xl font-bold text-lime-50' >₹ {item.price}</span>
                                <select className='h-8 rounded-lg' disabled name="" id="" onChange={(e) => { setQuntity(e.target.value) }}>
                                    {
                                        [...Array(10)].map((_, i) => {
                                            return (
                                                <option value={i + 1} >{i + 1}</option>
                                            )
                                        })
                                    }
                                </select>
                                <svg xmlns="http://www.w3.org/2000/svg"  
                                onClick={()=>{dispatch(remove_To_Card(item.id))}}
                                class="h-8 w-8 " viewBox="0 0 20 20" fill="orange">
                                    <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                                    <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        )
                    })
                }


                {/* ******************************************* */}
            </div>
            <div className="calculation p-3 w-1/4 bg-red-500 text-center flex flex-col justify-center items-center h-fit">
                <Link to='/main'>
                    <span className='bg-gray-700 rounded-full text-white p-2 px-14 cursor-pointer '>Back</span>
                </Link>
                <div className="bg-emerald-700 mx-8 p-6 my-10 w-56 text-indigo-300 cursor-pointer shadow-gray-800 shadow-xl rounded-xl">
                    <span className='bg-white text-green-900 font-bold text-lg p-2 px-3 my-3 rounded-full'>Subtotal ({cart.length}) items</span><br /><br />
                    <span className='bg-white text-green-900 font-bold text-lg p-2 px-3  rounded-full'>Total : ₹ {total}</span><br />
                    <br />
                    <button className='bg-red-600 rounded-full text-white p-2 px-3 '>Proceed to Checkout</button>
                </div>

            </div>
        </div>
    </>)
}

export default Bag;