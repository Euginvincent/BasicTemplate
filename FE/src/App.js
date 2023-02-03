import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';

import Login from './components/User_Login/Login';
import SignUp from './components/User_Login/SignupPage';
import Home from './components/Home';
import About from './components/About';
import Online from './components/Online';
import Offline from './components/Offline';
import Online1 from './components/Online1';
import Offline1 from './components/Offline1';
import Contact from './components/Contact';

import RoomTypeList from './components/Master/RoomType/RoomTypeList';
import RoomType from './components/Master/RoomType/RoomType';
import RoomCategoryList from './components/Master/RoomCategory/RoomCategoryList';
import RoomBoy from './components/Master/RoomBoy';
import LaundryMaster from './components/Master/LaundryMaster';
import OtherCharges from './components/Master/OtherCharges';
import Damages from './components/Master/Damages';

import CheckIn from './components/Reservations/CheckIn';
import CheckOut from './components/Reservations/CheckOut';
import GuestAdvanceRecepit from './components/Reservations/GuestAdvanceRecepit';
import ExtraPersonPosting from './components/Reservations/ExtraPersonPosting';
import LaundryBill from './components/Reservations/LaundryBill';
import CashPayment from './components/Reservations/CashPayment';

import Header from './components/Layout/header';

function App() {
  return (
    <div>
      <Router basename="/">
        {/* Add Menu Component */}
        <Header />
        <Switch> 
          <Route exact path="/" component={Login} />
          <Route path="/SignupPage" component={SignUp}/>

          <Route exact path="/Home" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Online" component={Online}/>
          <Route path="/Offline" component={Offline}/>
          <Route path="/Online1" component={Online1}/>
          <Route path="/Offline1" component={Offline1}/>
          <Route path="/Contact" component={Contact}/>
    {/* Master */}
          <Route path="/RoomTypeList" component={RoomTypeList}/>
          <Route path="/RoomType" component={RoomType}/>
          <Route path="/RoomCategoryList" component={RoomCategoryList}/>
          <Route path="/RoomBoy" component={RoomBoy}/>
          <Route path="/LaundryMaster" component={LaundryMaster}/>
          <Route path="/OtherCharges" component={OtherCharges}/>
          <Route path="/Damages" component={Damages}/>
{/* Reservations */}
          <Route path="/CheckIn" component={CheckIn}/>
          <Route path="/CheckOut" component={CheckOut}/>
          <Route path="/GuestAdvanceRecepit" component={GuestAdvanceRecepit}/>
          <Route path="/ExtraPersonPosting" component={ExtraPersonPosting}/>
          <Route path="/LaundryBill" component={LaundryBill}/>
          <Route path="/CashPayment" component={CashPayment}/>
          
        </Switch>
      </Router>
    </div>

  );
}

export default App;
