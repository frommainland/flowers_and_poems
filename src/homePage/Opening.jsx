import React from 'react'
import './Opening.scss'
import useWindowSize from '../helper/hooks/useWindowSize'
import {
	motion,
	useScroll,
	useSpring,
	useTransform,
	useMotionTemplate,
} from 'framer-motion'
import { useAtom } from 'jotai'
import { isHomeFooterInViewAtom } from '../App'

const Opening = () => {
	const [isHomeFooterInView, setIsHomeFooterInView] = useAtom(
		isHomeFooterInViewAtom
	)
	// console.log(isHomeFooterInView)

	const size = useWindowSize()
	const { scrollY } = useScroll()

	const scrollInput = [0, size.height]
	const sizeOutput = [
		((((size.width + size.height) / 2) * 0.45) / 3 / 4) * 5,
		32,
	]

	const changeSize = useSpring(
		useTransform(scrollY, scrollInput, sizeOutput),
		{
			damping: 25,
			stiffness: 250,
		}
	)

	const changeSizeTemplate = useMotionTemplate`${changeSize}px`

	const container = {
		hidden: {},
		show: {
			transition: {
				staggerChildren: 0.2,
				ease: [0, 0.21, 0, 1],
				// ease: [0.4, 0, 0, 1],
				duration: 0.3,
				// delayChildren: 1,
			},
		},
	}

	const items = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
		},
	}

	const title1 = '花与诗9画和人'
	const title1Split = title1.split('')

	return (
		<div
			className="homepage opening"
			style={{
				minHeight: size.height,
			}}
		>
			<div className="logo-wrap">
				<motion.p
					style={{
						fontSize: changeSizeTemplate,
					}}
					variants={container}
					initial="hidden"
					animate={isHomeFooterInView ? 'hidden' : 'show'}
				>
					{title1Split.map((value, index) => {
						return value !== '9' ? (
							<motion.span key={index} variants={items}>
								{value}
							</motion.span>
						) : (
							<br key={'break'} />
						)
					})}
				</motion.p>
			</div>
		</div>
	)
}

export default Opening
