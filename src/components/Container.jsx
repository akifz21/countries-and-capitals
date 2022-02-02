import React ,{useContext,useState}from 'react';
import CountriesContext from '../context/CountriesContext';
import AnswerForm from './AnswerForm';

function Container() {

    const {country,answer,setIsTrue,setShow,show} = useContext(CountriesContext)
    



    
    const cover =  answer.charAt(0).toUpperCase() + answer.slice(1);
    
  
  return(
      <div className="container">

        <h2>{country.name}</h2>

        <img src={country.flag} alt="" />
       {country.capital === cover && setIsTrue(true)}
       
          <AnswerForm/>
        <button className="btn" onClick={()=>setShow(true)}>Show Answer</button>
        {show===true && <h3> {country.capital} </h3>}
       
       
      </div>
  );
}

export default React.memo(Container);
