import Axios from 'axios'
 let URI='https://covid19.mathdro.id/api'


export const fetchData= async(country)=>{

    let NEWURI=URI

    if(country){
        NEWURI=`${URI}/countries/${country}`

    }
 

  
  
 
    try{
       

        const {data:{confirmed, recovered, deaths,lastUpdate}}= await Axios.get(`${NEWURI}`)
        return {confirmed,recovered,deaths,lastUpdate}
    }catch(err){

    }

}


export const fetchDailyData= async()=>{

    try{
        const {data}=await Axios.get(`${URI}/daily`)
        let modifiedData= await data.map((item)=>{
            return{
                confirmed: item.confirmed.total,
                deaths:item.deaths.total,
                date:item.reportDate

            }
        })

        return modifiedData


    }
    catch(err){

    }

}



export const fetchCountryData= async ()=>{
    try{
      const {data:{countries}} = await Axios.get(`${URI}/countries`)
    return countries

    }catch(err){

    }

}

