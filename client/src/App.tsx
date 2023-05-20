import { useEffect, useState } from 'react';
import { getHelloWorld } from './routes/helloWorld';
import { getUsers } from './routes/getUsers';
import { User } from './interfaces/User'
import Button from '@mui/material/Button';
import Header from './components/Header';
import { Avatar, List, ListItem, ListItemText, Typography } from '@mui/material';

export default function App() {
	const [message, setMessage] = useState('Say hello');
	const [users, setUsers] = useState<User[]>([]);

	const sayHello = async () => {
		const message = await getHelloWorld();
		setMessage(message);
	};

	const readUsers = async () => {
		const users = await getUsers();
		setUsers(users);
	}

	useEffect(() => {}, [message]);
	useEffect(() => {
		readUsers();
	}, []);

	return (
		<div
			style={{
				height: '100vh',
				flex: 1,
			}}
		>
			<Header>
				<Button variant='contained' onClick={sayHello}>
					{message}
				</Button>
			</Header>
			<>
				<Typography variant="h4">Users list</Typography>
				<List>
					{users.map((user) => (
						<ListItem key={user.id}>
							<Avatar alt={user.first_name} src={user.avatar}/>
							<ListItemText primary={user.first_name}/>
							<ListItemText primary={user.last_name}/>
							<ListItemText primary={user.email}/>
							<ListItemText secondary={user.gender}/>
							<ListItemText secondary={user.phone}/>
							<ListItemText secondary={user.address}/>
						</ListItem>
					))}
				</List>
			</>
		</div>
	);
}
