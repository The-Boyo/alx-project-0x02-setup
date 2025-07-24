import Button from "@/components/common/Button";
import React from "react";

const About = () => {
	return (
		<div className="p-2">
			<h1>About Page</h1>
			<div className="flex flex-col">
				<Button size="small" shape="sm" />
				<Button size="medium" shape="md" />
				<Button size="large" shape="full" />
			</div>
		</div>
	);
};

export default About;
