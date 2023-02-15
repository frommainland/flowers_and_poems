import React, { useEffect } from 'react'
import './FlowerGrid.scss'
import flower11 from './flowerTest/11.jpg'
import flower12 from './flowerTest/12.jpg'
import flower13 from './flowerTest/13.jpg'
import flower14 from './flowerTest/14.jpg'

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
				>
					{/* <img src={flower11} alt="flower" /> */}
				</div>
			</div>
			<div className="mask">
				<div className="scaled" style={{ backgroundImage: `url(${flower12})` }}>
					{/* <img src={flower12} alt="flower" /> */}
				</div>
			</div>
			<div className="mask">
				<div className="scaled" style={{ backgroundImage: `url(${flower13})` }}>
					{/* <img src={flower13} alt="flower" /> */}
				</div>
			</div>
			<div className="mask">
				<div className="scaled" style={{ backgroundImage: `url(${flower14})` }}>
					{/* <img src={flower14} alt="flower" /> */}
				</div>
			</div>
		</div>
	)
}

export default FlowerGrid
