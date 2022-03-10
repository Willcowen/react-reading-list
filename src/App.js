import { useEffect, useState } from 'react';
import {Route, Routes} from 'react-router-dom'
import { Link } from "react-router-dom";
import './App.css';

import BooksList from './components/BooksList'
import AddBook from './components/AddBook'
import ViewBook from './components/ViewBook'

function App() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/books')
    .then(res => res.json())
    .then(books => {
      console.log(books)
      setBooks(books)
    })
  }, [])

  return (
    <div className="App">
      <h1>📚 Reading List</h1>
      <nav>
        <ul>
          <li><Link to="/">Books</Link></li>
          <li><Link to="/books/new">Add Book</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<BooksList books={books}/>}/>
        <Route path='/books/new' element={<AddBook books={books} setBooks={setBooks}/>}/>
        <Route path='/books/:id' element={<ViewBook />}/>
      </Routes>
    </div>
  );
}

export default App;
