/**
 * Constructeur Grille qui sert à générer la grille du jeu sous la forme d'un carré
 * avec en paramètre le nombre de case de chaque côté du carré
 * 
 * @param nbCaseCote entier nombre de chaque côté du carré
 */
function Grille (nbCaseCote) {
	this.nbCaseCote = nbCaseCote;
	this.matrice = new Array(); // matrice de la grille sous la forme : matrice[nbCaseCote][nbCaseCote]
}

/**
 * Création et affichage HTML d'une grille vide et initialise à '' la matrice case par case
 */
Grille.prototype.genererVide = function() {
	var n = 1;
	// Pour chaque ligne de la grille
	for (var i = 0; i < this.nbCaseCote ; i++) {
		this.matrice[i] = new Array(); 
		// On insére une balise <div> avec la classe .row et l'id #row(i+1) à l'intérieure de la <div> #grille
		$('#grille').append('<div id="row' + (i+1) + '" class="row"></div>');		
		// Pour chaque colonne de la grille
		for (var j = 0; j < this.nbCaseCote ; j++) {
			// On insére une case vide dans la matrice plateau
			this.matrice[i][j] = '';
			// On affiche en HTML la case vide
			$('#row' + (i+1)).append(
				'<div id="case' + (n++) + '" class="col-xs-1 case vide">&nbsp</div>'
			);
		}
	}
}



