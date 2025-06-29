
  import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'

import Layout from './layout/index.jsx'
import About from './Pages/About.jsx'
import Books from './Pages/Books.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Books' element={<Books/>}></Route>
     
      </Route>
     
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)

}