import user from '../user'
import { Profile } from './Profile/Profile'

const App = () => {
	return (
		<Profile
			username={user.username}
			tag={user.tag}
			location={user.location}
			avatar={user.avatar}
			stats={user.stats}
		/>
	)
}

export default App
