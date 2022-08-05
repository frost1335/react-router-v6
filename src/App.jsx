import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Book from "./pages/Book";
import BookList from "./pages/BookList";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Bookasdsaasdfsadf />} />
      </Routes>
    </>
  );
};

export default App;
