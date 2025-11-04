import { elements } from './modules/elements.js';
import { getUserData } from './modules/githubService.js';
import { renderProfile, renderLoading, clearProfile } from './modules/renderer.js';

const { inputSearch, btnSearch, profileResults } = elements;

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;

    if (!userName) {
        alert('Por favor, digite um nome de usuário do GitHub.');
        return;
    }

    profileResults.innerHTML = renderLoading();

    try {
        const userData = await getUserData(userName);
        profileResults.innerHTML = renderProfile(userData);
    } catch (error) {
        console.error('Erro ao buscar perfil do usuário:', error);
        alert('Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.');
        clearProfile(profileResults);
    }
});