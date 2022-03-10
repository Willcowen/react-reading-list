import { Link } from "react-router-dom";

function BooksList(props) {
  const { books } = props

  return (
    <>
      <h2>Books</h2>
      <ul className="books-list">
        {books.map(book => {
          return <li className="book" key={book.id}>
            <h3>{book.title}</h3>
            <p><Link to={`/books/${book.id}`}>View</Link></p>
          </li>
        })}
      </ul>
    </>
  )
}

export default BooksList