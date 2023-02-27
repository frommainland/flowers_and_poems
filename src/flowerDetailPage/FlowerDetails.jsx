import React from 'react'
import BookCover from './BookCover'
import BookSpine from './BookSpine'
import BookContent from './BookContent'
import { FlowerData } from '../Data/FlowerData'
import { motion, AnimatePresence } from 'framer-motion'
import easing, { smooth } from '../helper/easing'
import useWindowSize from '../helper/hooks/useWindowSize'

import { atom, useAtom } from 'jotai'
export const pageAtom = atom(0)
export const directionAtom = atom(0)

const FlowerDetails = () => {
	const [page] = useAtom(pageAtom)
	const [direction] = useAtom(directionAtom)

	const size = useWindowSize()

	const divVariants = {
		initial: { y: size.height, scale: 0.9, opacity: 0.75, zIndex: 0 },
		show: {
			zIndex: 1,
			y: 0,
			scale: 1,
			opacity: 1,
			transition: {
				duration: 2,
				delay: 2,
				ease: smooth,
			},
		},
		exit: { zIndex: 0, y: size.height, scale: 0.9, opacity: 0.75 },
	}
	return (
		<motion.div
			style={{
				height: '100vh',
				width: '100vw',
				overflow: 'hidden',
				position: 'relative',
				backgroundColor: 'black',
			}}
		>
			<AnimatePresence custom={direction} initial={false}>
				<motion.div
					style={{
						display: 'flex',
						overflow: 'hidden',
						position: 'absolute',
						y: 0,
					}}
					custom={direction}
					key={page}
					variants={divVariants}
					initial="initial"
					animate="show"
					exit="exit"
					transition={{
						ease: smooth,
						duration: 5,
					}}
				>
					<BookCover
						src={FlowerData[page].imgWebp}
						placeholderSrc={FlowerData[page].imgTiny}
						alt={FlowerData[page].flowerNameCN}
					/>
					<BookSpine
						flowerNameCN={FlowerData[page].flowerNameCN}
						order={FlowerData[page].order}
						flowerNameEN={FlowerData[page].flowerNameEN}
					/>
					<BookContent
						poem={FlowerData[page].poem}
						author={FlowerData[page].author}
						gradient1={FlowerData[page].gradient1}
						gradient2={FlowerData[page].gradient2}
					/>
				</motion.div>
			</AnimatePresence>
		</motion.div>
	)
}

export default FlowerDetails
