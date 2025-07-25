import React from "react";

import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
	address,
	name,
	id,
	company,
	email,
	phone,
	username,
	website,
}) => {
	return (
		<div className="mb-4 p-3 grid grid-cols-2 h-[320px] w-[350px] min-w-[300px] shadow-lg shadow-black rounded-lg text-sm">
			<div className="personal justify-self-center border-r-1">
				<h2>Personal Details</h2>
				<h3>
					Name: <span>{name}</span>
				</h3>
				<p>
					UserName: <span>{username}</span>
				</p>
				<p>
					Email: <span>{email}</span>
				</p>
				<p>
					Phone: <span>{phone}</span>
				</p>
				<p>
					Website: <span>{website}</span>
				</p>
			</div>
			<div className="address justify-self-center">
				<h2>Address</h2>
				<p>
					City: <span>{address.city}</span>
				</p>
				<p>
					Street: <span>{address.street}</span>
				</p>
				<p>
					Suite: <span> {address.suite}</span>
				</p>
			</div>
			<div className="company col-span-2 justify-self-center">
				<h2>Company</h2>
				<p>
					Name: <span>{company.name}</span>
				</p>
				<p>
					Catchphrase: <span>{company.catchPhrase}</span>
				</p>
				<p>
					Bs: <span>{company.bs}</span>
				</p>
			</div>
		</div>
	);
};

export default UserCard;
