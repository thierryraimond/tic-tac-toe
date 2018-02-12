/**
 * Fonctions utilitaires
 */

/**
 * Retourne les coordonnées x,y d'un tableau à 2 dimensions 
 * à partir du numéro de la case (dividende) 
 * et le nombre total de colonnes (diviseur)  
 * 
 * @param dividende entier numéro de la case du tableau à 2 dimensions
 * @param diviseur entier nombre total de colonnes du tableau à 2 dimensions
 * @returns objet x,y sous la forme couple clé: valeur
 */
function calculCoord(dividende, diviseur) {
	var reste = dividende % diviseur;
	var quotient = dividende/diviseur;
	var x,y ;
	if (dividende != 0) {
		y = reste - 1;
		x = parseInt(quotient);
		if (reste === 0) {
			x--;
			y = diviseur - 1;
		}
	} else {
		x = 0;
		y = 0;
	}
	console.log('les coordonnées de la case n° ' + dividende + ' pour un carré de ' +diviseur+ ' cases par côté sont matrice['+x+']['+y+']');
	return {x: x, y: y};
};