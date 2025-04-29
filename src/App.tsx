import { Routes,Route } from 'react-router-dom';
import './App.css'
import Home from '../src/components/Home/Home'
import Layout from "./layout";
import Wallet from '../src/components/wallet/sol'
import Foucet from './components/Foucet/sendsol';
function App() {

  return (
   <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/connectwallet' element={<Wallet/>}/>
      <Route path='/faucet' element={<Foucet/>}/>
    </Route>
   </Routes>
  )
}

export default App
