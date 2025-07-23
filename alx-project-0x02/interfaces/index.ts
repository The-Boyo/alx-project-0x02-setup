export interface CardProps {
	title: string;
	content: string;
}

export interface PostModalFunctions {
	onSubmit: () => CardProps;
	onClose: () => void;
}
