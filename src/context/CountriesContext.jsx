import React ,{ createContext,useEffect,useState } from 'react';
import axios from 'axios';


const CountriesContext = createContext();


 export const CountriesProvider=({children})=>{

    const [isTrue,setIsTrue]=useState(false)
    const [country,setCountry]=useState([]);
    const [answer,setAnswer]=useState("")
    const [show,setShow]=useState(false)
    


    useEffect(()=>{
        axios("https://restcountries.com/v2/regionalbloc/eu")
        .then((res)=>setCountry(res.data[Math.floor(Math.random() * 30)]))
        .finally(setIsTrue(false),setShow(false))
        
    },[isTrue])


   

    const values = {
        country,
        answer,
        setAnswer,
        setIsTrue,
        setShow,
        show
    }




    return <CountriesContext.Provider value={values}>{children}</CountriesContext.Provider>


}




export default  CountriesContext 







