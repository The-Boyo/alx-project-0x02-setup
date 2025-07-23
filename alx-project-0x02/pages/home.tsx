import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import React, { useState } from "react";

const Home = () => {
	const [openModal, setModalOpen] = useState(false);

	console.log(openModal);

	return (
		<div>
			<h1>Home Page</h1>
			<button
				onClick={() => setModalOpen(true)}
				className="fixed right-5 top-10 h-17 w-17 bg-blue-400 rounded-full text-sm text-white m-1 cursor-pointer"
			>
				Add Content
			</button>
			<div className="p-2 w-full grid grid-cols-1 space-x-2 sm:grid-cols-2 md:grid-cols-4">
				<Card title="Football" content="Chan 2024" />
				<Card title="Football" content="Chan 2024" />
				<Card title="Football" content="Chan 2024" />
				<Card title="Football" content="Chan 2024" />
			</div>
			{openModal && <PostModal />}
		</div>
	);
};

export default Home;
