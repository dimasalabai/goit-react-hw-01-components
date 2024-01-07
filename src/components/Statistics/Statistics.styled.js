import styled from 'styled-components'

export const StatHeader = styled.h2`
	color: #7c7c7c;
	padding: 15px 0;
	text-transform: uppercase;
`
export const StatList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
`

export const StatItem = styled.li`
	flex: 1 0 24%;
	padding: 10px 0px 10px 0px;
	border: 0.5px solid #4e4e4e;

	span {
		display: block;
		text-align: center;
		&:last-child {
			margin-top: 5px;
			font-size: 20px;
		}
	}
`

export function getRandomHexColor() {
	const letters = '0123456789ABCDEF'
	let color = '#'

	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)]
	}

	return color
}
