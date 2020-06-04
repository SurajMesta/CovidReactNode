import React from 'react'
import CountUp from 'react-countup'
import './Cards.css'


function Cards({data:{confirmed,recovered,deaths,lastUpdate}}){
    if(!confirmed){
        return(<h3> Loading...</h3>)
           
    }
    return(
  
           
 <div className="outer-div">
                    


          
<div className="card card1" >
<div className="card-body">
       <h4 className="card-title text-center head-title"  ><em>Confirmed</em></h4>
       <h5 className="total1"><em>Total:</em>  <CountUp start={0} end={confirmed.value} separator="," /></h5>
<p className="card-text date-text" ><em>Last-Updated:</em> {new Date(lastUpdate).toLocaleString()}</p>
 </div>
</div>



 <div className="card card2" >
<div className="card-body">
       <h4 className="card-title text-center head-title2"  ><em>Recovered</em></h4>
       <h5 className="total2"><em>Total:</em>  <CountUp start={0} end={recovered.value} separator="," /></h5>
<p className="card-text date-text2" ><em>Last-Updated:</em> {new Date(lastUpdate).toLocaleString()}</p>
 </div>
</div>


<div className="card card3" >
<div className="card-body">
       <h4 className="card-title text-center head-title3"  ><em>Deaths</em></h4>
       <h5 className="total3"><em>Total:</em>  <CountUp start={0} end={deaths.value} separator="," /></h5>
<p className="card-text date-text3" ><em>Last-Updated:</em> {new Date(lastUpdate).toLocaleString()}</p>
 </div>
</div>

</div>

                
            
     


  



  
    )
}


export default Cards