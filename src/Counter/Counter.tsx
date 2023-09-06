import React, { ReactElement } from 'react';
import styles from './Counter.module.css';

interface MyProps {
	count: number;
	onIncrease: () => void;
	onDecrease: () => void;
}

interface MyState {

}

export class Counter extends React.Component<MyProps, MyState> {

	public render(): ReactElement {
		return React.createElement('div', { className: styles.counter },
			React.createElement('span', { 'data-testid': 'count'}, null, this.props.count),
			React.createElement('div', { className: styles.actionsContainer }, React.createElement('button', {
					'data-testid': 'Increase',
					type: 'button',
					onClick: this.props.onIncrease
				}, 'Increase'),
				React.createElement('button', { 'data-testid': 'Decrease', type: 'button', onClick: this.props.onDecrease }, 'Decrease'))
		);
	}
}

