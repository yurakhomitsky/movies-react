import { Button } from '../Button/Button.tsx';

interface CloseIconProps {
	onClick?: () => void;
	tabIndex?: number;
}

export function CloseIcon({ onClick, tabIndex }: CloseIconProps) {
	return <Button tabIndex={tabIndex} onClick={onClick}>
		<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
			<path d="M1.47099 1.15426L21.529 21.2122" stroke="white" strokeWidth="2" strokeLinecap="round"/>
			<path d="M21.529 1.15426L1.47103 21.2122" stroke="white" strokeWidth="2" strokeLinecap="round"/>
		</svg>
	</Button>
}
