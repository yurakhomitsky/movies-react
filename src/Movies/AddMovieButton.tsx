import React, { ReactElement } from 'react';

export function AddMovieButton(): ReactElement {
	const style: React.CSSProperties = {
		backgroundColor: 'rgba(96, 96, 96, 0.68)',
		textTransform: 'uppercase',
		fontSize: '1.2rem',
		fontWeight: '600'
	}
	return <button className="text-primary" style={style}>+ Add Movie</button>
}
