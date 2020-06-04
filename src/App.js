import React from 'react';
import logo from './logo.svg';
import './App.css';
import CovidImg from './components/CovidImg/CovidImg'
import Cards from './components/Cards/Cards'
import Charts from './components/Charts/Charts'
import CountryPicker from './components/CountryPicker/CountryPicker'
import {fetchData} from './api/api'




class App extends React.Component{

  state={
    data:{},
    country:'',
    view:''
  }

  async componentDidMount(){
   
    let data= await fetchData()
   this.setState({data})
  }


handleCountryChange= async (country)=>{
  
  await this.setState({country})
  console.log(this.state.country)

  let data= await fetchData(country)

  this.setState({data,country})


}


handleViewChange=(view)=>{
  console.log(view)

  this.setState({view})

}


  render(){
    return(
      <div className="container">
        <CovidImg/>
        <Cards data={this.state.data}/>
        <CountryPicker countryChange={this.handleCountryChange}/>
        <Charts datas={this.state.data} countries={this.state.country} views={this.handleViewChange} viewselect={this.state.view}/>      
      </div>
    )
  }
}

export default App;
