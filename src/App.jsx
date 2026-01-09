
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import AboutPage from './pages/About'
import CollectionPage from './pages/CollectionPage.JSX'
import BackToTop from './components/BOTTOM_TO_TOP/ScrollToTop.JSX'
import LuxuryCursor from './components/LuxuryCursor'

function App() {
 

  return (
    <>
      <Navbar/>
        {/* <LuxuryCursor/> */}
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/collection' element={<CollectionPage/>} />
      </Routes>
      {/* <BackToTop/> */}
      <Footer/>
   
        
    </>
  )
}

export default App
