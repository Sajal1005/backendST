import React from 'react'

function Navbar() {
  return (
    <header class="body-font font-black">
  <div class="container mx-auto flex flex-wrap p-6 flex-col md:flex-row items-center cursor-pointer">
    <p class="flex title-font font-medium items-center text-white mb-4 md:mb-0 hover:text-blue-400">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
</svg>


      <span class="ml-4 text-3xl font-semibold ">BookSnap</span>
    </p>
    {/* <nav class="md:ml-auto flex flex-wrap items-center text-lg justify-center text-white cursor-pointer">
      <p class="md:mr-20 mr-5 hover:text-green-400">Home</p>
      <p class="md:mr-20 mr-5 hover:text-green-400">Notes</p>
      <p class="md:mr-20 mr-5 hover:text-green-400">Tasks</p>
    </nav> */}
  </div>
</header>
  )
}

export default Navbar