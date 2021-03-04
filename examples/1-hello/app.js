const result = document.querySelector('.result');
const url = '/api/1-hello';

const fetchData = async () => {
	try {
		const { data } = await axios.get(url);
		result.textContent = data;
	} catch ({ response }) {
		throw new Error(response.data);
	}
};

fetchData();
