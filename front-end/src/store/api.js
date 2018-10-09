import axios from 'axios';

const api = (method, url, data) => {
	url = `api/${url}`;
    // const headers = { Authorization: `Bearer ${localStorage.token}` };
	const headers = {}
	
	return new Promise((resolve, reject) => {
		const ops = { method, url, data, headers };
		if (method === 'get' && data) {
			ops.params = data;
		}
		axios(ops)
			.then((res) => {
				resolve(res);
			})
			.catch((err) => {
				const res = err.response;
				reject(res);
			});
	});
};

export default api;

