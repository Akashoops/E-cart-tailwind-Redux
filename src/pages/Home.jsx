import React, { useEffect } from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'


const Home = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(fetchProducts())
    },[])


  return (
    <>
     <Header insideHome={true}/>

      <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
        <div className='grid grid-cols-4 gap-4'>
          <div className='rounded border p-2 shadow'>
            <img width={'100%'} height={'200px'} src="https://static.vecteezy.com/system/resources/previews/015/413/291/original/shopping-trolley-full-of-food-fruit-products-grocery-goods-grocery-shopping-cart-buying-food-in-supermarket-illustration-for-banner-vector.jpg" alt="" />

            <div className='text-center'>
              <h3 className='text-x1 font-bold'>Product name</h3>
              <Link to={'/id/view'} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More</Link>
            </div>

          </div>


          <div className='rounded border p-2 shadow'>
            <img width={'100%'} height={'200px'} src="https://static.vecteezy.com/system/resources/previews/015/413/291/original/shopping-trolley-full-of-food-fruit-products-grocery-goods-grocery-shopping-cart-buying-food-in-supermarket-illustration-for-banner-vector.jpg" alt="" />

            <div className='text-center'>
              <h3 className='text-x1 font-bold'>Product name</h3>
              <Link to={'/id/view'} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More</Link>
            </div>

          </div>





          <div className='rounded border p-2 shadow'>
            <img width={'100%'} height={'200px'} src="https://static.vecteezy.com/system/resources/previews/015/413/291/original/shopping-trolley-full-of-food-fruit-products-grocery-goods-grocery-shopping-cart-buying-food-in-supermarket-illustration-for-banner-vector.jpg" alt="" />

            <div className='text-center'>
              <h3 className='text-x1 font-bold'>Product name</h3>
              <Link to={'/id/view'} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More</Link>
            </div>

          </div>







          <div className='rounded border p-2 shadow'>
            <img width={'100%'} height={'200px'} src="https://static.vecteezy.com/system/resources/previews/015/413/291/original/shopping-trolley-full-of-food-fruit-products-grocery-goods-grocery-shopping-cart-buying-food-in-supermarket-illustration-for-banner-vector.jpg" alt="" />

            <div className='text-center'>
              <h3 className='text-x1 font-bold'>Product name</h3>
              <Link to={'/id/view'} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More</Link>
            </div>

          </div>

          <div className='rounded border p-2 shadow'>
            <img width={'100%'} height={'200px'} src="https://static.vecteezy.com/system/resources/previews/015/413/291/original/shopping-trolley-full-of-food-fruit-products-grocery-goods-grocery-shopping-cart-buying-food-in-supermarket-illustration-for-banner-vector.jpg" alt="" />

            <div className='text-center'>
              <h3 className='text-x1 font-bold'>Product name</h3>
              <Link to={'/id/view'} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More</Link>
            </div>

          </div>



          <div className='rounded border p-2 shadow'>
            <img width={'100%'} height={'200px'} src="https://static.vecteezy.com/system/resources/previews/015/413/291/original/shopping-trolley-full-of-food-fruit-products-grocery-goods-grocery-shopping-cart-buying-food-in-supermarket-illustration-for-banner-vector.jpg" alt="" />

            <div className='text-center'>
              <h3 className='text-x1 font-bold'>Product name</h3>
              <Link to={'/id/view'} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More</Link>
            </div>

          </div>



          <div className='rounded border p-2 shadow'>
            <img width={'100%'} height={'200px'} src="https://static.vecteezy.com/system/resources/previews/015/413/291/original/shopping-trolley-full-of-food-fruit-products-grocery-goods-grocery-shopping-cart-buying-food-in-supermarket-illustration-for-banner-vector.jpg" alt="" />

            <div className='text-center'>
              <h3 className='text-x1 font-bold'>Product name</h3>
              <Link to={'/id/view'} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More</Link>
            </div>

          </div>



          <div className='rounded border p-2 shadow'>
            <img width={'100%'} height={'200px'} src="https://static.vecteezy.com/system/resources/previews/015/413/291/original/shopping-trolley-full-of-food-fruit-products-grocery-goods-grocery-shopping-cart-buying-food-in-supermarket-illustration-for-banner-vector.jpg" alt="" />

            <div className='text-center'>
              <h3 className='text-x1 font-bold'>Product name</h3>
              <Link to={'/id/view'} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More</Link>
            </div>

          </div>


        </div>
      </div>

    </>
   
  )
}

export default Home