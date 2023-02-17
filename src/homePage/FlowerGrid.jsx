import React, { useEffect } from 'react'
import './FlowerGrid.scss'
import flower11 from './flowerTest/11.jpg'
import flower12 from './flowerTest/12.jpg'
import flower13 from './flowerTest/13.jpg'
import flower14 from './flowerTest/14.jpg'
import flower1 from './flowerTest/1.jpg'
import flower2 from './flowerTest/2.jpg'
import flower3 from './flowerTest/3.jpg'
import flower4 from './flowerTest/4.jpg'

import { useMotionValue } from 'framer-motion'

const FlowerGrid = () => {
	const mouseX = useMotionValue(null)
	return (
		<div
			className="home flower-grid"
			onMouseMove={(event) => {
				mouseX.set(event.nativeEvent.x)
				console.log(mouseX.current)
			}}
			onMouseLeave={() => mouseX.set(null)}
		>
			<div className="mask">
				<div
					className="scaled"
					style={{ backgroundImage: `url(${flower11})` }}
				></div>
			</div>
			<div className="mask">
				<div
					className="scaled"
					style={{ backgroundImage: `url(${flower12})` }}
				></div>
			</div>
			<div className="mask">
				<div
					className="scaled"
					style={{ backgroundImage: `url(${flower13})` }}
				></div>
			</div>
			<div className="mask">
				<div
					className="scaled"
					style={{ backgroundImage: `url(${flower14})` }}
				></div>
			</div>
			<div className="mask">
				<div
					className="scaled"
					style={{ backgroundImage: `url(${flower1})` }}
				></div>
			</div>
			<div className="mask">
				<div
					className="scaled"
					style={{ backgroundImage: `url(${flower2})` }}
				></div>
			</div>
			<div className="mask">
				<div
					className="scaled"
					style={{ backgroundImage: `url(${flower3})` }}
				></div>
			</div>
			<div className="mask">
				<div
					className="scaled"
					style={{ backgroundImage: `url(${flower4})` }}
				></div>
			</div>
		</div>
	)
}

export default FlowerGrid
