import { Container } from './FriendLIst.styled'
import { FriendListItem } from './FriendLIstItem/FriendListItem'

export const FriendList = ({ friends }) => {
	return (
		<Container>
			{friends.map(friend => {
				return (
					<FriendListItem
						key={friend.id}
						avatar={friend.avatar}
						name={friend.name}
						$isOnline={friend.isOnline}
					/>
				)
			})}
		</Container>
	)
}
