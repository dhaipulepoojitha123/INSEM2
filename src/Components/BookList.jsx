export default function BookList({ books, onDeleteBook }) {
  if (books.length === 0) {
    return <p className="empty-state">No books found. Try another search or add a book.</p>;
  }

  return (
    <div className="book-grid">
      {books.map((book) => (
        <article className="book-card" key={book.id}>
          <div className="book-cover" aria-hidden="true">
            {book.title.charAt(0).toUpperCase()}
          </div>

          <div className="book-details">
            <div className="book-title-row">
              <h3>{book.title}</h3>
              <span className={`status ${book.available ? "available" : "checked-out"}`}>
                {book.available ? "Available" : "Checked out"}
              </span>
            </div>
            <p className="book-author">by {book.author}</p>
            <p className="book-year">Published {book.year}</p>
          </div>

          <button
            className="delete-button"
            type="button"
            onClick={() => onDeleteBook(book.id)}
            aria-label={`Delete ${book.title}`}
          >
            Delete
          </button>
        </article>
      ))}
    </div>
  );
}