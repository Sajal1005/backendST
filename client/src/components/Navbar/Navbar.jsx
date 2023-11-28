import React from 'react'

function Navbar() {
  return (
    <div className="w-[100%] h-[100%] text-white" style={{
      background: "black"
    }}>
      
      <div class="container mx-auto flex flex-wrap p-6 flex-col md:flex-row items-center cursor-pointer">
    <p class="flex title-font font-medium items-center text-white mb-4 md:mb-0 hover:text-blue-400">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
</svg>


      <span class="ml-4 text-3xl font-semibold ">BookSnap</span>
    </p></div>

      <div class="container mx-auto flex px-5  items-center justify-center flex-col">
        <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center" alt="hero" src="https://images.unsplash.com/photo-1589998059171-988d887df646?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D" />
        <div class="text-center lg:w-6/12 w-full">
          <h1 className="my-4 text-5xl font-bold leading-tight">
          Words Weave Worlds Within
          </h1>
          <p className="text-2xl mb-8">
          Read Faster, Dream Bigger: Amplify Your Literary Journey!
          </p>
          
        </div>
      </div>
    </div >
  )
}

export default Navbar