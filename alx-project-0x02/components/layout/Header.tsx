import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<header className="flex justify-start items-center space-x-2 text-white bg-blue-600 h-20 w-full p-2">
			<p>
				<Link href={`/home`}>Home</Link>
			</p>
			<p>
				<Link href={`/about`}>About</Link>
			</p>
			<p>
				<Link href={`/posts`}>Posts</Link>
			</p>
		</header>
	);
};

export default Header;
