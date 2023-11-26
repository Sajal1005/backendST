import React from 'react'

function Navbar() {
  return (
    <header class="body-font font-black">
  <div class="container mx-auto flex flex-wrap p-6 flex-col md:flex-row items-center cursor-pointer">
    <p class="flex title-font font-medium items-center text-white mb-4 md:mb-0 hover:text-green-400">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
</svg>

      <span class="ml-4 text-2xl">SnapNotes</span>
    </p>
    <nav class="md:ml-auto flex flex-wrap items-center text-lg justify-center text-white cursor-pointer">
      <p class="md:mr-20 mr-5 hover:text-green-400">Home</p>
      <p class="md:mr-20 mr-5 hover:text-green-400">Notes</p>
      <p class="md:mr-20 mr-5 hover:text-green-400">Tasks</p>
    </nav>
  </div>
</header>
  )
}

export default Navbar