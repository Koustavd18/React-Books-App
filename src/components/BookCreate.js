import { useState, useContext } from 'react';
import BooksContext from '../context/books';

function BookCreate() {

    const [title,setTitle] = useState('');

    const {createBook} = useContext(BooksContext);

    const handleChange = (e) =>{
        setTitle(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        createBook(title);
        setTitle('');
    }


    return (
        <div className='book-create'>
            <form onSubmit={handleSubmit}>
                <h2>Add a Book</h2>
                <label htmlFor='input' style={{fontSize : 1.5 +'rem'}}>Title </label>
                <input className='input' value={title} onChange={handleChange} />
                <button className='button'>Create Book</button>
            </form>
        </div>
    );
}


export default BookCreate;