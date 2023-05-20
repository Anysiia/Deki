import { Request, Response } from 'express';

// GET /helloworld
export default function helloWorld(_req: Request, res: Response) {
	res.json({ greetings: 'Hello World !' });
}
