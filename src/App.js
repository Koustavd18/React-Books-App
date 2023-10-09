import { useState } from "react";
import BookCreate from './components/BookCreate'
import BookList from "./components/BookList";

function App() {

    const [books, setBooks] = useState([]);

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
    };

    const createBook = (title) => {
        console.log('The title is ' + title);
        const updatedBooks = [
            ...books,
            {
                id:Math.round(Math.random()*1234),
                title
            }    
        ];
            
        setBooks(updatedBooks);

    };

    return (
        <div className="app">
            Number of Books = {books.length}
            < BookList books={books} onDelete={deleteBookById} />
            < BookCreate onCreate={createBook} />

        </div>
    )
}

export default App;