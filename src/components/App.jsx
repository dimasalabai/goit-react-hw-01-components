import user from '../user'
import data from '../data'
import friends from '../friends'

import { Profile } from './Profile/Profile'
import { Statistics } from './Statistics/Statistics'
import { FriendList } from './FriendList/FriendList'

const App = () => {
	return (
		<>
			<Profile
				username={user.username}
				tag={user.tag}
				location={user.location}
				avatar={user.avatar}
				stats={user.stats}
			/>
			<Statistics title="Upload stats" stats={data} />
			<FriendList friends={friends} />
		</>
	)
}

export default App
