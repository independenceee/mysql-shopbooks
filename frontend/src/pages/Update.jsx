import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
const Update = function () {
  const [books, setBooks] = useState({
    title: "",
    description: "",
    cover: "",
    price: null,
  });
  const navigate = useNavigate();
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];

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
      await axios.put(`http://localhost:5000/books/${bookId}`, books);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form>
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
      <button onClick={handleSubmit}>Update</button>
    </form>
  );
};

export default Update;
