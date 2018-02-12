$(function(){
    console.log('its working !');

    // Initialisation des joueurs avec leur nom, couleur et symbole
    var joueur1 = new Joueur('', 'red', 'X');
    var joueur2 = new Joueur('', 'green', 'O');

    // Initialisation de la grille de jeu à 3 cases de chaque côté
    var grille = new Grille(3);
    
    // génération et affichage html de la grille de jeu
    grille.genererVide();
            
    // Début de la partie
    var partie = new Partie(joueur1, joueur2, grille);

    // variables nécessaires pour determiner les coordonnées des cases sur la grille
    var numcase, coord, x, y;
    
    /******************************************
     ********** GESTION DES EVENEMENTS ******** 
     ******************************************/
    
    // Quand on valide le formulaire de saisie des noms des joueurs
    $('#formNomJoueur').submit('click', function(event){
    	event.preventDefault();
    	
    	var joueur1Nom = $.trim($('#inputJoueur1Nom').val());
    	var joueur2Nom = $.trim($('#inputJoueur2Nom').val());
    	var messageErreur = 'Un nom de joueur est vide ou les deux noms sont identiques. Veuillez corriger.'
    	
    	// contrôle IHM
    	if (joueur1Nom === joueur2Nom || joueur1Nom.length === 0 || joueur2Nom.length === 0) {
    		$('#erreurNomJoueur').html(messageErreur).show('slow').delay(10000).hide('slow');
    	} else {   		
    		// Modification du nom de chaque joueur
    		joueur1.nom = joueur1Nom;
    		joueur2.nom = joueur2Nom;    		
    		
    		$('#textDebutJeu').html('<h1>Que la partie commence ' + joueur1.nom + ', et ' + joueur2.nom + '</h1>');
    		$('#nomJoueurActif').html(partie.joueurActif.nom).css('color', partie.joueurActif.couleur);
    		
    		$('#formNomJoueur').hide('slow');
    		$('#jeu').show('slow');	
    	}		
    });
    
    // Quand on clique sur une case de la grille
    $('#grille .col-xs-1').on('click', function() {
		numCase = parseInt($(this).attr('id').replace('case',''));
		coord = calculCoord(numCase, grille.nbCaseCote);
		x = coord.x;
		y = coord.y;
        // si la case est vide
		if ($('#'+ this.id).html() == '&nbsp;') {
			// alors on modifie la grille HTML avec le symbole et la couleur du joueur actif
			$('#'+ this.id).html(partie.joueurActif.symbole).css('color', partie.joueurActif.couleur);
			// On modifie la matrice avec le symbole du joueur
			grille.matrice[x][y] = partie.joueurActif.symbole;
			console.log(grille.matrice[x][y]);
			// y a t il une victoire ?
			if(partie.chercheGagnant()){
				$('#grille .col-xs-1').off(); // retire tous les événements sur les cases de la grille
				$('#info').html(partie.joueurActif.nom + ' a gagné !!!');
			} else if(partie.estTerminee()){
				$('#grille .col-xs-1').off(); // retire tous les événements sur les cases de la grille
				$('#info').html('Le jeu est terminé');
			} else {
				//changement de tour	
				partie.changerTour();
			}
        }
    });
})