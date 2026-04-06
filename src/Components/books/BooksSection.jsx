import React, { Suspense } from "react";
import BooksCard from "./BooksCard";

const BooksSection = () => {
    const booksPromise = fetch("/booksData.json").then((res) => res.json());
  return (
    <div>
      <h1>Books</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <BooksCard booksPromise={booksPromise}/>
      </Suspense>
     
    </div>
  );
};

export default BooksSection;
