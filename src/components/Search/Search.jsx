import { useState } from 'react';

const Search = ({ label, onSearch }) => {
	const [searchKeyword, setSearchKeyword] = useState('');

	const onSubmit = e => {
		e.preventDefault();
		if (!searchKeyword) {
			// eslint-disable-next-line no-alert
			alert('Please enter a user name');
			return;
		}
		onSearch(searchKeyword);
	};

	const onChange = e => {
		const keyword = e.target.value.trim();
		if (!keyword) return;
		setSearchKeyword(keyword);
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<label htmlFor="userName">{label}</label>
				<input name="userName" onChange={onChange} />
				<button type="submit">Search </button>
			</form>
		</div>
	);
};

export default Search;
