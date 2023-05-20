import myAxios from '../utils/myAxios';

interface ResHelloWorld {
	greetings: string;
}

export async function getHelloWorld() {
	const response = await myAxios.get<ResHelloWorld>('/helloworld');

	return response.data.greetings;
}
