import React from 'react'

const NewKrypto = () => {
  return (
    <div className="">
    <div className="w-full h-14  flex justify-between items-center px-4 md:px-4 border">
    <div className='text-2xl text-indigo-700 font-bold'>Krypto</div>
    <ul className='flex font-semibold text-gray-500'>
        <li className='mx-[10px] cursor-pointer'>About Us</li>
        <li className='mx-[10px] cursor-pointer'>contacts</li>
        <li className='mx-[10px] cursor-pointer'>services</li>
        <li className='mx-[10px] cursor-pointer'>reviews</li>
        <li className='mx-[10px] cursor-pointer'>Package & pricing</li>
        <li className='mx-[10px] cursor-pointer'>Portfolio</li>
        <li className='mx-[10px] cursor-pointer'>blog</li>
    </ul>
    <button className="bg-transparent hover:bg-gray-100 text-blue-800 font-semibold py-2 px-4 border border-gray-400 rounded-full cursor-pointer">
         Contact Us
       </button>
    </div>

    <div className='place-items-center '>
            <div className='text-5xl font-bold text-orange-600 mt-40'>DIGITAL INDUSTRY</div>
            <p className="p-6 text-center ">At Kyptronix LLP, we are not just building websites, apps, or marketing strategies—we are creating business success. 
                Based in Delaware, we help companies across the U.S. scale rapidly, increase conversions, and dominate their 
                industries.Whether you need a custom-built website that drives traffic, a mobile app that wows, or a blockchain 
                solution that disrupts your industry,
                 Kyptronix is your trusted digital partner.
                  
                  </p>

                <p>Donot just compete—lead. Ready to see what Kyptronix can do for you?</p>  
                 
                 
                 <div className='p-6 gap-4 flex'>

                
                  <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                   Get Started Today **
            </button>
            <button  className="bg-white hover:bg-gray-100 text-blue-800 font-semibold py-2 px-4 rounded-full"
                    
                >
                    View Our Work *
                </button>  
                </div>       
            
    </div>

    <div>
    <div className="flex justify-center ">
            <div className= 'h-[60px] w-[200px] bottom-0 left-1/2 z-10 border-4 solid'>
              <img className="" src="https://shorturl.at/hGyYr"></img>  
             
            </div>
            <div className= 'h-[120px] absolute w-[200px] bottom-0 z-20 border-4 solid'>
              <img className="" src="https://shorturl.at/hGyYr"></img>  
             
            </div>
            <div className= 'h-[60px] w-[200px] bottom-0 right-1/2 z-10 border-4 solid'>
              <img className="" src="https://shorturl.at/hGyYr"></img>  
             
            </div>
          </div>
    </div>
    </div>
  )
}

export default NewKrypto