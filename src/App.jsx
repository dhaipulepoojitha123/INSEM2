import { useState } from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import "./App.css";

const initialBooks = [
  { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, available: true },
  { id: 2, title: "Pride and Prejudice", author: "Jane Austen", year: 1813, available: true },
  { id: 3, title: "1984", author: "George Orwell", year: 1949, available: false },
];

export default function App() {
  const [books, setBooks] = useState(initialBooks);
  const [search, setSearch] = useState("");

  function addBook(book) {
    setBooks((currentBooks) => [
      ...currentBooks,
      { ...book, id: Date.now(), available: true },
    ]);
  }

  function deleteBook(id) {
    setBooks((currentBooks) => currentBooks.filter((book) => book.id !== id));
  }

  const filteredBooks = books.filter((book) =>
    `${book.title} ${book.author}`.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className="app">
      <Navbar bookCount={books.length} />

      <section className="content">
        <header className="page-heading">
          <div>
            <p className="eyebrow">LIBRARY MANAGEMENT</p>
            <h1>Your books</h1>
            <p className="subtitle">Keep track of the books in your collection.</p>
          </div>
          <span className="book-count">{books.length} books</span>
        </header>

        <AddBook onAddBook={addBook} />

        <section className="book-section">
          <div className="section-heading">
            <h2>Book collection</h2>
            <input
              className="search-input"
              type="search"
              placeholder="Search title or author..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search books"
            />
          </div>

          <BookList books={filteredBooks} onDeleteBook={deleteBook} />
        </section>
      </section>
    </main>
  );
}