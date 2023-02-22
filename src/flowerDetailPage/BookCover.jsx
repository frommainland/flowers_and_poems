import React from 'react'
import './BookCover.scss'
// import flower1 from './flowerTest/1.jpg'
import flower1 from '../homePage/flowerTest/1.jpg'

const BookCover = () => {
	return (
		<div className="bookcover">
			<img src={flower1} alt="花的名称 从props中取" />
		</div>
	)
}

export default BookCover
