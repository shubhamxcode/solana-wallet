import { Routes,Route } from 'react-router-dom';
import './App.css'
import Home from '../src/components/Home/Home'
import Layout from "./layout";
import Wallet from '../src/components/wallet/sol'
import Fund from './components/Foucet/foucet';
function App() {

  return (
   <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/connectwallet' element={<Wallet/>}/>
      <Route path='/fund' element={<Fund/>}/>
    </Route>
   </Routes>
  )
}

export default App
