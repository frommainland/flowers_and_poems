import React, { useState } from 'react'
import Nav from './Nav'
import './AboutPage.scss'
import { motion, useAnimationControls } from 'framer-motion'
import HomeFooter from './HomeFooter'

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
				staggerChildren: 0.02,
				staggerDirection: -1,
				ease: [0.4, 0, 0, 1],
				duration: 0.5,
			},
		},
		show: {
			transition: {
				staggerChildren: 0.02,
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

const AboutPage = () => {
	const [data, setData] = useState(false)
	const handleData = (newData) => {
		setData(newData)
	}
	return (
		<div className="about-us-wrap">
			<Nav data={data}></Nav>
			<div className="gradient"></div>
			{/* content 01 */}
			<div className="about-us item-wrap">
				{/* <p>01</p> */}
				<div className="content">
					<p className="subtitle">想法</p>
					<div className="body">
						<p>
							这是2023年学习react做的第一个项目。延续了去年的想法，在只有一个简单的列表信息时，怎么让设计符合内容并易于记忆。
						</p>
						<p>
							网站共有16种花以及对应的古诗，是对以下网站的remix:&nbsp;
							<MyLink
								href="https://oddityfragrance.com/"
								text="oddity ↗"
							/>
							&nbsp;
							<MyLink
								href="https://replica.studio/"
								text="replica ↗"
							/>
						</p>
					</div>
				</div>
			</div>
			{/* content 02 */}
			<div className="about-us item-wrap">
				{/* <p>02</p> */}
				<div className="content">
					<p className="subtitle">插画</p>
					<div className="body">
						<p>
							Rhododendron rollissonii from Edwards’s Botanical
							Register (1829—1847) Sydenham Edwards, John Lindley,
							and James Ridgway.
						</p>
						<p>
							Original from the Biodiversity Heritage Library.
							Digitally enhanced by&nbsp;
							<MyLink
								href="https://www.rawpixel.com/"
								text="rawpixel ↗"
							/>
						</p>
					</div>

					{/* <p className="subtitle">诗词</p>
					<div className="body">
						<p>杜甫，苏轼，礼拜，白居易，屈原，陆游，李贺</p>
					</div> */}

					<div className="multi-group">
						<div className="multi-group-item">
							<p className="subtitle">字体</p>
							<div className="body">
								<p>
									<MyLink
										href="https://github.com/atelier-anchor/smiley-sans"
										text="得意黑 ↗"
									/>
								</p>
							</div>
						</div>

						<div className="multi-group-item">
							<p className="subtitle">字体自适应</p>
							<div className="body">
								<p>
									<MyLink
										href="https://utopia.fyi/"
										text="utopia ↗"
									/>
								</p>
							</div>
						</div>
						<div className="multi-group-item">
							<p className="subtitle">项目</p>
							<div className="body">
								<p>
									<MyLink
										href="https://github.com/frommainland/flowers_and_poems"
										text="github ↗"
									/>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* content 03 */}
			<div className="about-us item-wrap">
				{/* <p>03</p> */}
				<div className="content">
					<p className="subtitle">相关项目</p>
					<div className="body">
						<p>
							<MyLink
								href="https://github.com/frommainland/last_name_slang"
								text="天王盖地虎，宝塔镇河妖 ↗"
							/>
							<br />
							<MyLink
								href="https://github.com/frommainland/newJargon"
								text="互联网词语学习 ↗"
							/>
						</p>
					</div>
				</div>
			</div>
			<HomeFooter handleData={handleData} />
		</div>
	)
}

export default AboutPage
