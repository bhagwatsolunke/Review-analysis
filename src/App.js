import './App.css';
import Homepage from './Pages/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/login.js';
import Signup from './Pages/signup.js';
import Navbar from './Component/Navbar.js';
import Alert from './Component/Alert.js';
import {useState} from 'react'
import Analysis from './Pages/Analysis.js';
import Features from './Pages/Features.js';
import About from './Pages/About.js';
import ProfilePage from './Pages/Profile.js';


function App() {
  const[alert,setAlert]= useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}

  return (
    <Router>
    <div>
        <Navbar />
        <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" element={<Homepage showAlert={showAlert} />} />
          <Route exact path="/analysis" element={<Analysis/>} />
          <Route exact path="/profile" element={<ProfilePage/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/features" element={<Features/>} />
          <Route exact path="/login"  element={<Login showAlert={showAlert}/>}/>
         <Route exact path="/signup"  element={<Signup showAlert={showAlert}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
