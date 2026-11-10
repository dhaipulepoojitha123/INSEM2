import { useState } from "react";

export default function AddBook({ onAddBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedAuthor = author.trim();
    const parsedYear = Number(year);

    if (!trimmedTitle || !trimmedAuthor || !parsedYear) return;

    onAddBook({
      title: trimmedTitle,
      author: trimmedAuthor,
      year: parsedYear,
    });

    setTitle("");
    setAuthor("");
    setYear("");
  }

  return (
    <form className="add-book-card" onSubmit={handleSubmit}>
      <div className="card-title">
        <div>
          <h2>Add a book</h2>
          <p>Enter the book details to add it to your collection.</p>
        </div>
      </div>

      <div className="form-fields">
        <label>
          Book title
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="e.g. The Great Gatsby"
            required
          />
        </label>

        <label>
          Author
          <input
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            placeholder="e.g. F. Scott Fitzgerald"
            required
          />
        </label>

        <label className="year-field">
          Year
          <input
            type="number"
            value={year}
            onChange={(event) => setYear(event.target.value)}
            placeholder="1925"
            min="1"
            required
          />
        </label>

        <button className="primary-button" type="submit">
          Add book
        </button>
      </div>
    </form>
  );
}