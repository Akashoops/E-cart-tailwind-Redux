import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-violet-600 text-white py-6 px-10 mt-6 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="fa-solid fa-truck-fast"></span> E-Cart
          </h2>
          <p className="mt-2 text-sm">
            Designed and built with all the love in the world by the Luminar
            team with help from our contributors.
          </p>
          <p className="text-sm mt-2">
            Code licensed by Luminar, docs CC BY 3.0 <br />
            Currently v5.3.2
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Links</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <a href="/" className="hover:text-gray-300">Landing Page</a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-300">Home Page</a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-300">Watch History Page</a>
            </li>
          </ul>
        </div>

        {/* Guides */}
        <div>
          <h3 className="text-lg font-semibold">Guides</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <a href="/" className="hover:text-gray-300">React</a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-300">React Bootstrap</a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-300">React Router</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className='flex gap-2 '>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-2 w-full p-2 rounded-md text-black"
          />
          <button> <i className="fa-solid fa-arrow-right mt-3"></i></button>
          </div>
          
          <div className="flex gap-4 mt-3 text-lg">
            <i className="fa-brands fa-twitter cursor-pointer"></i>
            <i className="fa-brands fa-instagram cursor-pointer"></i>
            <i className="fa-brands fa-linkedin cursor-pointer"></i>
            <i className="fa-brands fa-facebook cursor-pointer"></i>
          </div>
        </div>

      </div>
      <div className="text-center mt-6 text-sm">
        &copy; June 2024 Batch, E-Cart. Built with React & Redux.
      </div>
    </footer>
  


    </>
  )
}

export default Footer