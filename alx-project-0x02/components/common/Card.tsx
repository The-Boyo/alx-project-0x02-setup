import React from "react";

import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = (props) => {
	return (
		<div className="shadow-blue-800 shadow-md m-4 p-2 rounded-md">
			<h2>{props.title}</h2>
			<p>{props.content}</p>
		</div>
	);
};

export default Card;
