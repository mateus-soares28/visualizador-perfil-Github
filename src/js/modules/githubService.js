import { BASE_URL } from './config.js';

export async function getUserData(userName) {
    const response = await fetch(`${BASE_URL}/users/${userName}`);
    
    if (!response.ok) {
        throw new Error('Usuário não encontrado');
    }
    
    return await response.json();
}