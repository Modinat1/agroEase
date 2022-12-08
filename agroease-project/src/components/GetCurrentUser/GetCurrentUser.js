import axios from "axios";

export const getCurrentUser = async (config) => {
	const currentUser = await axios
		.get(
			"https://agro-ease-backend-production.up.railway.app/v1/auth/current",
			config
		)
		.then((resp) => {
			console.log(resp.data);
			return resp;
		});
	const user = currentUser;

	console.log(user);
	localStorage.setItem("user", JSON.stringify(user));
	return user;
};

// useEffect(() => {
// 	getCurrentUser();
// }, []);
