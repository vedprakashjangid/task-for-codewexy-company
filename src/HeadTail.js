import React,{useState} from 'react'
import Navbar from './Navbar'
import "./css/HeadTail.css"

const HeadTail = () => {

const[select,setSelect] = useState();
const[data,setData] = useState();
 

const submit=(e)=>{
  e.preventDefault();
setData(select)
console.log(data)


}


  
  
    


  return (
    <>
      <Navbar />
      <div className="dropdown__container">
        <h1>{select}</h1>
        <form onSubmit={submit}>
          <label id="label" for="headTail">Choose Head or Tail:</label>
       
          <select name="headTail" id="headTail" value ={select} onChange={(e)=>setSelect(e.target.value)}>
            <option value="none" selected disabled >Select</option>
            <option value="Head">Head</option>
            <option value="Tail" >Tail</option>
          
          </select>
          <br/><br/>
            <input type="submit" value="Submit"/>
            </form>
          </div>

          <div className="output__container">
            ghgfkhkkk
          </div>

          </>
          )
}

export default HeadTail