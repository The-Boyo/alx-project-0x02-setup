import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<header className="flex justify-start space-x-2  w-full m-2 p-2 shadow-2xl shadow-amber-500 rounded-md">
			<p>
				<Link href={`/home`}>Home</Link>
			</p>
			<p>
				<Link href={`/about`}>About</Link>
			</p>
		</header>
	);
};

export default Header;
