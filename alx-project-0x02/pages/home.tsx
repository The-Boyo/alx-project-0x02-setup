import Card from "@/components/common/Card";
import React from "react";

const Home = () => {
	return (
		<div>
			<h1>Home Page</h1>
			<div className="grid grid-cols-1 space-x-1.5 sm:grid-cols-2 md:grid-cols-4">
				<Card title="Football" content="Chan 2024" />
				<Card title="Football" content="Chan 2024" />
				<Card title="Football" content="Chan 2024" />
				<Card title="Football" content="Chan 2024" />
			</div>
		</div>
	);
};

export default Home;
