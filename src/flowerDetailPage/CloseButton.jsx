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
									width="15"
									height="16"
									viewBox="0 0 15 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M14.4905 3.05621C15.0738 2.46798 15.0698 1.51824 14.4816 0.934911C13.8934 0.351581 12.9436 0.355555 12.3603 0.943787L7.47539 5.86975L2.59048 0.943787C2.00715 0.355555 1.05741 0.351581 0.469178 0.934911C-0.119055 1.51824 -0.123028 2.46798 0.460302 3.05621L5.36289 8L0.460302 12.9438C-0.123028 13.532 -0.119055 14.4818 0.469178 15.0651C1.05741 15.6484 2.00715 15.6444 2.59048 15.0562L7.47539 10.1303L12.3603 15.0562C12.9436 15.6444 13.8934 15.6484 14.4816 15.0651C15.0698 14.4818 15.0738 13.532 14.4905 12.9438L9.58789 8L14.4905 3.05621Z"
										fill="#838383"
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
