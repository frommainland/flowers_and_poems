import React from 'react'
import {
	motion,
	useScroll,
	useTransform,
	useMotionTemplate,
	cubicBezier,
} from 'framer-motion'
import { useState } from 'react'
import useWindowSize from '../helper/hooks/useWindowSize'
import './AboutButton.scss'

export const AboutButton = () => {
	const size = useWindowSize()
	const { scrollY } = useScroll()

	const moveY = useTransform(
		scrollY,
		[0, size.height * 0.75],
		[size.height - 80, 40],
		{ ease: cubicBezier(0.17, 0.67, 0.83, 0.67) }
	)

	const moveYTemplate = useMotionTemplate`${moveY}px`

	const aboutText = '关于网站'
	const about = aboutText.split('')

	const [hover, setHover] = useState(false)
	const skwewDegBefore = 0
	const moveXBefore = 0

	const skewDegAfter = -12
	const moveXAfter = 3

	const container = {
		hidden: {
			transition: {
				staggerChildren: 0.07,
				staggerDirection: -1,
				ease: [0.4, 0, 0, 1],
				duration: 1,
			},
		},
		show: {
			transition: {
				staggerChildren: 0.07,
				ease: [0.4, 0, 0, 1],
				duration: 1,
			},
		},
	}

	const items = {
		hidden: {
			skewX: skwewDegBefore,
			x: moveXBefore,
		},
		show: {
			skewX: skewDegAfter,
			x: moveXAfter,
		},
	}

	return (
		<motion.div
			className="about-us-button"
			style={{ right: 40, top: moveYTemplate }}
		>
			<span>
				<svg
					width="24"
					height="25"
					viewBox="0 0 24 25"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M1.4604 2.46146C3.40684 0.510508 6.56249 0.511137 8.50872 2.46188C10.0557 4.01242 10.2585 5.9623 10.4767 8.06036C10.6212 9.44912 10.7724 10.9028 11.3246 12.3486C9.88197 11.7948 8.43117 11.6433 7.04515 11.4985C4.95195 11.2799 3.00652 11.0767 1.46019 9.52677C-0.486085 7.57598 -0.485613 4.412 1.4604 2.46146ZM22.5401 23.5353C20.5937 25.4863 17.438 25.4857 15.4918 23.5349C13.9449 21.9844 13.742 20.0345 13.5238 17.9365C13.3794 16.5477 13.2282 15.094 12.6759 13.6482C14.1185 14.202 15.5694 14.3535 16.9554 14.4983C19.0486 14.7169 20.994 14.9201 22.5403 16.47C24.4866 18.4208 24.4861 21.5848 22.5401 23.5353ZM22.5401 9.52694C24.4863 7.57619 24.4869 4.41321 22.5405 2.46226C20.5945 0.511721 17.4378 0.511248 15.4915 2.46205C13.9452 4.01197 13.7425 5.96191 13.5244 8.05997C13.3799 9.4492 13.2287 10.9034 12.6763 12.3494C14.1187 11.7958 15.569 11.6443 16.9546 11.4995C19.0478 11.2808 20.9931 11.0775 22.5401 9.52694ZM1.45954 23.5352C-0.486896 21.5842 -0.486269 18.4213 1.45996 16.4705C3.0069 14.92 4.95226 14.7167 7.04546 14.498C8.43101 14.3532 9.88133 14.2016 11.3238 13.6481C10.7713 15.0941 10.6201 16.5483 10.4757 17.9375C10.2575 20.0356 10.0548 21.9855 8.50848 23.5354C6.5622 25.4862 3.40556 25.4857 1.45954 23.5352Z"
						fill="#2F2F30"
					/>
				</svg>
			</span>
			<motion.div
				variants={container}
				initial="hidden"
				animate={hover ? 'show' : 'hidden'}
				onHoverStart={() => setHover(true)}
				onHoverEnd={() => setHover(false)}
			>
				{about.map((item, index) => {
					return (
						<motion.p key={index} variants={items} className="text">
							{item}
						</motion.p>
					)
				})}
			</motion.div>
		</motion.div>
	)
}
