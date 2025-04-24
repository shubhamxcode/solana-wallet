import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/nav"
function layout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default layout