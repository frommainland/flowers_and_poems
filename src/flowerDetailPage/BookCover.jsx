import React from 'react'
import './BookCover.scss'
import image from '../flowerImgs/1.webp'
import placeHolderImage from '../flowerImgs/1tiny.jpg'
import ProgressiveImg from '../components/ProgressiveImg'

const BookCover = ({ src, placeholderSrc, alt }) => {
	return (
		<div className="bookcover">
			<ProgressiveImg
				src={src}
				placeholderSrc={placeholderSrc}
				alt={alt}
			/>
		</div>
	)
}

export default BookCover
