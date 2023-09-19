import { useState } from 'react';
import styles from './ContextMenu.module.css';
import { Card } from '../Card/Сard.tsx';
import { Button } from '../Button/Button.tsx';
import { DotsIcon } from './DotsIcon.tsx';

interface ContextMenuProps {
	items: { label: string; action: () => void }[];
}

export function ContextMenu({ items }: ContextMenuProps) {
	const [isVisible, setIsVisible] = useState(false);

	const toggle = () => {
		setIsVisible((state) => !state);
	};

	return (
		<div className={styles.contextMenuContainer}>
			<Button data-testid="context-menu-btn" onClick={toggle}>
				<DotsIcon/>
			</Button>
			{isVisible && (
				<Card
					className={styles.contextMenu}

				>
					{items.map((item, index) => (
						<div key={index} onClick={item.action}>
							{item.label}
						</div>
					))}
				</Card>

			)}
		</div>
	);
}
