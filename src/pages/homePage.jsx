import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Header from	'/src/components/header'
import ContactUs from '/src/pages/contactUs' 
import Gallery from '/src/pages/gallery'
import Items from '/src/pages/items'


const homePage = () => {
  return (
    <>
    <Header/>
    <div className='h-[calc(100vh-100px)] bg-yellow-200'>
        <Routes path="/">
            <Route path="/contactus" element={<ContactUs/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/items" element={<Items/>}/>

        </Routes>
        
    </div>
    </>
        
      )
}

export default homePage
