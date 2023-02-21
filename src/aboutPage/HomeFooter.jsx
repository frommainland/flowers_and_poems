import React, { useEffect, useRef } from 'react'
import './HomeFooter.scss'
import useWindowSize from '../helper/hooks/useWindowSize'
import { motion, useInView } from 'framer-motion'

const MyLink = ({ href, text }) => {
	return (
		<motion.a href={href} whileHover={{ color: '#2F2F30' }}>
			{text}
		</motion.a>
	)
}

const HomeFooter = ({ handleData }) => {
	const size = useWindowSize()
	const ref = useRef(null)
	const isInView = useInView(ref, { margin: '-40%' })

	useEffect(() => {
		handleData(isInView)
	}, [isInView])

	return (
		<div
			className="homefooter wrap"
			style={{
				minHeight: size.height,
			}}
			ref={ref}
		>
			<p style={{ fontSize: `calc(${size.width + size.height / 2}*.45/3/4*5px)` }}>
				花与诗
			</p>
			<p style={{ fontSize: `calc(${size.width + size.height / 2}*.45/3/4*5px)` }}>
				画和人
			</p>
			<div className="the-end">
				<p>二零二三 ◉ 二月</p>
				<p>
					<MyLink
						href="https://frommainland.netlify.app/"
						text="所有项目存档↗"
					/>
				</p>
			</div>
		</div>
	)
}

export default HomeFooter
