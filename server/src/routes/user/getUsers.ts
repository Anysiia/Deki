import { Request, Response } from 'express';
const { users } = require('../../data/users');

// GET /users
export default function getUsers(_req: Request, res: Response) {
	//console.log('inside api getUsers function');
	res.json(users);
}
