import { Friend } from './FriendListItem.styled'

export const FriendListItem = ({ avatar, name, $isOnline }) => {
	return (
		<Friend $isOnline={$isOnline}>
			<span></span>
			<img src={avatar} alt="User avatar" width="48" />
			<p>{name}</p>
		</Friend>
	)
}
