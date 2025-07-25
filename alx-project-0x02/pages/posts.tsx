import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";

const Posts: React.FC<PostProps[]> = ({ posts }) => {
	console.log(posts);
	return (
		<div className="p-2">
			<Header />
			<h1>Posts Page</h1>
			<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{posts?.map((post) => {
					return (
						<PostCard
							id={post.id}
							key={post.id}
							title={post.title}
							content={post.body}
							userId={post.userId}
						/>
					);
				})}
			</div>
		</div>
	);
};

export async function getStaticProps() {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
	const posts = await response.json();

	return {
		props: {
			posts,
		},
	};
}

export default Posts;
