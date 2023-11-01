import { useEffect } from "react";

function App() {

    // let httpStatus;
	useEffect(() => {
		fetch('http://localhost:8181/user/allUsers')
			.then(response => response.json())
			.then(json => console.log(json))
	}, []);

	return (
		<div>
			Different ways to fetch Data
		</div>
	);
}

export default App;
