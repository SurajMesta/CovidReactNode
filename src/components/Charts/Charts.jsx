import React, {useState,useEffect} from 'react'
import {fetchDailyData} from '../../api/api'
import {Line, Bar, Doughnut} from 'react-chartjs-2'
import './Charts.css'




 


function Charts({datas: {confirmed, recovered, deaths}, countries, views, viewselect }){
    const[dailyData,setDailyData]=useState([])

    useEffect(() =>{
        let addedData= async ()=>{
          setDailyData(await fetchDailyData())
        
        }

        addedData()

    },[])

    const LineData= dailyData.length ? (<Line
  
      data={{labels: dailyData.map((item)=> item.date),
      datasets:[{
      label:'Confirmed',
      data:  dailyData.map(item=> item.confirmed),
      borderColor: 'rgb(0,0,153)',
      backgroundColor:'rgb(51,153,224)',
    
    
    
    
      },{
      label:'Deaths',
      data:   dailyData.map(item=> item.deaths),
      borderColor:'rgb(255,0,0)',
      backgroundColor:'rgb(255,102,102)',

    
    
      }]
    
    }}
      
      
      />):(<div>
          <h2 className="text-center">Nothing Found Yet....</h2>
      </div>)

    
    const BarData= confirmed ? (
      <Bar data={{
        labels:['Infected', 'Recovered','Deaths'],
        datasets:[{
          label:'Overall Statistics',
          backgroundColor:['#95389e','#21bf73','#d92027'],
          hoverBorderColor:['#05dfd7','#42e6a4','#ce0f3d '],
          data:[confirmed.value,recovered.value,deaths.value]
        }]
      }}

      options={{
      legend:{display:false},
      title:{display:true, text:`Current state in ${countries}`}


      }}
      
      
      />
    ):(
      <div>
        <h2 className="text-center">No Data Found</h2>
      </div>
    )

    const DoughnutChart= confirmed ? (
      <Doughnut data={{
        labels:['Infected','Recovered','Deaths'],
        datasets:[{
          
          data:[confirmed.value,recovered.value,deaths.value],
          backgroundColor:['#9852f9','#79d70f','#d92027'],
          hoverBackgroundColor:['#27496d','#649d66','#fc7e2f']
        }]

      }}/>
    ):(<div>
      <h2>No Data Found</h2>
    </div>
      )


    return(
        
            <div className="charts">
              <section className="select-view ">
             <em> View-Type:</em> <select name="" id="" onChange={(event)=>{
                views(event.target.value)

              }}>
                <option value="">Select-View</option>
                <option value="lineview" >Line-View</option>
                <option value="barview">Bar-view</option>
             
                <option value="doughnutview">Doughnut-view</option>
              </select>
              </section>
              


{/* { countries ? DoughnutChart: LineData}  */}

 {   viewselect === 'barview' ? BarData: ''  || viewselect === 'doughnutview' ? DoughnutChart : ''  || viewselect ==='lineview' ? LineData: LineData  }


 </div>
        
    )
}


export default Charts