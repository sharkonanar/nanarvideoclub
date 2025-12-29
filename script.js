// TA BASE DE DONNÉES (Ajoute tes vidéos ici)
const videos = [
    {
        id: "video1",
        titre: "Les OVNIs du Mont Chauve",
        resume: "Enquête sur une observation historique survenue dans les Alpes en 1970.",
        image: "https://via.placeholder.com/400x225/333/fff",
        urlVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Exemple YouTube
    },
    {
        id: "video2",
        titre: "Manoir Hanté du Blackwood",
        resume: "Exploration nocturne dans l'une des demeures les plus redoutées.",
        image: "https://via.placeholder.com/400x225/333/fff",
        urlVideo: "Lien_Video_2"
    }
];

// FONCTION POUR AFFICHER LES CASES
const grid = document.getElementById('video-grid');

videos.forEach(video => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-image">
            <img src="${video.image}" alt="">
        </div>
        <div class="card-content">
            <div>
                <h3>${video.titre}</h3>
                <p>${video.resume}</p>
            </div>
            <a href="video.html?id=${video.id}" class="btn-voir">VOIR LA VIDÉO</a>
        </div>
    `;
    grid.appendChild(card);
});
