import "./App.scss";
import Home from "./pages/Home";
import Library from "./pages/Library";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
	const [firstName, setFirstName] = useState("");

	const handleFirstNameChange = (event) => {
		setFirstName(event.target.value);
	};

	return (
		<div className="app">
			<Router>
				<Routes>
					<Route
						path="/"
						element={<Home onFirstNameChange={handleFirstNameChange} />}
					></Route>
					<Route
						path="/library"
						element={<Library firstName={firstName} />}
					></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
