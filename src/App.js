import React from 'react'
import About from './component/About'
import Portfolio from './component/Portfolio'
import Contact from './component/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/Layout'
import NoPage from './component/NoPage'
import Home from './component/Home'
import Hire from './component/Hire';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}                  />
            <Route path="About"     element={<About />}      />
            <Route path="Portfolio" element={<Portfolio />}  />
            <Route path="Contact"   element={<Contact />}    />
            <Route path="Hire" element={<Hire/>} />
            <Route path="*"         element={<NoPage />}     />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
