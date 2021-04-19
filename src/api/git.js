import axios from 'axios';

const ENDPOINTS = {
	REPOS: 'users/',
};

const gitApi = axios.create({
	baseURL: 'https://api.github.com/',
});

// https://api.github.com/users/numanaral/repos
const userRepoUrlBuilder = userName => {
	return `${ENDPOINTS.REPOS}${userName}/repos`;
};

const getReposForUser = ({ userName, count }) => {
	return gitApi.get(userRepoUrlBuilder(userName));
};

export { getReposForUser };
