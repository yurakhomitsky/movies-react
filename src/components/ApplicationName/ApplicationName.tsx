import React, { ReactElement } from 'react';

export const APPLICATION_NAME = 'netflix roulette';

export function ApplicationName(): ReactElement {
	const [part1, part2] = APPLICATION_NAME.split(' ');
	const style: React.CSSProperties = {
		fontSize: '1.2rem'
	}
	return <span style={style}>
		<span className="text-bold text-primary">{part1}</span><span className="text-primary">{part2}</span>
	</span>;
}
