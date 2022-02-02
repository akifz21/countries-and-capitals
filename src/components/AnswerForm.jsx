import React,{useContext} from 'react';
import {useFormik} from 'formik'
import CountriesContext from '../context/CountriesContext';




function AnswerForm() {

    const {setAnswer,setShow} = useContext(CountriesContext)

    const formik = useFormik({
        initialValues:{
            answer:""
        },
        onSubmit: values=>{
           setAnswer(values.answer)
            
        }
    })


  return (
      <div className="form-div">
          <form onSubmit={formik.handleSubmit}>
          
              <input type="text" placeholder="Answer.." name="answer" onChange={formik.handleChange} value={formik.values.answer}  />
              <button className="btn" type="submit">Next</button>
          </form>
          
          
      </div>
  );
}

export default AnswerForm;
