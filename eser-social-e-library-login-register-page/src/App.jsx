import React from 'react'
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Login />} />
          <Route path='/*' element={<NotFound />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
