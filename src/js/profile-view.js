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