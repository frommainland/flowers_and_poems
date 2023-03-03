import React from 'react'
import './CloseButton.scss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { smooth } from '../helper/easing'

const CloseButton = () => {
	return (
		<Link to="/">
			<motion.div className="flower-close-button">
				<motion.button
					layout
					whileHover={{
						width: 90,
						height: 90,
						transition: {
							ease: smooth,
						},
					}}
					whileTap={{ backgroundColor: '#BEBEBE', scale: 0.8 }}
				>
					<motion.div layout whileHover={{ top: -60 }}>
						<p>
							<motion.span layout>关</motion.span>
						</p>
						<p>
							<motion.span layout>
								<svg
									width="14"
									height="14"
									viewBox="0 0 14 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
										fill="black"
									/>
								</svg>
							</motion.span>
						</p>
					</motion.div>
				</motion.button>
			</motion.div>
		</Link>
	)
}

export default CloseButton
