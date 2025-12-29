// CONFIGURATION
const filmsParPage = 8;
let pageActuelle = 1;

function afficherFilms() {
    const grille = document.getElementById('video-grid');
    const pageInfo = document.getElementById('page-info');

    // Sécurité : on vérifie que la grille et les données existent
    if (!grille || typeof videos === 'undefined') return;

    grille.innerHTML = '';

    // On inverse l'ordre (Nouveautés en premier)
    const filmsInverses = [...videos].reverse();

    // Calcul de la pagination
    const indexDebut = (pageActuelle - 1) * filmsParPage;
    const indexFin = indexDebut + filmsParPage;
    const filmsAffichees = filmsInverses.slice(indexDebut, indexFin);

    // Affichage des films (Design identique à ton ancien code)
    filmsAffichees.forEach(film => {
        grille.innerHTML += `
            <div class="video-card">
                <a href="video.html?id=${film.id}">
                    <img src="${film.image}" alt="${film.titre}">
                    <h3>${film.titre}</h3>
                </a>
            </div>
        `;
    });

    // Mise à jour de la pagination
    if (pageInfo) {
        pageInfo.innerText = `Page ${pageActuelle}`;
    }

    // Gestion de l'état des boutons
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    if (btnPrev) btnPrev.disabled = (pageActuelle === 1);
    if (btnNext) btnNext.disabled = (indexFin >= videos.length);
}

// Événements pour les boutons
document.getElementById('btn-prev')?.addEventListener('click', () => {
    if (pageActuelle > 1) {
        pageActuelle--;
        afficherFilms();
        window.scrollTo(0, 0);
    }
});

document.getElementById('btn-next')?.addEventListener('click', () => {
    if ((pageActuelle * filmsParPage) < videos.length) {
        pageActuelle++;
        afficherFilms();
        window.scrollTo(0, 0);
    }
});

// Lancement automatique au chargement
document.addEventListener('DOMContentLoaded', afficherFilms);
