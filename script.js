window.addEventListener('load', function() {
    const grille = document.getElementById('video-grid');
    
    if (typeof videos !== 'undefined') {
        grille.innerHTML = ""; 

        // CONFIGURATION DE LA GRILLE
        grille.style.display = "grid";
        // On garde les colonnes larges pour le côte à côte
        grille.style.gridTemplateColumns = "repeat(auto-fill, minmax(450px, 1fr))"; 
        grille.style.gap = "25px";
        grille.style.justifyContent = "center";
        grille.style.padding = "20px";
        grille.style.maxWidth = "1400px";
        grille.style.margin = "0 auto";

        videos.forEach(film => {
            grille.innerHTML += `
                <div style="background: #1a1a1a; border: 1px solid #333; border-radius: 10px; overflow: hidden; height: 250px;">
                    <a href="video.html?id=${film.id}" style="display: flex; text-decoration: none; color: white; height: 100%;">
                        
                        <div style="width: 200px; flex-shrink: 0;">
                            <img src="${film.image}" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        
                        <div style="padding: 20px; display: flex; flex-direction: column; justify-content: flex-start; flex-grow: 1;">
                            <h3 style="margin: 0 0 12px 0; font-size: 1.4em; color: #ff0000; font-family: sans-serif;">
                                ${film.titre}
                            </h3>
                            <p style="font-size: 1em; color: #bbb; margin: 0; line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical; overflow: hidden;">
                                ${film.resume || 'Aucun résumé.'}
                            </p>
                            <div style="margin-top: auto; font-weight: bold; color: #ff0000; text-align: right;">
                                VOIR LA VIDÉO >
                            </div>
                        </div>
                        
                    </a>
                </div>
            `;
        });
    }
});
