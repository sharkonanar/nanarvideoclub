window.addEventListener('load', function() {
    const grille = document.getElementById('video-grid');
    
    if (typeof videos !== 'undefined') {
        grille.innerHTML = ""; 

        // On crée une grille propre et centrée
        grille.style.display = "grid";
        // Les colonnes feront 250px maximum et se suivront sans vide
        grille.style.gridTemplateColumns = "repeat(auto-fill, 250px)"; 
        grille.style.gap = "20px";       // Espace fixe de 20px entre les cases
        grille.style.justifyContent = "center"; // Centre les colonnes dans la page
        grille.style.padding = "20px";

        videos.forEach(film => {
            grille.innerHTML += `
                <div style="background: #1a1a1a; border: 1px solid #333; border-radius: 8px; padding: 10px; display: flex; flex-direction: column; align-items: center; text-align: center;">
                    <a href="video.html?id=${film.id}" style="text-decoration: none; color: white;">
                        <img src="${film.image}" style="width: 230px; height: 320px; object-fit: cover; border-radius: 4px;">
                        <h3 style="margin: 10px 0; font-size: 1.1em;">${film.titre}</h3>
                        <p style="font-size: 0.8em; color: #aaa; margin-bottom: 10px; height: 40px; overflow: hidden;">${film.resume || ''}</p>
                        <span style="color: #ff0000; font-weight: bold; border: 1px solid #ff0000; padding: 5px 10px; border-radius: 4px; display: inline-block;">VOIR</span>
                    </a>
                </div>
            `;
        });
    }
});
