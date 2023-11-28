import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./book.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { AiOutlineCaretDown,AiOutlineCaretUp } from "react-icons/ai";

const Book = () => {
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('name');
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleSort = (e) => {
    setSort(e.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://backendstserver.onrender.com/api/getall?category=${category}&sort=${sort}`);
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };
  
    fetchData();
  }, [category,sort]);

  const deleteBook = async (bookId) => {
    await axios
      .delete(`https://backendstserver.onrender.com/api/delete/${bookId}`)
      .then((respones) => {
        setBooks((prevBook) => prevBook.filter((book) => book._id !== bookId));
        toast.success("Book deleted successfully", { position: "top-right" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [isOpen,setIsOpen] = useState(false);


  return (
    <>
      <div className=" bg-cover">
        <Navbar />
      </div>

      

      <section class="text-gray-600 body-font bg-[#151515] ">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap">

        
          <Link to={"/add"} className=' md:ml-10 mb-14 text-xl font-bold uppercase tracking-wider '><button className="button-85" role="button">Add Book</button></Link>
        

        <div className="relative flex flex-col items-center  mb-8 md:ml-10 rounded-lg md:w-[70%] w-[93%]">
            <button onClick={()=> setIsOpen((prev) => !prev)} className="button-85 uppercase text-center text-white bg-blue-400 p-4 px-16 w-full flex items-center justify-between font-bold text-xl rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white">
            Sort and filter the books
              {!isOpen ? (
                <AiOutlineCaretDown className="h-8"/>
              ):(
                <AiOutlineCaretUp className="h-8"/>
              )}
              </button>
              {isOpen && (
                <div className="anim mt-5 flex flex-wrap items-center justify-start rounded-lg p-2 px-10 w-full ">
                  
                  <div className="flex items-center justify-between py-8 mr-10"><label htmlFor="category" className="text-white text-lg font-bold mr-6">Select Category:</label>
                  <select id="category" className="rounded-lg border-4 border-silver p-3 w-full min-w-[150px] text-md" value={category} onChange={handleCategoryChange}>
                    <option selected value="">All categories</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Religious">Religious</option>
                    <option value="Physics">Physics</option>
                    <option value="Lifestyle">Lifestyle</option>
                    <option value="Memory">Memory</option>
                  </select></div>

                  <div className="flex items-center justify-between py-8"><label htmlFor="category" className="text-white text-lg font-bold mr-6">Sort Data:</label>
                  <select id="sort" className="rounded-lg border-4 border-silver p-3 w-full text-md min-w-[190px]" value={sort} onChange={handleSort}>
                    <option className="" value="price">Sort by price</option>
                    <option selected value="name">Sort by name (Asc)</option>
                  </select></div>
                
                </div>
              )}
          </div>

          

    {books.map((book, index)=>{
                         return(
                          <div class="p-4 md:w-1/3">
                          <div className="h-full border-2 border-gray-800 border-opacity-60 rounded-lg overflow-hidden bg-gray-900 text-white">
  <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={book.imgLink} alt="Book Cover"/>
  <div className="p-6">
    <h1 className="title-font text-xl font-medium mb-3">NAME: {book.name}</h1>
    <h2 className="tracking-widest text-md font-medium mb-1">Category: {book.category}</h2>
    <p className="tracking-widest text-md font-medium mb-1">Author's Name: {book.authName}</p>
    <p className="tracking-widest text-md font-medium mb-1">Publisher's Name: {book.pubName}</p>
    <p className="tracking-widest text-md font-medium mb-4">Book Price: ₹{book.price}</p>
    <div className="flex items-center flex-wrap mb-6">
      <a target="_blank" rel="noreferrer" href={book.buyLink} className="  items-center md:mb-6 lg:mb-0 ">
      <button className="button-64 uppercase" role="button">
      <span class="text">Buy</span>
      </button>
      </a>
    </div>
    <div className="actionButtons">
      <button className="btn-1" onClick={() => deleteBook(book._id)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
        </svg>
      </button>
      
        <Link to={`/edit/${book._id}`}>
        <button className="btn-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
            <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
          </svg>
          </button>
        </Link>
      
    </div>
  </div>
</div>

                        </div>
                            )
                    })
}
    </div>
  </div>
</section>
  <Footer/>
  </>
  );
};

export default Book;
