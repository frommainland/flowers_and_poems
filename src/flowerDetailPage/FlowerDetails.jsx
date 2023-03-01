import React from 'react'
import BookCover from './BookCover'
import BookSpine from './BookSpine'
import BookContent from './BookContent'
import { FlowerData } from '../Data/FlowerData'
import { motion, AnimatePresence, easeOut } from 'framer-motion'
import { smooth } from '../helper/easing'
import useWindowSize from '../helper/hooks/useWindowSize'
import { useEffect } from 'react'
import { useSearchParams, useParams } from 'react-router-dom'

import { atom, useAtom } from 'jotai'
export const pageAtom = atom(0)
export const directionAtom = atom(0)

const FlowerDetails = ({ match }) => {
	const [searchParams] = useSearchParams()
	const slug = searchParams.get('name')

    
	const [page, setPage] = useAtom(pageAtom)
	const [direction] = useAtom(directionAtom)

	const result = FlowerData.map((item, index) => {
		if (item.flowerNameEN === slug) {
			return index
		}
	})

    // console.log(result.filter(Boolean));

	useEffect(() => {
		setPage(result.filter(Boolean))
	}, [slug])

	const size = useWindowSize()

	const divVariants = {
		initial:
			direction === 1
				? {
						y: size.height,
						scale: 0.7,
						zIndex: 0,
						opacity: 1,
						clipPath: 'inset(0% 5% 0% 5% round 20em)',
				  }
				: {
						zIndex: 0,
						opacity: 0.5,
						scale: 0.95,
						clipPath: 'inset(5% 5% 5% 5% round 4em)',
				  },
		show:
			direction === 1
				? {
						opacity: 1,
						zIndex: 1,
						y: 0,
						scale: 1,
						clipPath: 'inset(0% 0% 0% 0% round 0em)',
						transition: {
							duration: 0.5,
							delay: 0.1,
							ease: easeOut,
						},
				  }
				: {
						opacity: 1,
						zIndex: 0,
						y: 0,
						scale: 1,
						clipPath: 'inset(0% 0% 0% 0% round 0em)',
						transition: {
							duration: 0.5,
							delay: 0.3,
							ease: smooth,
						},
				  },
		exit:
			direction === 1
				? {
						zIndex: 0,
						opacity: 0.5,
						scale: 0.95,
						clipPath: 'inset(5% 5% 5% 5% round 4em)',
				  }
				: {
						y: size.height,
						scale: 1,
						zIndex: 1,
						opacity: 1,
						clipPath: 'inset(0% 5% 0% 5% round 4em)',
						transition: {
							duration: 0.5,
						},
				  },
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
						duration: 0.5,
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
