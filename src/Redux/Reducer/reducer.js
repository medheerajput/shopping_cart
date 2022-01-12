import products from '../Action/action';

let intialState={
    data:''
}
let intial ={
    cart:[],
    rate:[1],
    qty:[]
}
const reducer=(state=intialState,action)=>{
        return {
            data:products
        }
}
let qty;
const cartReducer = (state = intial, action)=>{
    switch (action.type) {
        case 'ADD_TO_CART': {
            return { ...state, cart: [...state.cart,action.playload] };
        }
        case 'REMOVE_FROM_CART': {
            return { ...state, cart: state.cart.filter((c)=>c.id!==action.playload.id) }
        }
        case 'Rating_value':{
            return {...state, rate: [...state.cart,action.playload]}
        }
        case 'change_CART_QTY':{
            return {
                qty: state.qty.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        )
            }
        }
        default:return state;
    }
}
export {reducer,cartReducer};