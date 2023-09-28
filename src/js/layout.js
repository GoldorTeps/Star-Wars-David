import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";


import Home from "./views/home"
import PeopleDetails from "./views/PeopleDetails";
import PlanetDetails from "./views/PlanetDetails";
import VehicleDetails from "./views/VehicleDetails";
import injectContext from "./store/appContext";


import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";



const Layout = () => {
	
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/people-details" element={<PeopleDetails />} />
						<Route path="/planet-details" element={<PlanetDetails />} />
						<Route path="/starships-details" element={<VehicleDetails />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
