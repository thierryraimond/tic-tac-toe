/**
 * Test Partie.js
 */
(function () {
	'use strict';

	describe('Test partie.js', function () {
		var joueur1, joueur2;
		var grille;
		var partie;
		var victoireVerticale;
		var victoireHorizontale;
		var victoireDiagonale1;
		var victoireDiagonale2;
		var terminee;
	  
		describe('deroulement d\'une partie', function () {
    	
			beforeEach(function() {
			    // Initialisation des joueurs avec leur nom, couleur et symbole
			    joueur1 = new Joueur('', 'red', 'X');
			    joueur2 = new Joueur('', 'green', 'O');
			    
			    // Initialisation de la grille de jeu à 3 cases de chaque côté
			    grille = new Grille(3);
			    
			    // génération et affichage html de la grille de jeu
			    grille.genererVide();
			    
			    // Début de la partie
			    partie = new Partie(joueur1, joueur2, grille);
			    
			    // matrice comportant un alignement vertical avec les mêmes symboles 
				victoireVerticale = [
					['X','O',''],
					['X','','O'],
					['X','','']
				];
				
			    // matrice comportant un alignement horizontal avec les mêmes symboles 
				victoireHorizontale = [
					['O','O','O'],
					['X','','X'],
					['X','','']
				];
				
			    // matrice comportant un alignement de la diagonale1 avec les mêmes symboles 
				victoireDiagonale1 = [
					['X','O','O'],
					['','X',''],
					['','','X']
				];
				
			    // matrice comportant un alignement de la diagonale2 avec les mêmes symboles 
				victoireDiagonale2 = [
					['X','','O'],
					['X','O',''],
					['O','','X']
				];
				
			    // matrice comportant aucun alignement avec les mêmes symboles 
				terminee = [
					['X','X','O'],
					['O','X','X'],
					['X','O','O']
				];
				
			    
			});
              
			it('Devrait correctement instancier la partie', function () {
				expect(partie.nbTour).toEqual(1);
				expect(partie.joueurActif).toEqual(joueur1);
				expect(partie.adversaire).toEqual(joueur2);
				expect(partie.grille).toEqual(grille);
			});
			
			it('Le joueur actif devrait changer et le compteur du nombre de tour est incrémenté de 1', function () {
				expect(partie.joueurActif).toEqual(joueur1);
				expect(partie.nbTour).toEqual(1);
				partie.changerTour();
				expect(partie.joueurActif).toEqual(joueur2);
				expect(partie.nbTour).toEqual(2);
			});		
			
			describe('Un gagnant devrait être trouvé', function () {
				
				it('Un alignement vertical avec les mêmes symboles devrait exister', function () {
					partie.grille.matrice = victoireVerticale;
					expect(partie.chercheGagnant()).toBe(true);
				});
				it('Un alignement horizontal avec les mêmes symboles devrait exister', function () {
					partie.joueurActif = joueur2;
					partie.grille.matrice = victoireHorizontale;
					expect(partie.chercheGagnant()).toBe(true);
				});
				it('Un alignement de la diagonale1 avec les mêmes symboles devrait exister', function () {
					partie.grille.matrice = victoireDiagonale1;
					expect(partie.chercheGagnant()).toBe(true);
				});
				it('Un alignement de la diagonale2 avec les mêmes symboles devrait exister', function () {
					partie.joueurActif = joueur2;
					partie.grille.matrice = victoireDiagonale2;
					expect(partie.chercheGagnant()).toBe(true);
				});
			});
			
			it('Match nul, toutes les cases contiennent un symbole et aucun alignement existe avec les mêmes symboles. La partie est terminee', function () {
				partie.grille.matrice = terminee;
				expect(partie.chercheGagnant()).toBe(false);
				partie.nbTour = Math.pow(terminee.length, 2)
				expect(partie.nbTour).toEqual(9);
			});
			
		});
	});
})();