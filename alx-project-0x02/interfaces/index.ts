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
	shape: "sm" | "md" | "full";
}
