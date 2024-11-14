const boys = [
    "Adil Ait Elhoucine", "Ahmed Adlaoui", "Ahmed Rabar", "Aymane Boujeddi", "Badr Eddine Massa Al Khayr", "Ilyass Bourass", "Ismail Baguni", "Karim Benkhira", "Marouane Amanar", "Mohamed Idrissi Alami",
    "Mohamed Boukab", "Mohammed Ayadi", "Nabil El Allaoui", "Nizar Beriane", "Omar Faraji", "Salahdine Daha", "Souhail Imarraine", "Youssef Chemlal", "Abdellatif Guezadi", "Anas Hammaoui", 
    "Ayoub Fetti", "Ayoub Jebbouri", "Ayyoub Oumha", "Fouad Lamrini", "Ibrahim Lmlilas", "Ilyas Ettaoussi", "Issam Mahtaj", "Lahcen Bassam", "Lahcen Ouirghane", "Mohamed Zouhairi",
    "Mohamed Karroumi", "Mohammed Latrach", "Mohammed Abdessetar Elyagoubi", "Omar Zariah", "Oussama Achbab", "Wassim El Mourabit", "Younes Imouga"
];

const girls = [
    "Bouchra Miloudy", "Hajar Tebai", "Meriem El Mecaniqui", "Meryem Litim", "Firdaous El Mokhtari", "Ikram El Benallali", "Samira Kibous", "Souad Arziki"
];

document.getElementById("showTeamBtn").addEventListener("click", function() {
    const teamList = document.getElementById("teamList");
    teamList.innerHTML = "";  
    const team = [];

    if (girls.length === 0) {
        team.push(...getRandomMembers(boys, 9));
    } else {
        team.push(...getRandomMembers(boys, 7), ...getRandomMembers(girls, 2));
    }

    shuffleArray(team);
    displayTeam(team, teamList);
});

function displayTeam(team, teamList) {
    setTimeout(() => teamList.classList.add('visible'), 100);

    team.forEach((member, index) => {
        const div = document.createElement("div");
        div.classList.add("teamMember");
        div.textContent = member;
        
        setTimeout(() => div.classList.add('visible'), index * 100);
        teamList.appendChild(div);
    });
}

function getRandomMembers(array, num) {
    const selected = [];
    const arrayCopy = [...array];

    for (let i = 0; i < num && arrayCopy.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * arrayCopy.length);
        selected.push(arrayCopy.splice(randomIndex, 1)[0]);
    }

    selected.forEach(name => removeFromArray(array, name));

    return selected;
}

function removeFromArray(array, name) {
    const index = array.indexOf(name);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
