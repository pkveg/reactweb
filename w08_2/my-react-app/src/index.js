import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Blogs from './Blogs'
import Contact from './Contact'
import NoPage from './NoPage'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='blogs' element={<Blogs/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()