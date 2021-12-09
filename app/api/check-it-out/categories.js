import API from "../index";

export const getCategories = () =>
	new Promise((resolve, reject) => {
		console.log(API);
		API.get("/category")
			.then((res) => {
				console.log(res.data);
				resolve(res.data);
			})
			.catch((err) => reject(err));
	});
