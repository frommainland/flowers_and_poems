import React from 'react'
import BookCover from './BookCover'
import BookSpine from './BookSpine'
import BookContent from './BookContent'
import { FlowerData } from '../Data/FlowerData'

const FlowerDetails = () => {
	return (
		<div>
			{FlowerData.map((v, i) => {
				return (
					<div
						style={{ display: 'flex', overflow: 'hidden' }}
						key={i}
					>
						<BookCover
							src={v.imgWebp}
							placeholderSrc={v.imgTiny}
							alt={v.flowerNameCN}
						/>
						<BookSpine
							flowerNameCN={v.flowerNameCN}
							order={v.order}
							flowerNameEN={v.flowerNameEN}
						/>
						<BookContent poem={v.poem} author={v.author} gradient1={v.gradient1} gradient2={v.gradient2}/>
					</div>
				)
			})}
		</div>
	)
}

export default FlowerDetails
