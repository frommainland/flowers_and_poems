import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import useRaf from '@rooks/use-raf'
import './FlowerGrid.scss'
import { FlowerData } from '../Data/FlowerData'
import { Link } from 'react-router-dom'

const flowerImgWebp = FlowerData.map((v) => v.imgWebpSmall)
const flowerName = FlowerData.map((v) => v.flowerNameCN)
const flowerNameEN = FlowerData.map((v) => v.flowerNameEN)

const Img = ({ src, mouseX, mouseY, index }) => {
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
				{flowerName[index]}
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
			{flowerImgWebp.map((item, index) => {
				return (
					<Link
						to={{
							pathname: '/flower&poem',
							search: `?name=${flowerNameEN[index]}`, // inject code value into template
						}}
						key={index}
					>
						<Img
							src={item}
							index={index}
							mouseX={mouseX}
							mouseY={mouseY}
						/>
					</Link>
				)
			})}
		</div>
	)
}

export default FlowerGrid
