// On s'assure que le code ne se lance que quand la page est prête
window.addEventListener('load', function() {
    const grille = document.getElementById('video-grid');
    
    // On vérifie si les vidéos existent bien dans videos.js
    if (typeof videos !== 'undefined' && videos.length > 0) {
        grille.innerHTML = ""; // On vide le message d'erreur s'il y en avait un

        // On affiche chaque film
        videos.forEach(film => {
            grille.innerHTML += `
                <div class="video-card" style="display: inline-block; width: 250px; margin: 10px; vertical-align: top; border: 1px solid #ccc; padding: 10px;">
                    <a href="video.html?id=${film.id}" style="text-decoration: none; color: inherit;">
                        <img src="${film.image}" style="width: 100%; height: auto;">
                        <h3>${film.titre}</h3>
                        <p>${film.resume || ''}</p>
                        <strong style="color: red;">VOIR LA VIDÉO</strong>
                    </a>
                </div>
            `;
        });
    } else {
        grille.innerHTML = "Aucun film trouvé. Vérifiez le fichier videos.js";
    }
});
