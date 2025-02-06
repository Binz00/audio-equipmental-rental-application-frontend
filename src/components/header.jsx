import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'	


const header = () => {
  return (
    <div className='justify-center w-full '>
        <header className='w-full h-[100px] shadow-xl bg-yellow-600 flex justify-center items-center relative' >
        <img src="http://localhost:5173/audioImage.png " alt="logo" className='w-[200px] h-[120px] boarder-3px absolute left-1'/>
            <div className='absolute right-20'>
                
                <Link to="/" className='w-[200px] m-5 h-[50px] font-semibold text-[24px]'>
                    Home
                </Link>
                <Link to="/contactus" className='w-[200px] m-5 h-[50px] font-semibold text-[24px]'>
                    Contact US
                </Link>
                <Link to="/gallery" className='w-[200px] m-5 h-[50px] font-semibold text-[24px]'>
                    Gallery
                </Link>
                <Link to="/items" className='w-[200px] m-5 h-[50px] font-semibold text-[24px]'>
                    Items
                </Link>
            </div>
            
        </header>
      
    </div>
  )
}

export default header
