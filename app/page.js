import React from 'react'

const page = () => {
  return (
    <>
    <div className='flex justify-center flex-col items-center gap-3 text-white h-[44vh]'>
      <div className='font-bold text-3xl'>Buy me a Coffee <span><img width={22} src='/i1.gif' alt=''/></span></div>
      <p>
        A crowdfunding platform for creators.
      </p>
      <div>
      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start here</button>
      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
      </div>
      </div>
      <div className='bg-white h-1 opacity-10'>

      </div>
  

    <div className='text-white container mx-auto'>
      <h1 className='text-2xl font-bold text-center my-8'>Your fans can buy you coffee</h1>
      <div className='flex gap-5 justify-around '>
      <div className='item space-y-3 flex flex-col items-center justify-center'>
          <img className=' bg-slate-400 rounded-full p-2 text-black' width={66} src="/man.gif" alt="Man GIF" />
          <p className='font-bold'>Fans want to help</p>
          <p className=' text-center'>Your fans are available for you to help</p>
        </div>
        <div className='item space-y-3 flex flex-col items-center justify-center'>
          <img className=' bg-slate-400 rounded-full p-2 text-black' width={66} src="/coin.png" alt="Man GIF" />
          <p className='font-bold'>Fans want to help</p>
          <p className=' text-center'>Your fans are available for you to help</p>
        </div>
        <div className='item space-y-3 flex flex-col items-center justify-center'>
          <img className=' bg-slate-400 rounded-full p-2 text-black' width={66} src="/help.png" alt="Man GIF" />
          <p className='font-bold'>Fans want to help</p>
          <p className=' text-center'>Your fans are available for you to help</p>
        </div>
      </div>
      </div>
     

     <div className='text-white container mx-auto'>
      <h1 className='text-2xl font-bold text-center my-8'>Learn More About us</h1>
     </div>
      
    </>
  )
}

export default page