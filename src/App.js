import { useState, useEffect } from "react";
import axios from "axios";
import BookCreate from './components/BookCreate'
import BookList from "./components/BookList";

function App() {

    const [books, setBooks] = useState([]);

    const fetchBooks = async() => {
        const response = await axios.get("http://localhost:3001/books");
        console.clear();
        setBooks(response.data);
    }

    useEffect(()=>{
        fetchBooks();
    },[]);

    const editBooksById = async(id,newTitle) => {

        const response = await axios.put(`http://localhost:3001/books/${id}`,{
            title: newTitle,
        });

        const updatedBooks = books.map((book)=>{
            if(book.id === id){
                return {...book, ...response.data};
            }
            return book;
        });

        setBooks(updatedBooks);
    }

    const deleteBookById = async(id) => {

        await axios.delete(`http://localhost:3001/books/${id}`);

        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
    };

    const createBook = async(title) => {
        const response = await axios.post("http://localhost:3001/books",{
            title,
        });

        const updatedBooks = [...books,response.data,];
            
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