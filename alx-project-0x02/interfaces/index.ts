export interface CardProps {
	title: string;
	content: string;
}

export interface PostModalFunctions {
	onSubmit: (post: CardProps) => void;
	onClose: () => void;
}

export interface ButtonProps {
	size: "small" | "medium" | "large";
	shape: "rounded-sm" | "rounded-md" | "rounded-full";
}

export interface PostProps {
	userId: number;
	title: string;
	content: string;
	id: number;
}

export interface UserProps {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}
