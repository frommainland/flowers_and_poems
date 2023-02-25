import React from 'react'
import './BookSpine.scss'

const BookSpine = ({ flowerNameCN, order, flowerNameEN }) => {
	return (
		<div className="bookspine">
			<div className="middle-line" />
			<div className="spine-content">
				<p className="cn-name">{flowerNameCN}</p>
				<p className="order">{order}</p>
				<p className="en-name">{flowerNameEN}</p>
			</div>
		</div>
	)
}

export default BookSpine
