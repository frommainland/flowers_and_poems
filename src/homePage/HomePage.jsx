import React from 'react'
import Opening from './Opening'
import FlowerGrid from './FlowerGrid'
import HomeFooter from '../components/HomeFooter'
import { AboutButton } from './AboutButton'

export const HomePage = () => {
	return (
		<div style={{ position: 'relative' }}>
			<Opening />
			<FlowerGrid />
			<HomeFooter />
			<AboutButton />
		</div>
	)
}
