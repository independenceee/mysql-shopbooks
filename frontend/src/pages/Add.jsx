import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Add = function () {
  const [books, setBooks] = useState({
    title: "",
    description: "",
    cover: "",
    price: null,
  });

  const navigate = useNavigate();

  const handleChange = function (event) {
    event.preventDefault();
    setBooks(function (prev) {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = async function (event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5000/books", books);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form>
      <h1>Add new Book</h1>
      <input
        type="text"
        placeholder="title..."
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="description ..."
        onChange={handleChange}
        name="description"
      />
      <input
        type="number"
        placeholder="price..."
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        placeholder="cover..."
        onChange={handleChange}
        name="cover"
      />
      <button onClick={handleSubmit}>Add Book</button>
    </form>
  );
};

export default Add;
