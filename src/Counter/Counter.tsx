import React, { ReactElement } from 'react';
import './Counter.css';

interface MyProps {
	count: number;
	onIncrease: () => void;
	onDecrease: () => void;
}

interface MyState {

}

export class Counter extends React.Component<MyProps, MyState> {

	public render(): ReactElement {
		return React.createElement('div', { className: 'counter' },
			React.createElement('span', null, this.props.count),
			React.createElement('div', { className: 'actions-container' }, React.createElement('button', {
					type: 'button',
					onClick: this.props.onIncrease
				}, 'Increase'),
				React.createElement('button', { type: 'button', onClick: this.props.onDecrease }, 'Decrease'))
		);
	}
}

