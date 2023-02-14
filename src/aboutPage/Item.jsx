import React from 'react'
import './Item.scss'

const Item = ({ children }) => {
	return (
		<div className="about-us item-wrap">
			<p>01</p>
			{children}
		</div>
	)
}

export default Item
