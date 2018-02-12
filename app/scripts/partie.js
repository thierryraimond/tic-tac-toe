/**
 * Constructeur qui gère la partie et prend en paramètre les 2 joueurs et la grille
 * 
 * @param joueurActif object un objet Joueur (ici joueur1)
 * @param adversaire object un objet Joueur (ici joueur2)
 * @param grille object l'objet Grille
 */
function Partie(joueurActif, adversaire, grille) {
	this.nbTour = 1; 
	this.joueurActif = joueurActif;
	this.adversaire = adversaire;
	this.grille = grille;
};

/**
 * Le tour du joueur suivant commence
 * On incrémente de 1 le nombre de tour
 * et on affiche le nom du joueur actif avec sa couleur
 */
Partie.prototype.changerTour = function () {
	var tempJoueurActif = this.joueurActif; // le temps de faire la permutation
	this.joueurActif = this.adversaire ;
	this.adversaire = tempJoueurActif;
	
	// on incrémente de 1 le nombre de tour
	this.nbTour++;
	
	// affiche le nom du joueur actif ainsi que sa couleur
	$('#nomJoueurActif').html(this.joueurActif.nom).css('color', this.joueurActif.couleur);	
};


/**
 * Contrôle si le joueur actif est victorieux
 */
Partie.prototype.chercheGagnant = function () {
	var nbSymboleLigne = 0;
	var nbSymboleColonne = 0;
	var nbSymboleDiagonale1 = 0;
	var nbSymboleDiagonale2 = 0;
	var n = this.grille.nbCaseCote -1;
	// on verifie chaque ligne de la grille
	for (var i = 0; i < this.grille.nbCaseCote ; i++) {
		if (this.grille.matrice[i][i] === this.joueurActif.symbole) { // diagonale1
			nbSymboleDiagonale1++;				 
		}
		if (this.grille.matrice[i][n--] === this.joueurActif.symbole) { // diagonale2
			nbSymboleDiagonale2++;				 
		}
		// On vérifie chaque colonne de la grille
		for (var j = 0; j < this.grille.nbCaseCote ; j++) {
			if (this.grille.matrice[i][j] === this.joueurActif.symbole) { // horizontal
				 nbSymboleLigne++;				 
			}
			if (this.grille.matrice[j][i] === this.joueurActif.symbole) { // vertical
				 nbSymboleColonne++;
			}
		}
		// On verifie s'il existe des alignements verticales ou horizontales avec les mêmes symboles
		if(nbSymboleLigne === this.grille.nbCaseCote || nbSymboleColonne === this.grille.nbCaseCote) {
			return true;
		}		
		nbSymboleLigne = 0;
		nbSymboleColonne = 0;		
	}		
	// Puis on verifie les 2 diagonales
	 return (nbSymboleDiagonale1 === this.grille.nbCaseCote || nbSymboleDiagonale2 === this.grille.nbCaseCote); 
};


/**
 * Retourne vrai si toutes les cases de la grille sont remplies 
 * et qu'on a atteint le nombre maximum de tour
 */
Partie.prototype.estTerminee = function () {
	return this.nbTour === this.grille.nbCaseCote*this.grille.nbCaseCote;	
};