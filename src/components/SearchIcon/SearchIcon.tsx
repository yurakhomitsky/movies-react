import { ReactElement } from 'react';
import SvgIcon from './SvgIcon.tsx';
import { Button } from '../Button/Button.tsx';

interface SearchIconProps {
	onClick?: () => void;
}

export function SearchIcon({ onClick }: SearchIconProps): ReactElement {
	return <Button onClick={onClick}>
		<SvgIcon></SvgIcon>
	</Button>;
}
