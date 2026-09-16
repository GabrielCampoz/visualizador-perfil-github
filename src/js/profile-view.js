const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.getElementById('profile-results');
const loading = document.getElementById('loading');

export function getSearchTerm() {
    return inputSearch.value.trim();
}

export function onSearch(callback) {
    btnSearch.addEventListener('click', callback);
}

export function clearProfile() {
    profileResults.replaceChildren();
}

export function showLoading() {
    loading.hidden = false;
}

export function hideLoading() {
    loading.hidden = true;
}

export function renderProfile(user) {
    const profileCard = document.createElement('div');
    profileCard.className = 'profile-card';

    const avatar = document.createElement('img');
    avatar.className = 'profile-avatar';
    avatar.src = user.avatar_url;
    avatar.alt = `Avatar de ${user.name || user.login}`;

    const profileInfo = document.createElement('div');
    profileInfo.className = 'profile-info';

    const name = document.createElement('h2');
    name.textContent = user.name || user.login;

    const bio = document.createElement('p');
    bio.textContent = user.bio || 'Sem biografia disponível';

    profileInfo.append(name, bio);
    profileCard.append(avatar, profileInfo);

    const profileCounter = document.createElement('div');
    profileCounter.className = 'profile-counter';
    profileCounter.append(
        createCounter('followers', '👥 Seguidores', user.followers),
        createCounter('following', '👥 Seguindo', user.following),
    );

    profileResults.replaceChildren(profileCard, profileCounter);
}

export function renderRepositories(repositories) {
    const section = document.createElement('section');
    section.className = 'repositories';

    const title = document.createElement('h3');
    title.textContent = 'Repositórios';
    section.append(title);

    if (repositories.length === 0) {
        const message = document.createElement('p');
        message.textContent = 'Nenhum repositório público encontrado.';
        section.append(message);
    } else {
        const list = document.createElement('ul');
        list.className = 'repository-list';

        repositories.forEach((repository) => {
            const item = document.createElement('li');
            const link = document.createElement('a');
            link.className = 'repository-card';
            link.href = repository.html_url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';

            const name = document.createElement('h4');
            name.textContent = repository.name;

            const details = document.createElement('div');
            details.className = 'repository-details';

            const stats = [
                ['⭐', 'Stars', repository.stargazers_count ?? 0],
                ['⑂', 'Forks', repository.forks_count ?? 0],
                ['👀', 'Watchers', repository.watchers_count ?? 0],
                ['💻', 'Language', repository.language || 'Não informada'],
            ];

            stats.forEach(([icon, label, value]) => {
                const row = document.createElement('p');
                const symbol = document.createElement('span');
                symbol.textContent = icon;
                symbol.setAttribute('aria-hidden', 'true');
                row.append(symbol, ` ${label}: ${value}`);
                details.append(row);
            });

            link.append(name, details);

            item.append(link);
            list.append(item);
        });

        section.append(list);
    }

    profileResults.append(section);
}

function createCounter(className, label, value) {
    const counter = document.createElement('div');
    counter.className = className;

    const title = document.createElement('h4');
    title.textContent = label;

    const amount = document.createElement('span');
    amount.textContent = value;

    counter.append(title, amount);
    return counter;
}
