import RepoItem from 'components/RepoItem';

const RepoContainer = ({ repos }) => {
	return (
		<ol>
			{repos.map(({ id, name, html_url }) => (
				<RepoItem key={id} name={name} url={html_url} />
			))}
		</ol>
	);
};

export default RepoContainer;
