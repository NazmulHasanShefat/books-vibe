import React, { use } from "react";
import BookCard from "./BookCard";

const BooksCard = ({ booksPromise }) => {
    const books = use(booksPromise);
    console.log(books);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {books.map((book) => (
            <BookCard key={book.id} book={book} />
        ))}
    </div>
  );
};

export default BooksCard;
