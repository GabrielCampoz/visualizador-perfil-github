import { getGitHubUser, getGitHubRepos } from './github-api.js';
import {
    clearProfile,
    getSearchTerm,
    hideLoading,
    onSearch,
    renderProfile,
    renderRepositories,
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
        const [user, repositories] = await Promise.all([
            getGitHubUser(userName),
            getGitHubRepos(userName),
        ]);
        renderProfile(user);
        renderRepositories(repositories);
    } catch (error) {
        console.error('Erro ao buscar o perfil do usuário:', error);
        alert(error.message);
    } finally {
        hideLoading();
    }
}

onSearch(searchProfile);
