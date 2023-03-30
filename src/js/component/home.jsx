import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="container-fluid d-flex">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</>
	);

};

export default Home;
