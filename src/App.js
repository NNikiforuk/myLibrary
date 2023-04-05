import "./App.scss";
import Home from "./pages/Home";
import Library from "./pages/Library";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
	return (
		<div className="app">
			<Router>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/library" element={<Library />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
