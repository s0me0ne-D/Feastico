export const fetchByName = async (name: string) => {
	const url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=1&q=${name}`;
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
			"X-RapidAPI-Host": "tasty.p.rapidapi.com",
		},
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		return result;
	} catch (error) {
		console.error(error);
	}
};
