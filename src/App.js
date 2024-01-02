import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home/Home';
import Profile from './Component/Home/Profile';
import { useSelector } from 'react-redux';
import Loading from './Component/Home/Loading';
import LogReg from './Component/Log-Reg/LogReg';
import FamousList from './Component/Famous/FamousList';
import NavBar from './Component/Home/NavBar';

function App() {
  const load=useSelector((state)=>state.userReducer.load  )

  return (
   <>
<NavBar />   

<Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/Profile"  element={load?<Loading />:<Profile /> }/> 
    <Route path="/connecting" element={load?<Loading />:<LogReg />}/>
    <Route path="/FamousList" element={load?<Loading />:<FamousList />}/>


   </Routes>
   </>
  );
}

export default App;
