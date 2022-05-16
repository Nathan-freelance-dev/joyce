import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />} />
			</Routes>
		</Router>
	)
}

export default App;