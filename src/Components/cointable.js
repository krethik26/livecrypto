import React,{ useRef } from "react";
import Typed from 'react-typed';
import Coinitem from "./coinitem";
import { Link } from "react-router-dom";
import './Coin.css'
import Coin from '../Routers/Coin.js'
export default function Cointable(props){
    const ref = useRef(null);
    function doClick(){
        ref.current.scrollIntoView({behavior: 'smooth'})
    }
    return(
        
        <div>
             <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold p-2">GROW WITH LIVE PRICES</p>
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-3">Get Rich With Data</h1>
        <div className="flex justify-center items-center">
        <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Fast,accurate data of </p>
        <Typed
        className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
        strings={[ 'BTC','ETH','SOL']}
        typeSpeed={120}
        backSpeed={140}
        loop
        />
        </div>
        <p className="text-gray-500 md:text-1xl sm:text-1xl text-xl font-bold pt-4">Monitor Live Prices Of BTC,ETH,SOL and Grow Rich</p>
        <button className="bg-[#00df9a] w-[200px] rounded font-medium my-6 mx-auto py-3 text-black" onClick={doClick}>Click Here To Check Rates</button>
        </div>
        </div>
       
        <div className='container' ref={ref}>
            <div>
            <div className="heading">
            <p className="coin-name">Coin</p>
            <p className="price">Price</p>
            <p>24h</p>
            <p className="hidden md:block">Volume</p>
            <p className="hidden md:block">Mkt Cap</p>
            </div>
            </div>
            {props.coins.map(coins=>{
                return(
                    <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                    <Coinitem coins={coins}/>
                    </Link>
                )
                })}
        </div>
        </div>
    )
}