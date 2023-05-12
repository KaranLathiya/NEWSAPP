// import logo from './logo.svg';
import './App.css';
import { HashRouter , Route, Routes} from "react-router-dom";
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Section from './Components/Section';
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state={
    progress:0
  }
  setprogress= (progress) =>{
    this.setState({progress:progress})
  }
  render() {
    
    return (
      <>
      
      <LoadingBar 
      height={3}
      color='red'
      progress={this.state.progress}
      />  
      <Navbar title="NEWS" />
        <Routes>
          <Route path="/" element={<Section setprogress={this.setprogress} key="" category=""/>}></Route>
          <Route path="/business" element={<Section setprogress={this.setprogress} key="business" category="business"/>}></Route>
          <Route path="/entertainment" element={<Section setprogress={this.setprogress} key="entertainment" category="entertainment"/>}></Route>   
          <Route path="/health" element={<Section setprogress={this.setprogress} key="health" category="health"/>}></Route>
          <Route path="/science" element={<Section setprogress={this.setprogress} key="science" category="science"/>}></Route>
          <Route path="/sports" element={<Section setprogress={this.setprogress} key="sports" category="sports"/>}></Route>
          <Route path="/technology" element={<Section setprogress={this.setprogress} key="technology" category="technology"/>}></Route>
         </Routes>
        
      </>
    )
  }
}

