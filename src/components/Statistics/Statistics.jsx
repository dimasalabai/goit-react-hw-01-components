import { Container } from '../Profile/Profile.styled'

import { StatHeader, StatList, StatItem } from './Statistics.styled'
import { getRandomHexColor } from './Statistics.styled'

export const Statistics = ({ title, stats }) => {
	return (
		<Container>
			{title && <StatHeader>{title}</StatHeader>}

			<StatList>
				{stats.map(item => {
					return (
						<StatItem
							key={item.id}
							style={{ backgroundColor: getRandomHexColor() }}
						>
							<span>{item.label}</span>
							<span>{item.percentage}%</span>
						</StatItem>
					)
				})}
			</StatList>
		</Container>
	)
}
