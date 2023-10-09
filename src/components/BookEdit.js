import { useState } from 'react';

function BookEdit({book}) {

    const [title, setTitle] = useState(book.title);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`the new title is ${title}`);
    }

    return (
        <form className='book-edit' onSubmit={handleSubmit}>
            <label htmlFor='title'>Title</label>
            <input className='input' name='title' type='text' value={title} onChange={handleTitleChange} />
            <button className='button is-primary' >Save</button>
        </form>
    );
}


export default BookEdit;