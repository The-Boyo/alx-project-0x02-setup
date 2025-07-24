export interface CardProps {
	title: string;
	content: string;
}

export interface PostModalFunctions {
	onSubmit: (post: CardProps) => void;
	onClose: () => void;
}
