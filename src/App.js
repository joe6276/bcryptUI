import {Login }from './Components/reg/Login'
import {Register} from './Components/reg/Register'
import Admin from './Components/homepage/adminHomePage'
import DecentMpesa from './Components/DecentMpesa/index'
import Agenthome from './Components/Agent/Agenthome'
import Deposit from './Components/Agent/Deposit'
import Amount from './Components/Agent/Amount'
import Success from './Components/Agent/Success'
import { Route, Routes } from 'react-router-dom';
import Buyfloat from './Components/Agent/Buyfloat'
import UserHomepage from './Components/NormalUser/UserHomepage'
import Useramount from './Components/NormalUser/Useramount'
import Sendsuccess from './Components/NormalUser/Sendsuccess'
import Pin from './Components/NormalUser/Pin'
import Agent from './Components/NormalUser/Agent'
import Withdrawamount from './Components/NormalUser/Withdrawamount'
import Withdrawsuccess from './Components/NormalUser/Withdrawsucess'
import Wpin from './Components/NormalUser/Wpin'
import Number from './Components/NormalUser/Number'
import Dnumber from './Components/Agent/Number'
import Createagent from './Components/Admin/Createagent'
import Adminhomepage from './Components/Admin/Adminhomepage'
import AdminSuccess from './Components/Admin/Success'
import ADeposit from './Components/Admin/Deposit'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<DecentMpesa/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
          <Route path="/agent" element={<Agenthome/>}></Route>
          <Route path="/deposit" element={<Deposit/>}></Route>
          <Route path="/amount" element={<Amount/>}></Route>
          <Route path="/dnumber" element={<Dnumber/>}></Route>
          <Route path="/success" element={<Success/>}></Route>
          <Route path="/buyfloat" element={<Buyfloat/>}></Route>
          <Route path="/user" element={<UserHomepage/>}></Route>
          <Route path="/useramount" element={<Useramount/>}></Route>
          <Route path="/sendsuccess" element={<Sendsuccess/>}></Route>
          <Route path="/pin" element={<Pin/>}></Route>
          <Route path="/wpin" element={<Wpin/>}></Route>
          <Route path="/wagent" element={<Agent/>}></Route>
          <Route path="/withdraw" element={<Withdrawamount/>}></Route>
          <Route path="/withdrawsucess" element={<Withdrawsuccess/>}></Route>
          <Route path="/number" element={<Number/>}></Route>
          <Route path='/createagent' element={<Createagent/>}></Route>
          <Route path='/adminhome' element={<Adminhomepage/>}></Route>
          <Route path='/adminsuccess' element={<AdminSuccess/>}></Route>
          <Route path='/admindeposit' element={<ADeposit/>}></Route>
        </Routes>
        
    </div>
  );
}

export default App;
