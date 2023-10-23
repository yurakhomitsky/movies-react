'use client'
import { ReactElement } from 'react';
import styles from './Dialog.module.css';
import classNames from 'classnames';
import { CloseIcon } from './CloseIcon.tsx';
import Modal from 'react-modal';

interface DialogProps {
	title: string | ReactElement;
	onClose?: () => void;
	children?: ReactElement;
	width?: string;
	height?: string;
}

export function Dialog({ title, onClose, children, width, height }: DialogProps) {
	return <Modal className={classNames(styles.dialog, 'bg-dark')}  isOpen={true} >
		<div tabIndex={0} style={{ width, height }}>
			<header tabIndex={0} className={styles.header}>
				<h1>{title}</h1>
				<CloseIcon tabIndex={0} onClick={onClose}/>
			</header>
			<div tabIndex={1} className={styles.dialogContent}>
				{children}
			</div>
		</div>
	</Modal>

}
