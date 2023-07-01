import React,{useState,useEffect} from "react";
import Navbar from './Components/Navbar'
import {Routes,Route} from 'react-router-dom'
import axios from "axios";
import Cointable from "./Components/cointable";
import Coin from './Routers/Coin'
export default function App(){
    const[coins,setCoins]=useState([]);
    const url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
    useEffect(()=>{
    axios.get(url).then((response)=>{
        setCoins(response.data)
    }).catch((error)=>{
        console.log(error) 
    })
    },[])
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Cointable coins={coins}/>}/>
            <Route path='/coin' exact={true}  element={<Coin/>}>
            <Route path=':coinid' exact={true} element={<Coin/>}/>
            </Route>
            </Routes>
    </div>
  );
  }

