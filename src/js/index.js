import { getGitHubUser } from './github-api.js';
import {
    clearProfile,
    getSearchTerm,
    hideLoading,
    onSearch,
    renderProfile,
    showLoading,
} from './profile-view.js';

async function searchProfile() {
    const userName = getSearchTerm();

    if (!userName) {
        alert('Por favor, digite um nome de usuário do GitHub.');
        return;
    }

    clearProfile();
    showLoading();

    try {
        const user = await getGitHubUser(userName);
        renderProfile(user);
    } catch (error) {
        console.error('Erro ao buscar o perfil do usuário:', error);
        alert(error.message);
    } finally {
        hideLoading();
    }
}

onSearch(searchProfile);