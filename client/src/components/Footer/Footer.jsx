import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <footer class="text-white body-font bg-gray-950">
    <div class="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <p class="flex title-font font-medium items-center md:justify-start justify-center text-white-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
          <span class="ml-3 text-2xl text-pink-400">BookSnap</span>
        </p>
        <p class="mt-6 text-sm text-white-500">CHUCKLING. EMOTION. SUSPENSE.
  DISCOVER IT ALL IN THE WORLD OF LITERATURE.</p>
      </div>
      <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <p className='text-md font-medium mb-4'>Books: gateways to unexplored realms, mirrors reflecting the human journey. Adventures bound in pages, knowledge wrapped in prose. Time-travelers, culture-shapers, empathy architects. Solace in solitude, companionship in crowded spaces.</p>
        <h1 className='text-2xl font-bold uppercase mb-4'>Are you an author or a publisher?</h1>
  <p>Gain access to a massive audience of book lovers. BookSnap is a great place to promote your books.</p>
      </div>
    </div>
    <div class="bg-gray-900">
      <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p class="text-white-500 text-sm text-center sm:text-left">© 2023 BookSnap
          <p href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-white-600 ml-1" target="_blank"></p>
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <p class="text-white-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </p>
          <p class="ml-3 text-white-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </p>
          <p class="ml-3 text-white-500">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </p>
          <p class="ml-3 text-white-500">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </p>
        </span>
      </div>
    </div>
  </footer>
  )
}

export default Footer