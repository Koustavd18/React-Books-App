import { useState } from "react";
import BookCreate from './components/BookCreate'
import BookList from "./components/BookList";

function App() {

    const [books, setBooks] = useState([]);

    const editBooksById = (id,newTitle) => {
        const updatedBooks = books.map((book)=>{
            if(book.id === id){
                return {...book, title: newTitle};
            }
            return book;
        });
        setBooks(updatedBooks);
    }

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
            <h1>Reading List</h1>
            <h1 style={{fontSize: 1.4+'rem'}}>Number of Books = {books.length}</h1>
            < BookList books={books} onDelete={deleteBookById} onEdit={editBooksById} />
            < BookCreate onCreate={createBook} />

        </div>
    )
}

export default App;