import React from 'react'
import Header from '../Components/Header'

const View = () => {
  return (
    <>
    <Header/>
    <div className='flex flex-col mx-5 '>
      <div className='grid grid-cols-2 items-center h-screen'>
        <img height={'200px'} width={'400'}  src="https://lh3.googleusercontent.com/8BZknE6eMcg4GJEfbueCdidSwqqqUiJXM5rXGB3Yhe3emzgG0dQZ20vE_-uxkAjK7GakU5fNOnTQc7WNvwmbKA3OHFk_yMAxMdEtGxRG=w1200-rw" alt="" />


        <div>
          <h3 className='font-bold'>PID : 2317</h3>
          <h2 className='text-5xl font-bold'>Sara</h2>
          <h4 className='font-bold text-red-600 text-2xl'>$ 250</h4>
          <h4>Brand : LP</h4>
          <h4>Category : Formal</h4>
          <p>
            <span className='font-bold'>Description:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            <div className='flex justify-between mt-5'>
              <button className='bg-blue-600 text-white p-2 rounded'>Add to Wishlist</button>
              <button className='bg-green-600 text-white p-2 rounded'>Add to Cart</button>
             


            </div>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default View