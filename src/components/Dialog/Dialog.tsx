import { ReactElement } from 'react';
import { Portal } from 'react-portal';
import styles from './Dialog.module.css';
import classNames from 'classnames';
import { CloseIcon } from './CloseIcon.tsx';
import FocusTrap from 'focus-trap-react';


interface DialogProps {
	title: string;
	onClose?: () => void;
	children?: ReactElement;
	width?: string;
	height?: string;
}

export function Dialog({ title, onClose, children, width, height }: DialogProps) {
	return <Portal node={document && document.getElementById('overlay')}>
		<div tabIndex={-1} className={styles.backdrop}>
			<div tabIndex={-1} className={styles.overlayWrapper}>
				<FocusTrap active={true}>
					<div tabIndex={0} style={{ width, height }} className={classNames(styles.dialog, 'bg-dark')}>
						<header tabIndex={0} className={styles.header}>
							<h1>{title}</h1>
							<CloseIcon tabIndex={0} onClick={onClose}/>
						</header>
						<div tabIndex={1} className={styles.dialogContent}>
							{children}
						</div>
					</div>

				</FocusTrap>
			</div>

		</div>
	</Portal>
}
