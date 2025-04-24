import { Routes,Route } from 'react-router-dom';
import './App.css'
import Home from '../src/components/Home/Home'
import Layout from "./layout";
import Wallet from '../src/components/wallet/sol'
function App() {

  return (
   <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/connectwallet' element={<Wallet/>}/>
    </Route>
   </Routes>
  )
}

export default App
