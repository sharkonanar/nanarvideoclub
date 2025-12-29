window.addEventListener('load', function() {
    const grille = document.getElementById('video-grid');
    
    if (typeof videos !== 'undefined') {
        grille.innerHTML = ""; 

        // FORCE LE CENTRAGE TOTAL
        grille.style.display = "flex";
        grille.style.flexDirection = "column";
        grille.style.alignItems = "center"; // Centre tout le contenu dans la page
        grille.style.width = "100%";

        videos.forEach(film => {
            // Création d'une boîte RECTANGULAIRE LARGE (Style bandeau)
            const card = document.createElement('div');
            card.style.width = "90%";
            card.style.maxWidth = "800px";
            card.style.height = "180px"; // Moins haut
            card.style.background = "#1a1a1a";
            card.style.margin = "15px 0";
            card.style.border = "1px solid #333";
            card.style.borderRadius = "10px";
            card.style.overflow = "hidden";

            card.innerHTML = `
                <a href="video.html?id=${film.id}" style="display: flex; text-decoration: none; color: white; height: 100%;">
                    <img src="${film.image}" style="width: 300px; height: 100%; object-fit: cover;">
                    
                    <div style="padding: 20px; display: flex; flex-direction: column; justify-content: center; flex: 1;">
                        <h3 style="margin: 0 0 10px 0; font-size: 1.4em; color: #ff0000;">${film.titre}</h3>
                        <p style="font-size: 0.95em; color: #ccc; margin: 0; line-height: 1.4; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;">
                            ${film.resume || 'Pas de résumé disponible.'}
                        </p>
                        <div style="margin-top: 10px; font-weight: bold; color: #ff0000;">VOIR LA VIDÉO ></div>
                    </div>
                </a>
            `;
            grille.appendChild(card);
        });
    }
});
