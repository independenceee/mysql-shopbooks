import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = function () {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async function () {
      try {
        const response = await axios.get("http://localhost:5000/books");
        setBooks(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async function (id) {
    try {
      await axios.delete(`http://localhost:5000/books/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Independence Shop Book</h1>
      <div>
        {books.map(function (book) {
          return (
            <div key={book.id}>
              <div>{book.title}</div>
              <button onClick={() => handleDelete(book.id)}>Delete</button>

              <button>
                <Link to={`/update/${book.id}`}>Update</Link>
              </button>
            </div>
          );
        })}
      </div>
      <button>
        <Link to="/add">Add books</Link>
      </button>
    </div>
  );
};

export default Home;
