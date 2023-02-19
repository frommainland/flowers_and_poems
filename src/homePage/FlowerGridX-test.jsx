import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import useRaf from '@rooks/use-raf'
import './FlowerGrid.scss'
import flower1 from './flowerTest/1.jpg'
import flower2 from './flowerTest/2.jpg'
import flower3 from './flowerTest/3.jpg'
import flower4 from './flowerTest/4.jpg'
import flower5 from './flowerTest/5.jpg'
import flower6 from './flowerTest/6.jpg'
import flower7 from './flowerTest/7.jpg'
import flower8 from './flowerTest/8.jpg'
import flower9 from './flowerTest/9.jpg'
import flower10 from './flowerTest/10.jpg'
import flower11 from './flowerTest/11.jpg'
import flower12 from './flowerTest/12.jpg'
import flower13 from './flowerTest/13.jpg'
import flower14 from './flowerTest/14.jpg'

const flowers = [
	flower1,
	flower2,
	flower3,
	flower4,
	flower5,
	flower6,
	flower7,
	flower8,
	flower9,
	flower10,
	flower11,
	flower12,
	flower13,
	flower14,
]

const baseWidth = 390
//影响左右几块
const radius = 6

const distanceLimit = baseWidth * radius
const beyondTheDistanceLimit = distanceLimit + 1
const distanceInput = [
	-distanceLimit,
	-distanceLimit / 1.25,
	-distanceLimit / 2,
	0,
	distanceLimit / 2,
	distanceLimit / 1.25,
	distanceLimit,
]
const widthOutput = [
	baseWidth * 2,
	baseWidth * 1.7,
	baseWidth * 1.3,
	baseWidth ,
	baseWidth * 1.3,
	baseWidth * 1.7,
	baseWidth * 2,
]

const Img = ({ src, mouseX, index }) => {
	const distance = useMotionValue(beyondTheDistanceLimit)
	const width = useSpring(
		useTransform(distance, distanceInput, widthOutput),
		{
			damping: 25,
			stiffness: 250,
		}
	)
	const ref = useRef(null)
	useRaf(() => {
		const el = ref.current
		const mouseXVal = mouseX.get()

		if (el && mouseXVal !== null) {
			const rect = el.getBoundingClientRect()
			const imgCenterX = rect.left + rect.width / 2
			const distanceXDelta = mouseXVal - imgCenterX
			distance.set(distanceXDelta)
			console.log(`${index} is ${distance.current}`)
			return
		}
		distance.set(beyondTheDistanceLimit)
	}, true)
	return (
		<div className="mask" ref={ref}>
			<motion.div
				className="scaled"
				style={{
					backgroundImage: `url(${src})`,
					width: width,
				}}
			></motion.div>
			<h1 style={{ position: 'absolute' }}>{index}</h1>
		</div>
	)
}

const FlowerGrid = () => {
	const mouseX = useMotionValue(null)

	return (
		<div
			className="home flower-grid"
			onMouseMove={(event) => {
				mouseX.set(event.nativeEvent.x)
			}}
			onMouseLeave={() => mouseX.set(null)}
		>
			{flowers.map((item, index) => {
				return <Img src={item} index={index} mouseX={mouseX} />
			})}
		</div>
	)
}

export default FlowerGrid
