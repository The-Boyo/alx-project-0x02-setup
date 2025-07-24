import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { CardProps } from "@/interfaces";
import React, { useState } from "react";

const Home = () => {
	const [posts, setPosts] = useState([
		{ title: "Football", content: "CHAN 2024" },
		{ title: "Roland Garros", content: "London 2025" },
		{ title: "Diamond League", content: "Monaco 2025" },
	]);
	const [openModal, setModalOpen] = useState(false);

	const handleSubmit = (post: CardProps) => {
		setPosts([...posts, post]);
	};

	return (
		<div className="font-serif">
			<Header />
			<h1>Home Page</h1>
			<button
				onClick={() => setModalOpen(true)}
				className="fixed right-5 top-10 h-17 w-17 bg-blue-400 rounded-full text-sm text-white m-1 cursor-pointer"
			>
				Add Content
			</button>
			<div className="p-2 w-full grid grid-cols-1 space-x-2 sm:grid-cols-2 md:grid-cols-4">
				{posts.map((post, ind) => {
					return (
						<Card
							title={post.title}
							content={post.content}
							key={`${post.title}-${ind}-${post.content.split(" ")[0]}`}
						/>
					);
				})}
			</div>
			{openModal && (
				<PostModal
					onSubmit={handleSubmit}
					onClose={() => setModalOpen(false)}
				/>
			)}
		</div>
	);
};

export default Home;
