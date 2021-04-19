import { getReposForUser } from 'api/git';
import Loading from 'components/Loading/Loading';
import RepoContainer from 'components/RepoContainer/RepoContainer';
import Search from 'components/Search/Search';
import { useState } from 'react';

const RESPONSE = {
	NOT_FOUND: 'Not Found',
};

const UserRepos = () => {
	const [repos, setRepos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	// useEffect(() => {
	const onSearch = async userName => {
		setIsLoading(true);
		try {
			const { data: fetchedRepos } = await getReposForUser({
				userName,
			});
			if (!fetchedRepos.length) {
				setError(`No repos found for the user ${userName}`);
				return;
			}
			setError('');
			setRepos(fetchedRepos);
		} catch (err) {
			console.log(err);
			const { response } = err;

			const errorMessage = response?.data?.message || err.message;
			setError(errorMessage);
		} finally {
			setIsLoading(false);
		}
	};

	// getRepos();
	// }, [userName]);

	return (
		<>
			<div style={{ textAlign: 'center' }}>
				<Search onSearch={onSearch} />
			</div>
			{isLoading && <Loading />}
			{error || (repos.length && <RepoContainer repos={repos} />) || ''}
		</>
	);
};

export default UserRepos;
