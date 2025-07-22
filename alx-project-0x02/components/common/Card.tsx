import React from "react";

import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
	return (
		<div className="shadow-blue-800 shadow-md m-4 p-2 rounded-md">
			<h2>{title}</h2>
			<p>{content}</p>
		</div>
	);
};

export default Card;
