import React from 'react';
import Cards from './Cards';
import Filter from './Filter';

const Home=()=>{
    return(<>
        <div className="innerr flex w-full bg-emerald-900 h-screen">
            {/* ***********************FILTER**************************** */}
            <Filter/>
            {/* ******************CARTS*************************************** */}
            <div className="CARTS px-2">
                <Cards/>
            </div>
        </div>
    </>)
}

export default Home;