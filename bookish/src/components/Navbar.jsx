import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'

const Navbar = () => {
	const { books } = useContext(BookContext)
	return (
		<div className="navbar">
			<h1>Andy's Reading List</h1>
			<p> Currently you have {books.length} books to read through...</p>
		</div>
	)
}

export default Navbar
