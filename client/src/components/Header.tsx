import React from 'react';

interface HeaderProps {
	children: React.ReactNode;
}

export default function Header(props: HeaderProps) {
	const { children } = props;

	return (
		<div
			style={{
				height: 40,
				backgroundColor: '#005448',
				padding: 5,
			}}
		>
			{children}
		</div>
	);
}
