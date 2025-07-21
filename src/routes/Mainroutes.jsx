import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Explore from '../pages/Explore'
import Learn from '../pages/Learn'
import Teach from '../pages/Teach'
import Mentore from '../components/Mentore'
import PageNotFound from '../pages/PageNotFound'
const Mainroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/teach" element={<Teach />} />
        <Route path="*" element={<PageNotFound/>} />

        <Route path="/mentore" element={<Mentore />} />

    </Routes>
  )
}

export default Mainroutes
