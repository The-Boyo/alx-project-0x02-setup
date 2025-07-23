import React from "react";

import { PostModalFunctions } from "@/interfaces";

const PostModal: React.FC<PostModalFunctions> = ({ onSubmit, onClose }) => {
	return (
		<div className="absolute top-0 z-1 flex justify-center items-center h-full w-full bg-[rgba(0,0,0,0.7)] font-serif">
			<form
				onSubmit={onSubmit}
				className="flex-col p-3 justify-center items-center bg-white h-70 w-[30%] min-w-15 rounded-sm"
			>
				<div>
					<label htmlFor="title">Title</label>
					<br />
					<input
						type="text"
						name="title"
						className="mb-2 border-2 border-black rounded-md"
					/>
				</div>
				<div className="h-[70%]">
					<label htmlFor="content">Content</label>
					<br />
					<textarea
						name="content"
						className="border-2 border-black mb-2 rounded-md h-[70%] w-[80%]"
					></textarea>
				</div>
				<div className="flex justify-end space-x-2.5 ">
					<button className="bg-blue-600 text-sm text-white w-20 rounded-sm">
						Cancel
					</button>
					<button className="bg-blue-600 text-sm text-white w-20 rounded-sm">
						Add
					</button>
				</div>
			</form>
		</div>
	);
};

export default PostModal;
