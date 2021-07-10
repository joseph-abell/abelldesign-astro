const fetchData = async (
	fetch,
	query: string,
	variables?: { id?: string; slug?: string }
): Promise<any> => {
	let response;

	if (variables) {
		response = await fetch('https://abelldesign.graphcdn.app', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				query,
				variables
			})
		});
	} else {
		response = await fetch('https://abelldesign.graphcdn.app', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({
				query
			})
		});
	}

	const { data } = await response.json();

	return data;
};

export default fetchData;
