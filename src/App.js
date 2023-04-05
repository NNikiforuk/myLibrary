import "./App.scss";
import Home from "./pages/Home";
import Library from "./pages/Library";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";

function App() {
	const googleProvider = new GoogleAuthProvider();
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
						element={
							<Home
								firstName={firstName}
								onFirstNameChange={handleFirstNameChange}
							/>
						}
					></Route>
					<Route path="/library" element={<Library />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
