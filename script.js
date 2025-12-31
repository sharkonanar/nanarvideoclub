const grid = document.getElementById('video-grid');

// On ajoute (genreChoisi = 'all') ici pour recevoir l'ordre du bouton
function displayVideos(genreChoisi = 'all') {
    if (!grid || typeof videos === 'undefined') return;
    
    grid.innerHTML = ''; 

    videos.forEach(film => {
        // ON AJOUTE LA CONDITION DE FILTRAGE ICI
        if (genreChoisi === 'all' || film.genre === genreChoisi) {
            const card = document.createElement('div');
            // On s'assure que la classe CSS est là
            card.className = 'vhs-item'; 
            
            card.innerHTML = `
                <a href="video.html?id=${film.id}" style="text-decoration: none;">
                    <div class="vhs-box">
                        <img src="images/vhs-texture.png" class="vhs-tranche-img">
                        <img src="${film.image}" class="vhs-poster">
                        <span class="vhs-title">${film.titre}</span>
                    </div>
                </a>
            `;
            grid.appendChild(card);
        }
    });
}

// Cette fonction fait le pont entre le clic et l'affichage
function filterGenre(genre) {
    displayVideos(genre);
}

// Au chargement de la page, on affiche tout
displayVideos('all');
