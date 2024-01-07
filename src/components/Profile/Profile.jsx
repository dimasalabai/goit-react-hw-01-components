// import clsx from 'clsx'

import { Container, Description, Stats, StatsItem } from './Profile.styled'

export const Profile = ({ username, tag, location, avatar, stats }) => {
	return (
		<Container>
			<Description>
				<img src={avatar} alt="User avatar" />
				<p>{username}</p>
				<p>@{tag}</p>
				<p>{location}</p>
			</Description>

			<Stats>
				<StatsItem>
					<span>Followers</span>
					<span>{stats.followers}</span>
				</StatsItem>
				<StatsItem>
					<span>Views</span>
					<span>{stats.views}</span>
				</StatsItem>
				<StatsItem>
					<span>Likes</span>
					<span>{stats.likes}</span>
				</StatsItem>
			</Stats>
		</Container>
	)
}

// ? CLSX
// className={clsx(
//   css.main,
//   isOnline && css.red,
//   !isOnline && css.black
// )}
// className={clsx(css.main, {
// 	[css.red]: isOnline,
// })}
