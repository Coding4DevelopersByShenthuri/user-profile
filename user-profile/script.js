document.getElementById('moreUsers').addEventListener('click', fetchUsers);

async function fetchUsers() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=5');
        const data = await response.json();
        displayUsers(data.results);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

function displayUsers(users) {
    const profileContainer = document.getElementById('profileContainer');
    const profileTable = document.getElementById('profileTable').getElementsByTagName('tbody')[0];

    profileContainer.innerHTML = '';
    profileTable.innerHTML = '';

    users.forEach(user => {
        // Create and append profile card
        const card = document.createElement('div');
        card.innerHTML = `
            <img src="${user.picture.large}" alt="User Picture">
            <p>${user.name.first} ${user.name.last}</p>
            <p>${user.email}</p>
        `;
        profileContainer.appendChild(card);

        // Create and append table row
        const row = profileTable.insertRow();
        row.insertCell(0).textContent = `${user.name.first} ${user.name.last}`;
        row.insertCell(1).textContent = user.email;
    });
}
