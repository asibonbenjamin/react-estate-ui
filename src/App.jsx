//importing the layout styling
import "./layout.scss";
import Navbar from "./components/navbar/Navbar.jsx";
import HomePage from "./routes/homePage/homePage.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="layout">

      {/* navigation */}
      <div className="navbar">
        <Navbar/>
      </div>
      

      {/* homePage */}
      <div className="content">
        <HomePage/>
      </div>
    
    </div>
  )
}

export default App