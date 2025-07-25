import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

const Users: React.FC<UserProps[]> = ({ users }) => {
	console.log(users);
	return (
		<div className="font-serif p-4">
			<h1 className="text-2xl font-bold font-serif mb-4">Users</h1>
			<div className="grid grid-cols-[repeat(auto-fill,_minmax(350px,_2fr))] ">
				{users?.map((user: UserProps) => {
					return (
						<UserCard
							key={user.id}
							name={user.name}
							email={user.email}
							id={user.id}
							company={user.company}
							address={user.address}
							phone={user.phone}
							website={user.website}
							username={user.username}
						/>
					);
				})}
			</div>
		</div>
	);
};

export async function getStaticProps() {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const users = await response.json();

	return {
		props: {
			users,
		},
	};
}

export default Users;
