import React from 'react'
import BookCover from './BookCover'
import BookSpine from './BookSpine'
import BookContent from './BookContent'
import { FlowerData } from '../Data/FlowerData'
import { motion, AnimatePresence } from 'framer-motion'
import easing, { smooth } from '../helper/easing'

import { atom, useAtom } from 'jotai'
export const pageAtom = atom(0)
export const directionAtom = atom(0)

const FlowerDetails = () => {
	const [page] = useAtom(pageAtom)
	const [direction] = useAtom(directionAtom)

	const divVariants = {
		initial: { x: direction > 0 ? 1000 : -1000, opacity: 0, y: 600 },
		show: { zIndex: 1, x: 0, opacity: 1, y: 0 },
		exit: {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
            y: 600
		},
	}
	return (
		<motion.div
			style={{
				height: '100vh',
				width: '100vw',
				// overflow: 'hidden',
				position: 'relative',
				backgroundColor: 'black',
			}}
		>
			<AnimatePresence custom={direction} initial={false}>
				<motion.div
					style={{
						display: 'flex',
						overflow: 'hidden',
						position: 'relative',
					}}
					custom={direction}
					key={page}
					variants={divVariants}
					initial="initial"
					animate="show"
					exit="exit"
					transition={{
						ease: smooth,
						duration: 1,
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
