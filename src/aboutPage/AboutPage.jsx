import React from 'react'
import Nav from './Nav'
import './AboutPage.scss'
import { motion } from 'framer-motion'

const MyLink = ({ href, text }) => {
	return (
		<motion.a href={href} whileHover={{ color: '#2F2F30' }}>
			{text}
		</motion.a>
	)
}

const AboutPage = () => {
	return (
		<div className="about-us-wrap">
			<Nav></Nav>
			{/* content 01 */}
			<div className="about-us item-wrap">
				<p>01</p>
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
								text="oddityfragrance↗"
							/>
							<MyLink
								href="https://replica.studio/"
								text="replica studio↗"
							/>
						</p>
					</div>
				</div>
			</div>
			{/* content 02 */}
			<div className="about-us item-wrap">
				<p>02</p>
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
								text="rawpixel↗"
							/>
						</p>
					</div>

					<p className="subtitle">诗词</p>
					<div className="body">
						<p>杜甫，苏轼，礼拜，白居易，屈原，陆游，李贺</p>
					</div>

					<div className="multi-group">
						<div className="multi-group-item">
							<p className="subtitle">字体</p>
							<div className="body">
								<p>
									<MyLink
										href="https://github.com/atelier-anchor/smiley-sans"
										text="得意黑↗"
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
										text="utopia↗"
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
										text="github↗"
									/>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* content 03 */}
			<div className="about-us item-wrap">
				<p>03</p>
				<div className="content">
					<p className="subtitle">相关项目</p>
					<div className="body">
						<p>
							<MyLink
								href="https://github.com/frommainland/last_name_slang"
								text="天王盖地虎，宝塔镇河妖↗"
							/>
							<br />
							<MyLink
								href="https://github.com/frommainland/newJargon"
								text="互联网词语学习↗"
							/>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutPage
