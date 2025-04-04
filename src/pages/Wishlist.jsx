import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'

const Wishlist = () => {
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='px-5'>
     <>
    <h1 className='text-4xl  text-red-600 text-center font-style: italic'>My Wishlist</h1>

       <div className='grid grid-cols-4 gap-4 p-1'>
          <div className='rounded border p-2 shadow'>
            <img width={'100%'} height={'200px'} src="https://lh3.googleusercontent.com/8BZknE6eMcg4GJEfbueCdidSwqqqUiJXM5rXGB3Yhe3emzgG0dQZ20vE_-uxkAjK7GakU5fNOnTQc7WNvwmbKA3OHFk_yMAxMdEtGxRG=w1200-rw" alt="" />

            <div className='text-center'>
              <h3 className='text-3xl font-bold '>Sara</h3>
              <div className='flex justify-evenly mt-3'>
                <button className='text-xl' ><i class="fa-solid fa-heart-circle-xmark text-red-500"></i></button>
                <button className='text-xl' ><i class="fa-solid fa-cart-plus text-green-700"></i></button>

              </div>
            </div>

          </div>


          
        </div>

     </>
    </div>

    
    </>
  )
}

export default Wishlist