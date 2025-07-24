import React from "react";

import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = (props) => {
	return (
		<div className="card">
			<h2 className="font-bold">{props.title}</h2>
			<p className="text-sm">{props.content}</p>
		</div>
	);
};

export default Card;
