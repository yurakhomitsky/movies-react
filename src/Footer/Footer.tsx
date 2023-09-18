import { ApplicationName } from '../components';
import { ReactElement } from 'react';
import styles from './Footer.module.css';
import classNames from 'classnames';

export function Footer(): ReactElement {
	return <footer className={classNames(styles.footer, 'bg-darkest')}>
		<ApplicationName></ApplicationName>
	</footer>
}
