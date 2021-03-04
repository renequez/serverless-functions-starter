const result = document.querySelector('.result');

const fetchData = async () => {
	try {
		const { data } = await axios('/api/2-basic-api');
		const products = data
			.map(({ name, image: { url }, price }) => {
				return `<article class="product">
                <img src="${url}" alt="${name}"/>
                <div class="info">
                    <h5>${name}</h5>
                    <h5 class="price">$${price}</h5>
                </div>
            </article>`;
			})
			.join('');
		console.log(products);
		return (result.innerHTML = products);
	} catch (error) {
		throw new Error(error.response.data);
	}
};

fetchData();
