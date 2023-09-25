import React, { ReactElement } from 'react';
import { Button } from '../../components';

interface AddMovieButtonProps {
	onClick?: () => void
}

export function AddMovieButton({ onClick }: AddMovieButtonProps): ReactElement {
	const style: React.CSSProperties = {
		backgroundColor: 'rgba(96, 96, 96, 0.68)',
		textTransform: 'uppercase',
		fontSize: '1.2rem',
		fontWeight: '600'
	}
	return <Button onClick={onClick} style={style}>+ Add Movie</Button>
}
