import user from '../user'
import data from '../data'
import friends from '../friends'
import transactions from '../transactions'

import { Profile } from './Profile/Profile'
import { Statistics } from './Statistics/Statistics'
import { FriendList } from './FriendList/FriendList'
import { TransactionHistory } from './TransactionHistory/TransactionHistory'

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
			<TransactionHistory items={transactions} />;
		</>
	)
}

export default App