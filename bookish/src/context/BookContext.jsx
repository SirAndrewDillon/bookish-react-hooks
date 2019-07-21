import React, { createContext, useState } from 'react'
import uuid from 'uuid/v1'

export const BookContext = createContext()

const BookContextProvider = props => {
	const [books, setBooks] = useState([
		{ title: 'Night Passage', author: 'Robert B. Parker', id: 1 },
		{ title: 'The Judas Goat', author: 'Robert B. Parker', id: 2 },
		{ title: 'StoneCold', author: 'Robert B. Parker', id: 3 },
		{ title: 'God Save The Child', author: 'Robert B. Parker', id: 4 },
		{ title: 'Hundred Dollar Baby', author: 'Robert B. Parker', id: 5 },
		{ title: 'Walking Shadow', author: 'Robert B. Parker', id: 6 }
	])
	const addBook = (title, author) => {
		setBooks([...books, { title: title, author: author, id: uuid() }])
	}
	const removeBook = id => {
		setBooks(books.filter(book => book.id !== id))
	}
	return (
		<BookContext.Provider value={{ books, addBook, removeBook }}>
			{props.children}
		</BookContext.Provider>
	)
}

export default BookContextProvider
