import myAxios from "../utils/myAxios";
import { User } from "../interfaces/User"

export async function getUsers() {
    const response = await myAxios.get<User[]>('/users');

    return response.data;
}