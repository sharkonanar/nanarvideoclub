window.onload = function() {
    const grille = document.getElementById('video-grid');
    
    if (typeof videos !== 'undefined') {
        grille.innerHTML = ""; 

        // On centre la grille sur la page
        grille.style.display = "grid";
        grille.style.gridTemplateColumns = "repeat(auto-fill, minmax(280px, 1fr))";
        grille.style.gap = "30px";
        grille.style.maxWidth = "1200px"; // Largeur max du site
        grille.style.margin = "0 auto";    // Centre le tout
        grille.style.padding = "20px";

        videos.forEach(film => {
            grille.innerHTML += `
                <div style="background: #111; border: 1px solid #444; border-radius: 12px; overflow: hidden; display: flex; flex-direction: column;">
                    <img src="${film.image}" style="width: 100%; height: 200px; object-fit: cover;">
                    
                    <div style="padding: 15px; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between;">
                        <div>
                            <h3 style="color: #ff0000; margin: 0 0 10px 0; font-family: sans-serif;">${film.titre}</h3>
                            <p style="color: #eee; font-size: 0.9em; margin-bottom: 20px;">${film.resume}</p>
                        </div>
                        
                        <a href="video.html?id=${film.id}" style="display: block; background: #ff0000; color: white; text-align: center; padding: 10px; text-decoration: none; font-weight: bold; border-radius: 5px;">
                            VOIR LA VIDÉO
                        </a>
                    </div>
                </div>
            `;
        });
    }
