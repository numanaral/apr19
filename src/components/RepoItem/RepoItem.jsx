const RepoItem = ({ name, url }) => {
	return (
		<li>
			<a href={url}> {name} </a>;
		</li>
	);
};

export default RepoItem;
