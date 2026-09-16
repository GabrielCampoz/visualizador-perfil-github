const BASE_URL = 'https://api.github.com';

export async function getGitHubRepos(userName) {
    let response;

    try {
        response = await fetch(
            `${BASE_URL}/users/${encodeURIComponent(userName)}/repos?sort=created&direction=desc&per_page=10`,
        );
    } catch {
        throw new Error(
            'Não foi possível conectar ao GitHub. Tente novamente mais tarde.',
        );
    }

    if (response.status === 404) {
        throw new Error('Usuário não encontrado. Verifique o nome e tente novamente.');
    }

    if (!response.ok) {
        throw new Error('Não foi possível buscar os repositórios. Tente novamente mais tarde.');
    }

    return response.json();
}

export async function getGitHubUser(userName) {
    let response;

    try {
        response = await fetch(
            `${BASE_URL}/users/${encodeURIComponent(userName)}`,
        );
    } catch {
        throw new Error(
            'Não foi possível conectar ao GitHub. Tente novamente mais tarde.',
        );
    }

    if (response.status === 404) {
        throw new Error(
            'Usuário não encontrado. Verifique o nome e tente novamente.',
        );
    }

    if (!response.ok) {
        throw new Error(
            'Não foi possível buscar o perfil. Tente novamente mais tarde.',
        );
    }

    return response.json();
}
