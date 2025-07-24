import React from "react";

import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ size, shape }) => {
	const renderSize = (theSize: string): string => {
		if (theSize === "small") {
			return "h-[2em] w-[4em] text-sm";
		} else if (theSize === "medium") {
			return "h-[2.5em] w-[5em] text-md";
		} else if (theSize === "large") {
			return "h-[3em] w-[7em] text-lg";
		} else {
			return "";
		}
	};

	return (
		<button className={`${renderSize(size)} ${shape} text-white m-3`}>
			{size}
		</button>
	);
};

export default Button;
