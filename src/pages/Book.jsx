import React from "react";
import { Link } from "react-router-dom";

const Book = () => {
  return (
    <>
      <div>Book</div>
      <Link to="/book/1">Book 1</Link>
      <Link to="/book/2">Book 2</Link>
    </>
  );
};

export default Book;
