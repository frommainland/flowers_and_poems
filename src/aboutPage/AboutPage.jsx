import React from 'react'
import Nav from './Nav'
import Item from './Item'
import ItemContent from './ItemContent'
import './AboutPage.scss'

const AboutPage = () => {
	return (
		<div>
			<Nav></Nav>
			<Item children={ItemContent}></Item>
		</div>
	)
}

export default AboutPage
