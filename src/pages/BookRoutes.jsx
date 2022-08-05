import { Routes, Route } from "react-router-dom";
import { BookLayout } from "../BookLayout";
import Book from "./Book";
import BookList from "./BookList";
import NewBook from "./NewBook";

export function BookRoutes() {
  return (
    <>
      <BookLayout />
      <Routes>
        <Route element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
      </Routes>
    </>
  );
}
