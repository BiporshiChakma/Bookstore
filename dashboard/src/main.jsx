import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Homelayout from './layout/Homelayout.jsx';
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Admin from './layout/Admin.jsx'
import Dhome from './component/Dhome.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homelayout/>}>
       <Route index element={<Home />} />
            <Route path="/Home" element={<Home/>}></Route>
            <Route path="/About" element={<About/>}></Route>
             <Route path="/Shop" element={<Shop/>}></Route>
           
      </Route>
         <Route path="/Admin" element={<Admin/>}>
          <Route index element={<Dhome/>} />
          
          
         </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
