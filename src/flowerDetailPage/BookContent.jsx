import React from 'react'
import './BookContent.scss'

const BookContent = () => {
	return (
		<div className="bookcontent">
			<div className="bg-gradient"></div>
			<div className="poem">
				<p>瘴烟长暖无霜雪</p>
				<p>槿艳繁花满树红</p>
				<p>每叹芳菲四时厌</p>
				<p>不知开落有春风</p>
				<p className="author">
					<span>
						<svg
							width="11"
							height="10"
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
					</span>
					<span>李绅</span>
				</p>
			</div>
			<div className="ratings"></div>
		</div>
	)
}

export default BookContent
