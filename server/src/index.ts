import express from 'express';
import cors from 'cors';

import helloWorld from './routes/helloWorld';
import getUsers from './routes/user/getUsers';

const app = express();
const PORT = 8080;

const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
	origin: allowedOrigins,
};

app.use(cors(options));
app.use(express.json());

// Routes
app.get('/helloworld', helloWorld);

app.get('/users', getUsers);

app.listen(PORT, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
