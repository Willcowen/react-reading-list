import { useState } from "react";

function AddBook(props) {
  /*
  1. Make a controlled form - store the values of the form in state.
  2. When the user submits the form - we want to save the book on server using POST.
  3. Update the list of books in state.
  4. RESET FORM STATE
  */

  const { setBooks, books } = props;

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("Horror");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title, author, genre);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        author: author,
        genre: genre,
      }),
    };

    fetch("http://localhost:4000/books", options)
      .then((res) => res.json())
      .then((newBook) => {
        console.log("book created:", newBook)
        setBooks([...books, newBook])
        setTitle('')
        setAuthor('')
        setGenre('')
      });
  };

  const onTitleChanged = (event) => {
    setTitle(event.target.value);
  };

  const onAuthorChanged = (event) => {
    setAuthor(event.target.value);
  };

  const onGenreChanged = (event) => {
    setGenre(event.target.value);
  };

  console.log(author, title, genre)

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Book</h2>

      <label>
        Title
        <input id="title" name="title" type="text" onChange={onTitleChanged} value={title} required />
      </label>

      <label>
        Author
        <input id="author" name="author" type="text" onChange={onAuthorChanged} value={author} required />
      </label>

      <label>
        Genre
        <select onChange={onGenreChanged} value={genre} id="title" name="title"  required >
          <option value='Horror'>Horror</option>
          <option value='Science Fiction'>Science Fiction</option>
          <option value ='Nonfiction'>Nonfiction</option>
          <option value ='History'>History</option>
          <option value ='Thriller'>Thriller</option>
        </select>
      </label>

      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default AddBook;
