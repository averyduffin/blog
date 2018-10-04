import axios from 'axios';

const api = (method, url, data) => {
	url = `api/${url}`;
    // const headers = { Authorization: `Bearer ${localStorage.token}` };
    const headers = {}
	console.log("HERE");
	return new Promise((resolve, reject) => {
		const ops = { method, url, data, headers };
		if (method === 'get' && data) {
			ops.params = data;
		}
		axios(ops)
			.then((res) => {
				console.log("HERE2");
				resolve(res);
			})
			.catch((err) => {
				const res = err.response;
				console.log("HERE3", err);
				reject(res);
			});
	});
};

export default api;

api('get', '/articles', {}).then(res => {
	console.log('DONE',res);
}).catch(err => {
	console.log(err);
})