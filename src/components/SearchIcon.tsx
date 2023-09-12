import { ReactElement } from 'react';

interface SearchIconProps {
	onClick: () => void
}

export function SearchIcon({ onClick }: SearchIconProps): ReactElement {
	return <svg onClick={onClick} cursor={'pointer'} xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
		<circle cx="18.5" cy="10.5" r="9.5" stroke="#F65261" strokeWidth="2"/>
		<path d="M10.5 19.5L1.5 28.5" stroke="#F65261" strokeWidth="2" strokeLinecap="square"/>
	</svg>;
}
