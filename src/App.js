import React from "react";
import Home from "./components/Home";
import Rooms from './components/Rooms';
import Restaurant from "./components/Restaurant";
import Booking from "./components/Booking";
import Manager from "./components/Manager";
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './app/store';
import Reservation from "./components/Reservation";
import './styles/myStyle.css';


function App() {

  
  return (
    <Provider store={store}>

      <div className="App">
    
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/rooms" element={<Rooms/>}></Route>
          <Route path="/restaurant" element={<Restaurant/>}></Route>
          <Route path="/booking/:id" element={<Booking/>}></Route>
          <Route path="/reservation" element={<Reservation/>}></Route>
          <Route path="/manager" element={<Manager/>}></Route>
          
        </Routes>


      </div>
      
    </Provider>
  ); 
} 

export default App;

