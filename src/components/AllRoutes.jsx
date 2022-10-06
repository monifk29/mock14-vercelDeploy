import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Quiz from "../pages/Quiz"
import Result from '../pages/Result'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
            <Route path='/quiz' element={<Quiz/>}/>
            <Route path='/results' element={<Result/>}/>

    </Routes>
  )
}

export default AllRoutes