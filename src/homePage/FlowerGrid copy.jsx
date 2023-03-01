import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import useRaf from '@rooks/use-raf'
import './FlowerGrid.scss'
import FlowerData from '../Data/FlowerData'

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

const Img = ({ src, mouseX, mouseY }) => {
	const ref = useRef(null)
	const [width, setWidth] = useState(0)
	const [height, setHeight] = useState(0)
	const [numbers, setNumbers] = useState([])

	useLayoutEffect(() => {
		setWidth(ref.current.clientWidth)
		setHeight(ref.current.clientHeight)
	}, [numbers])

	useEffect(() => {
		function handleWindowResize() {
			setWidth(ref.current.clientWidth)
			setHeight(ref.current.clientHeight)
		}

		window.addEventListener('resize', handleWindowResize)

		return () => {
			window.removeEventListener('resize', handleWindowResize)
		}
	}, [])

	const baseWidth = width
	//影响左右几块
	const radius = 4

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
		baseWidth * 1.5,
		baseWidth * 1.1,
		baseWidth * 0.7,
		baseWidth * 1.1,
		baseWidth * 1.5,
		baseWidth * 2,
	]

	const distance = useMotionValue(beyondTheDistanceLimit)
	const changeWidth = useSpring(
		useTransform(distance, distanceInput, widthOutput),
		{
			damping: 25,
			stiffness: 250,
		}
	)

	useRaf(() => {
		const el = ref.current
		const mouseXVal = mouseX.get()
		const mouseYVal = mouseY.get()

		if (el && mouseXVal && mouseYVal !== null) {
			const rect = el.getBoundingClientRect()
			const imgCenterX = rect.left + rect.width / 2
			const imgCenterY = rect.top + rect.height / 2
			const distanceXDelta = mouseXVal - imgCenterX
			const distanceDelta = Math.sqrt(
				Math.pow(mouseXVal - imgCenterX, 2) +
					Math.pow(mouseYVal - imgCenterY, 2)
			)
			distance.set(distanceDelta)
			// console.log(`${test} is ${distance.current}`)
			return
		}
		distance.set(beyondTheDistanceLimit)
	}, true)

	const [isHover, setIsHover] = useState(false)

	const show = {
		opacity: 1,
	}
	const hidden = {
		opacity: 0,
	}

	return (
		<div className="mask" ref={ref}>
			<motion.div
				className="scaled"
				style={{
					backgroundImage: `url(${src})`,
					width: changeWidth,
				}}
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			></motion.div>
			<motion.p
				id="flowerGridName"
				initial={hidden}
				animate={isHover ? show : hidden}
			>
				朱槿花
			</motion.p>
		</div>
	)
}

const FlowerGrid = () => {
	const mouseX = useMotionValue(null)
	const mouseY = useMotionValue(null)

	return (
		<div
			className="home flower-grid"
			onMouseMove={(event) => {
				mouseX.set(event.nativeEvent.x)
				mouseY.set(event.nativeEvent.y)
			}}
			onMouseLeave={() => {
				mouseX.set(null)
				mouseY.set(null)
			}}
		>
			{flowers.map((item, index) => {
				return (
					<Img
						src={item}
						key={index}
						test={index}
						mouseX={mouseX}
						mouseY={mouseY}
					/>
				)
			})}
		</div>
	)
}

export default FlowerGrid
