window.addEventListener('load', function() {
    const grille = document.getElementById('video-grid');
    
    if (typeof videos !== 'undefined') {
        grille.innerHTML = ""; 

        // CONFIGURATION DE LA GRILLE (2 colonnes de rectangles)
        grille.style.display = "grid";
        // On crée des colonnes plus larges (500px) pour loger les rectangles
        grille.style.gridTemplateColumns = "repeat(auto-fill, minmax(500px, 1fr))"; 
        grille.style.gap = "20px";
        grille.style.justifyContent = "center";
        grille.style.padding = "20px";

        videos.forEach(film => {
            grille.innerHTML += `
                <div style="background: #1a1a1a; border: 1px solid #333; border-radius: 8px; overflow: hidden; height: 160px;">
                    <a href="video.html?id=${film.id}" style="display: flex; text-decoration: none; color: white; height: 100%;">
                        
                        <div style="width: 150px; flex-shrink: 0;">
                            <img src="${film.image}" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        
                        <div style="padding: 15px; display: flex; flex-direction: column; justify-content: center; overflow: hidden;">
                            <h3 style="margin: 0 0 5px 0; font-size: 1.1em; color: #ff0000; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                                ${film.titre}
                            </h3>
                            <p style="font-size: 0.85em; color: #bbb; margin: 0; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">
                                ${film.resume || 'Aucun résumé.'}
                            </p>
                        </div>
                        
                    </a>
                </div>
            `;
        });
    }
});
