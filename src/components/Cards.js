import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { add_To_Card, rating } from '../Redux/Action/action';
import { remove_To_Card } from '../Redux/Action/action';

const Cards = () => {
    let [r, setR] = useState();
    const products = useSelector(state => state.reducer.data);
    const cart = useSelector(state => state.cartReducer.cart);
    const rating = useSelector(state => state.cartReducer.rate);
    const dispatch = useDispatch();
    cart.map((val) => {
        return console.log("net card here", val.name)
    });
    [...rating].map((i)=>{
        return console.log(i.rate);
      })

    return (<>
        <div className=" flex flex-wrap p-3 my-2 w-auto px-5 overflow-y-auto h-screen ">
            {
                products.map(({ id, image, name, price, ratings }) => {
                    return <div className="h-82 w-52 bg-emerald-700 my-3p-2 p-2 mx-2 my-3 rounded-lg shadow-xl shadow-gray-800 ">
                        <img className='h-48 w-48 rounded-lg' src={image} alt="default-img" />
                        <ul className='flex justify-between text-sm font-bold font-serif my-1 text-slate-300'>
                            <div className="box">
                                <li>{name}</li>
                                <li>₹ {price}</li>
                            </div>
                            <div className="box">
                                <li>Fast Delivery</li>
                                {
                                    [...rating].map((i) => {
                                        return <li>{i.rate}</li>
                                    })
                                }
                            </div>
                        </ul>
                        {
                            cart.some((value) => value.id === id) ?
                                (<button
                                    className='px-4 p-1 w-full bg-white text-center text-red-600 font-bold rounded-xl'
                                    onClick={() => { dispatch(remove_To_Card(id)) }}
                                >Remove to Cart
                                </button>)

                                : (<button
                                    className='px-4 p-1 w-full bg-white text-center text-red-600 font-bold rounded-xl'
                                    onClick={() => { dispatch(add_To_Card(id, name, image, price)) }}
                                >Add to Cart
                                </button>)
                        }


                    </div>
                })
            }

        </div>
    </>)
}

export default Cards;