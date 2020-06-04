import React,{useState,useEffect} from 'react'
import {fetchCountryData} from '../../api/api'
import {FormControl, NativeSelect} from '@material-ui/core'
import './CountryPicker.css'

function CountryPicker({countryChange}){
    
   const [countryData,setCountryData]= useState([])
    useEffect(()=>{
        let fetchAPI= async()=>{
            setCountryData(await fetchCountryData())
        }

        fetchAPI()
    })


    return(
        <div className="pick">
     <em>Pick A Country: </em>  <select name="" id="select" onChange={(event)=>{
                countryChange(event.target.value)

            }}>
           <option  value="" style={{backgroundColor:'snow'}}>Global</option>
             {countryData.map((item)=>{
                 return(
                 <option style={{backgroundColor:'snow'}} key={item.iso2}>{item.name}</option>
                 )
             })}
            
           </select>
        </div>
      
       
    )
}


export default CountryPicker