import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'
import BookDetails from './BookDetails'

const BookList = () => {
	const { books } = useContext(BookContext)
	return books.length ? (
		<div className="book-list">
			<ul>
				{books.map(book => {
					return <BookDetails book={book} key={book.id} />
				})}
			</ul>
		</div>
	) : (
		<div className="empty">
			{' '}
			There Are No Books To Read... Hello Free Time!{' '}
		</div>
	)
}

export default BookList
