import React from 'react'
import BookCover from './BookCover'
import BookSpine from './BookSpine'
import BookContent from './BookContent'

const FlowerDetails = () => {
	return (
		<div style={{display:'flex'}}>
			<BookCover />
			<BookSpine />
			<BookContent />
		</div>
	)
}

export default FlowerDetails
