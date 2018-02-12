/**
 * Constructeur Joueur qui prend en paramètre le nom, la couleur et le symbole du joueur
 * 
 * @param nom string nom du joueur
 * @param couleur string couleur du joueur
 * @param symbole string symbole du joueur ('X' ou 'O')
 */
function Joueur(nom, couleur, symbole) {
	this.nom = nom;
	this.couleur = couleur;
	this.symbole = symbole;
}