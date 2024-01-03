// import clsx from 'clsx'
// import css from './Card.module.css'
import { Container, Description, Stats, StatsItem } from './Profile.styled'

export const Profile = ({ username, tag, location, avatar, stats }) => {
	return (
		<Container>
			<Description class="description">
				<img src={avatar} alt="User avatar" class="avatar" />
				<p>{username}</p>
				<p>@{tag}</p>
				<p>{location}</p>
			</Description>

			<Stats>
				<StatsItem>
					<span class="label">Followers</span>
					<span class="quantity">{stats.followers}</span>
				</StatsItem>
				<StatsItem>
					<span class="label">Views</span>
					<span class="quantity">{stats.views}</span>
				</StatsItem>
				<StatsItem>
					<span class="label">Likes</span>
					<span class="quantity">{stats.likes}</span>
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
