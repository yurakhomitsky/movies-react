import { ApplicationName } from '../components/ApplicationName/ApplicationName.tsx';
import { ReactElement } from 'react';
import styles from './Footer.module.css';

export function Footer(): ReactElement {
	return <footer className={`${styles.footer} bg-darkest`}>
		<ApplicationName></ApplicationName>
	</footer>
}
