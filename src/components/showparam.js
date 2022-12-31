import React from 'react'
import Header from './navbar_main'
import Footer from './footer'
import { useParams } from 'react-router-dom'

const Showparam=()=> {
    const {id}=useParams();
  return (
    <div className='text-7xl flex justify-center '>
        {id}
    </div>
  )
}
export default Showparam
