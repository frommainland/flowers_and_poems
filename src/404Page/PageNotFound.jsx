import React from 'react'
import './PageNotFound.scss'
import img from './page-not-found.webp'
import { motion, useAnimationControls } from 'framer-motion'

const MyLink = ({ href, text }) => {
	const controls = useAnimationControls()
	const textSplit = text.split('')

	const xBefore = 0
	const skewBefore = 0
	const xAfter = 3
	const SkewAfter = -12
	const container = {
		hidden: {
			transition: {
				staggerChildren: 0.04,
				staggerDirection: -1,
				ease: [0.4, 0, 0, 1],
				duration: 0.5,
			},
		},
		show: {
			transition: {
				staggerChildren: 0.04,
				ease: [0.4, 0, 0, 1],
				duration: 0.5,
			},
		},
	}
	const content = {
		hidden: {
			x: xBefore,
			skewX: skewBefore,
		},
		show: {
			x: xAfter,
			skewX: SkewAfter,
		},
	}

	return (
		<motion.a
			href={href}
			variants={container}
			initial="hidden"
			animate={controls}
			onHoverStart={() => controls.start('show')}
			onHoverEnd={() => controls.start('hidden')}
		>
			{textSplit.map((value, index) => {
				return (
					<motion.span
						id="link-text"
						key={index}
						variants={content}
						style={{ display: 'inline-block' }}
					>
						{value}
					</motion.span>
				)
			})}
		</motion.a>
	)
}

const PageNotFound = () => {
	return (
		<div className="page-not-found">
			<div className="content">
				<div>
					<p>404</p>
					<h2>徘徊浏览意何从，独见空白</h2>
					<MyLink href="/" text="返回首页 ↗"></MyLink>
				</div>
			</div>
			<div className="img">
				<img
					src={img}
					alt="Frost from Momoyogusa–Flowers of a Hundred Generations (1909) by Kamisaka Sekka."
				/>
			</div>
		</div>
	)
}

export default PageNotFound
