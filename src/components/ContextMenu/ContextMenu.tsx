import React, { useEffect, useRef, useState } from 'react';
import styles from './ContextMenu.module.css';
import { Card } from '../Card/Сard.tsx';

interface ContextMenuProps {
	items: { label: string; action: () => void }[];
	children: React.ReactElement<{ onContextMenu: (event: React.MouseEvent<HTMLElement>) => void }>;

}

export function ContextMenu({ children, items }: ContextMenuProps) {
	const [isVisible, setIsVisible] = useState(false);
	const [position, setPosition] = useState({ top: 0, left: 0 });
	const menuRef = useRef<HTMLDivElement>(null);

	const handleContextMenu = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		const { clientX, clientY } = e;
		setPosition({ top: clientY, left: clientX });
		setIsVisible(true);
	};

	const handleOutsideClick = (e: MouseEvent) => {
		if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
			setIsVisible(false);
		}
	};

	// Attach event listeners
	useEffect(() => {
		document.addEventListener('click', handleOutsideClick);
		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, []);

	return (
		<>
			{children && React.cloneElement(children, { onContextMenu: handleContextMenu })}
			{isVisible && (
				<div ref={menuRef}>
					<Card
						className={styles.contextMenu}
						style={{ top: position.top, left: position.left }}

					>
						{items.map((item, index) => (
							<div key={index}  onClick={item.action}>
								{item.label}
							</div>
						))}
					</Card>
				</div>

			)}
		</>
	);
}
