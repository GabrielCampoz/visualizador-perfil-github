const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.getElementById('profile-results')
const loading = document.getElementById('loading');

const BASE_URL = 'https://api.github.com';


btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value.trim();

    if (userName) {
        profileResults.innerHTML = '';
        loading.hidden = false;

        try {
            const response = await fetch(`${BASE_URL}/users/${userName}`)

            if (!response.ok) {
                alert('Usuário não encontrado. Por favor, verifique o nome do usuário e tente novamente.')
                return;
            }

            const Userdata = await response.json();
            console.log(Userdata);

            profileResults.innerHTML = `
            <div class="profile-card">
                <img src="${Userdata.avatar_url}" alt="Avatar de ${Userdata.name}" class="profile-avatar">
                <div class="profile-info">
                    <h2>${Userdata.name}</h2>
                    <p>${Userdata.bio || 'Sem biografia disponível'}</p>
                </div>
            </div>`;

        } catch (error) {
            console.error('Erro ao buscar o perfil do usuário', error);
            alert('Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.')
        } finally {
            loading.hidden = true;
        }

    } else {
        alert('Por favor, digite um nome de usuário do GitHub')
    }

});

