import React from 'react'
import Opening from './Opening'
import FlowerGrid from './FlowerGrid'
import HomeFooter from '../components/HomeFooter'
import { AboutButton } from './AboutButton'
import { motion, AnimatePresence } from 'framer-motion'

export const HomePage = () => {
	const transition = { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }
	return (
		<motion.div
			style={{ position: 'relative' }}
			exit={{
				scale: 0.1,
			}}
			transition={transition}
		>
			<Opening />
			<FlowerGrid />
			<HomeFooter />
			<AboutButton />
		</motion.div>
	)
}
