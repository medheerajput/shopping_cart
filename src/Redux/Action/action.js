import faker from 'faker';

const products=[...Array(20)].map(()=>({
    id:faker.datatype.uuid(),
    name:faker.commerce.productName(),
    price:faker.commerce.price(),
    image:faker.random.image(),
    inStock:faker.random.arrayElement([0,3,5,6,7]),
    fastDelivery:faker.datatype.boolean(),
    ratings:faker.random.arrayElement([1,2,3,4,5])
}))

const add_To_Card=(id,name,image,price,)=>{
    return {
        type: "ADD_TO_CART",
        playload: {
            id:id,
            name:name,
            image:image,
            price:price,
        }
    }
}

const remove_To_Card=(id,name,img,price)=>{
        return {
            type:"REMOVE_FROM_CART",
            playload:{
                id:id,
            }
        }
}

const rating=(rate)=>{
    return{
        type:"Rating_value",
        playload:{
            rate:rate
        }
    }
}

const change_CART_QTY=(id,quntity)=>{
    return {
        type : "CHANGE_CART_QTY",
        playload:{
            id: id,
            qty: quntity,
        }
    }
}

export {add_To_Card,remove_To_Card,change_CART_QTY ,rating};
export default products;