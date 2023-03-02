import React from 'react'
import './BookContent.scss'
import { FlowerData } from '../Data/FlowerData'
import { useAtom } from 'jotai'
import { pageAtom, directionAtom } from '../flowerDetailPage/FlowerDetails'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { smooth } from '../helper/easing'

const flowerNameEN = FlowerData.map((v) => v.flowerNameEN)

const BookContent = ({ poem, author, gradient1, gradient2 }) => {
	const [page, setPage] = useAtom(pageAtom)
	const [direction, setDirection] = useAtom(directionAtom)
	const handleToptClick = () => {
		setPage(page === 0 ? FlowerData.length - 1 : page - 1)
		setDirection(-1)
	}
	const handleDownClick = () => {
		setPage(page === FlowerData.length - 1 ? 0 : page + 1)
		setDirection(1)
	}

	const poemSplit = poem.split('，')
	return (
		<div className="bookcontent">
			<div
				className="bg-gradient"
				style={{
					background: `linear-gradient(270deg, ${gradient1} 0%, ${gradient2} 100%)`,
				}}
			></div>
			<div className="poem">
				{poemSplit.map((v, i) => {
					return <p key={i}>{v}</p>
				})}
				<p className="author">
					<svg
						width="100%"
						height="20px"
						viewBox="0 0 11 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M9.5 5C9.5 7.20914 7.70914 9 5.5 9C3.29086 9 1.5 7.20914 1.5 5C1.5 2.79086 3.29086 1 5.5 1C7.70914 1 9.5 2.79086 9.5 5ZM10.5 5C10.5 7.76142 8.26142 10 5.5 10C2.73858 10 0.5 7.76142 0.5 5C0.5 2.23858 2.73858 0 5.5 0C8.26142 0 10.5 2.23858 10.5 5ZM5.5 8C7.15685 8 8.5 6.65685 8.5 5C8.5 3.34315 7.15685 2 5.5 2C3.84315 2 2.5 3.34315 2.5 5C2.5 6.65685 3.84315 8 5.5 8Z"
							fill="#2F2F30"
						/>
					</svg>
					<span>{author}</span>
				</p>
			</div>

			<Link
				to={{
					pathname: '/flower&poem',
					search: `?name=${
						flowerNameEN[
							page === 0 ? FlowerData.length - 1 : page - 1
						]
					}`,
				}}
			>
				<div className="button-wrap">
					<motion.button
						layout
						onClick={handleToptClick}
						whileHover={{
							width: 90,
							height: 90,
						}}
					>
						<motion.span layout>↑</motion.span>
					</motion.button>
				</div>
			</Link>
			<Link
				to={{
					pathname: '/flower&poem',
					search: `?name=${
						flowerNameEN[
							page === FlowerData.length - 1 ? 0 : page + 1
						]
					}`,
				}}
			>
				<div className="button-wrap buttonDown">
					<motion.button
						layout
						onClick={handleDownClick}
						whileHover={{
							width: 90,
							height: 90,
							transition: {
								ease: smooth,
							},
						}}
					>
						<motion.span layout>↓</motion.span>
					</motion.button>
				</div>
			</Link>
		</div>
	)
}

export default BookContent
