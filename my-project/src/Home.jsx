import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Forntendlayout from './layout/Frontendlayout'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Forntendlayout/>}>
     
      </Route>
     
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
