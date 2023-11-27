import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./add.css";
import toast from "react-hot-toast";

const Add = () => {
  const books = {
    name: "",
    imgLink: "",
    category: "",
    authName: "",
    pubName: "",
    price: "",
    buyLink: "",
  };

  const [book, setBook] = useState(books);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("https://backendstserver.onrender.com/api/create", book)
      .then((response) => {
        toast.success("Book added successfully", { position: "top-right" });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-ful bg-red-100">
      <div class="area h-[800px]" >
            <ul class="circles">
                    <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
      <div class="login-box w-full">
        <Link to={"/"} className="text-black text-lg underline">
          Back
        </Link>
        <h2 className="underline mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl ">ADD BOOK</h2>
        <form className="" onSubmit={submitForm}>
          <div class="user-box">
            <input
              type="text"
              value={book.name}
              onChange={inputHandler}
              id="name"
              name="name"
              autoComplete="off"
              placeholder="Name of the book"
            />
            <label htmlFor="name">Name</label>
          </div>
          <div class="user-box">
            <input
              type="text"
              value={book.imgLink}
              onChange={inputHandler}
              id="imgLink"
              name="imgLink"
              autoComplete="off"
              placeholder="Image Link of the book"
            />
            <label htmlFor="imgLink">Image Link</label>
          </div>
          <div class="user-box">
            <input
              type="text"
              value={book.category}
              onChange={inputHandler}
              id="category"
              name="category"
              autoComplete="off"
              placeholder="Book Category"
            />
            <label htmlFor="category">Category</label>
          </div>
          <div class="user-box">
            <input
              type="text"
              value={book.authName}
              onChange={inputHandler}
              id="authName"
              name="authName"
              autoComplete="off"
              placeholder="Author's Name"
            />
            <label htmlFor="authName">Author's Name</label>
          </div>
          <div class="user-box">
            <input
              type="text"
              value={book.pubName}
              onChange={inputHandler}
              id="pubName"
              name="pubName"
              autoComplete="off"
              placeholder="Publisher's Name"
            />
            <label htmlFor="pubName">Publisher's Name</label>
          </div>
          <div class="user-box">
            <input
              type="Number"
              value={book.price}
              onChange={inputHandler}
              id="price"
              name="price"
              autoComplete="off"
              placeholder="Price of the book"
            />
            <label htmlFor="price">Price (In Rs.)</label>
          </div>
          <div class="user-box">
            <input
              type="text"
              value={book.buyLink}
              onChange={inputHandler}
              id="buyLink"
              name="buyLink"
              autoComplete="off"
              placeholder="Link to Buy"
            />
            <label htmlFor="buyLink">Link to Buy</label>
          </div>
          <div className="inputGroup">
            <button type="submit" className="bg-black">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              ADD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
